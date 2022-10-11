import { View, Text, Image, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
import React from "react";

const Post = ({ post }) => {
  console.log(post);
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View style={styles.PostHeader}>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: post.profile_picture }} style={styles.story} />
      <Text style={{ color: "white", marginLeft: 5, fontWeight: "700" }}>
        {post.user}
      </Text>
    </View>
    <Text style={{ color: "white", fontWeight: "900" }}>...</Text>
  </View>
);

const styles = StyleSheet.create({
  PostHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 5,
  },
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: "#eee",
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "#ff8501",
    alignItems: "center",
  },
});
export default Post;
