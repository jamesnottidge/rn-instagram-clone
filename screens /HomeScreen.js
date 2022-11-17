import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components /home/Header";
import Stories from "../components /home/Stories";
import Post from "../components /home/Post";
// import { POSTS } from "../data/posts";
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
  onSnapshot,
} from "firebase/firestore";

const HomeScreen = ({ navigation }) => {
  const [POSTS, setPOSTS] = useState([]);
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
      //   getDocs(posts)
      //     .then((querySnapshot) => {
      //       const postArray = [];
      //       //   console.log(querySnapshot);
      //       querySnapshot.forEach((doc) => {
      //         postArray.push(doc.data());
      //         // console.log("Another document: ", doc.data());
      //       });
      //       setPOSTS(() => [...postArray]);
      //       //   console.log(POSTS);
      //     })
      //     .catch((err) => console.log(err));
      //   console.log(posts);

      try {
        const unsubscribe = onSnapshot(posts, (querySnapshot) => {
          const postArray = [];
          querySnapshot.forEach((doc) => {
            postArray.push({ id: doc.id, ...doc.data() });
          });
          setPOSTS(() => [...postArray]);
          console.log("this worked");
        });
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchPosts();
    // addPosts();
  }, []);
  console.log("The Posts: ", POSTS);
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
