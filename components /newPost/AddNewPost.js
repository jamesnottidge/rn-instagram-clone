import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import FormikPostUploader from "./FormikPostUploader";
import { getAuth } from "firebase/auth";

const AddNewPost = ({ navigation }) => {
  //   console.log(getAuth().currentUser.email);
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <FormikPostUploader navigation={navigation} />
    </View>
  );
};

const Header = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={{
            uri: "https://img.icons8.com/ios-glyphs/90/ffffff/back.png",
          }}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>

      <Text style={styles.headerText}>NEW POST</Text>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerText: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
    marginRight: 27.5,
  },
});

export default AddNewPost;
