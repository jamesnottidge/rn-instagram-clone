import { View, Text, TextInput, Image } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Button, Divider } from "react-native-elements";
import validUrl from "valid-url";
import { getAuth } from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

const uploadPostSchema = Yup.object().shape({
  imageURL: Yup.string().url().required("A URl is required"),
  caption: Yup.string().max(2200, "Caption has reached the character limit"),
});

const PLACEHOLDER_IMG =
  "https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=";

const FormikPostUploader = ({ navigation }) => {
  console.log(getAuth().currentUser.uid);
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);
  const onNewPostUpload = (caption, imageUrl) => {
    addDoc(
      collection(
        collection(db, "users"),
        `${getAuth().currentUser.email}`,
        "posts"
      ),
      {
        owner_uid: getAuth().currentUser.uid,
        owner_email: getAuth().currentUser.email,
        caption: caption,
        imageURL: imageUrl,
        user: getAuth().currentUser.displayName,
        profile_picture: getAuth().currentUser.photoURL,
        createdAt: serverTimestamp(),
        likes: 0,
        likes_by_users: [],
        comments: [],
      }
    )
      .then((response) => console.log(response))
      .catch((error) => console.log(error.message));
  };
  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => {
        onNewPostUpload(values.caption, values.imageURL);
        // console.log(values);
        console.log("Your Post was submitted succesfully");
        navigation.goBack();
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View
            style={{
              margin: 20,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Image
              source={{
                uri: validUrl.isUri(thumbnailUrl)
                  ? thumbnailUrl
                  : PLACEHOLDER_IMG,
              }}
              style={{ width: 100, height: 100 }}
            />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <TextInput
                style={{ color: "white", fontSize: 20 }}
                placeholder="Write a caption..."
                placeholderTextColor="gray"
                multiline={true}
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
              />
            </View>
          </View>
          <Divider width={0.2} orientation="vertical" />
          <TextInput
            onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
            style={{
              color: "white",
              fontSize: 20,
              paddingTop: 5,
              marginBottom: 7,
            }}
            placeholder="Enter image URL... "
            placeholderTextColor="gray"
            onChangeText={handleChange("imageURL")}
            onBlur={handleBlur("imageURL")}
            value={values.imageURL}
          />

          <Button
            onPress={handleSubmit}
            title="Share"
            disabled={!isValid}
          ></Button>
        </>
      )}
      {/* Enters */}
    </Formik>
  );
};

export default FormikPostUploader;
