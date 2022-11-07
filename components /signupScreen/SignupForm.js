import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import { React, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

const auth = getAuth();
const SignupForm = ({ navigation }) => {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email address is required"),
    username: Yup.string().required().min(2, "A username is required"),
    password: Yup.string()
      .required()
      .min(6, "Your password has to be at least 6 characters"),
  });

  const getRandomUser = async () => {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    return data.results[0].picture.large;
  };

  const onSignUp = async (email, password, username) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const docRef = await addDoc(collection(db, "users"), {
          owner_uid: user.uid,
          username: username,
          email: email,
          profile_picture: await getRandomProfilePicture(),
        });
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };
  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", username: "", password: "" }}
        onSubmit={(values) => {
          onSignUp(values.email, values.password, values.username);
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Phone number, username or email"
                autocapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.username.length || values.username.length >= 2
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Username"
                autoCapitalize="none"
                textContentType="username"
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length >= 6
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry="true"
                textContentType="password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>

            <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
              <Text style={{ color: "#6BB0F5" }}>Forgot Password</Text>
            </View>

            <Pressable
              titleSize={20}
              style={styles.button(isValid)}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>

            <View style={styles.signUpContainer}>
              <Text>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ color: "#6BB0F5" }}>Log Inr</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },

  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    borderWidth: 1,
  },

  button: (isValid) => ({
    backgroundColor: isValid ? "#0096F6" : "#9ACAF7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 43,
    borderRadius: 4,
  }),

  buttonText: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 20,
  },

  signUpContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 50,
  },
});

export default SignupForm;
