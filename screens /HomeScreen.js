import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React, { useEffect } from "react";
import Header from "../components /home/Header";
import Stories from "../components /home/Stories";
import Post from "../components /home/Post";
import { POSTS } from "../data/posts";
import BottomTabs from "../components /home/BottomTabs";
import { bottomTabIcons } from "../components /home/BottomTabs";
import { db } from "../firebase";
import {
  collectionGroup,
  query,
  where,
  getDocs,
  collection,
  addDoc,
  setDoc,
} from "firebase/firestore";

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    const addPosts = async () => {
      addDoc(
        collection(collection(db, "users"), "VtB14OauGl9jJRQhx4GS", "posts"),
        {
          caption: "Fight away",
          imageURL: "https://i.ibb.co/182bP1y/4k.png",
        }
      )
        .then((response) => console.log(response))
        .catch((error) => console.log(error.message));
    };
    const fetchPosts = async () => {
      const posts = query(
        collectionGroup(db, "posts")
        // where("caption", "==", "[sS]*")
        // where("caption", "==", "Cool day!")
      );
      //   console.log(posts);
      // const querySnapshot = await getDocs(posts);
      getDocs(posts)
        .then((querySnapshot) => {
          console.log(querySnapshot);
          querySnapshot.forEach((doc) => {
            console.log("Another document: ", doc.data());
          });
        })
        .catch((err) => console.log(err));
      //   console.log(posts);
    };
    // fetchPosts();
    // addPosts();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});
export default HomeScreen;
