import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import AddNewPost from "../components /newPost/AddNewPost";
import FormikPostUploader from "../components /newPost/FormikPostUploader";

const NewPostScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      <AddNewPost navigation={navigation} />
      <FormikPostUploader />
    </SafeAreaView>
  );
};

export default NewPostScreen;
