import { View, Text, Image, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
import React from "react";

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter post={post} />
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

const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image
      source={{ uri: post.imageURL }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = ({ post }) => (
  <Text style={{ color: "white", fontWeight: "700" }}>Ikunnah</Text>
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
