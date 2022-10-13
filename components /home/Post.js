import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";
import React from "react";

const postFooterIcons = [
  {
    name: "Like",
    imageURL:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png",

    likedImageURL: "https://img.icons8.com/ios-filled/50/000000/like--v1.png",
  },
  {
    name: "Comment",
    imageURL:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/speech-bubble--v1.png",
  },
  {
    name: "Share",
    imageURL:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/sent--v1.png",
  },
  {
    name: "Save",
    imageURL:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/bookmark-ribbon--v1.png",
    savedImageURL:
      "https://img.icons8.com/ios-filled/50/000000/bookmark-ribbon.png",
  },
];

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter post={post} />
        <Likes post={post} />
        <Caption post={post} />
      </View>
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
  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    <View style={styles.leftFooterIconsContainer}>
      <Icon
        imgStyle={styles.footerIcon}
        imageURL={postFooterIcons[0].imageURL}
      />
      <Icon
        imgStyle={styles.footerIcon}
        imageURL={postFooterIcons[1].imageURL}
      />
      <Icon
        imgStyle={[styles.footerIcon, styles.shareIcon]}
        imageURL={postFooterIcons[2].imageURL}
      />
    </View>
    <View>
      <Icon
        imgStyle={styles.footerIcon}
        imageURL={postFooterIcons[3].imageURL}
      />
    </View>
  </View>
);

const Icon = ({ imgStyle, imageURL }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imageURL }} />
  </TouchableOpacity>
);

const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={{ color: "white", fontWeight: "600" }}>
      {post.likes.toLocaleString("en")} likes
    </Text>
  </View>
);

const Caption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: "white " }}>
      <Text style={{ color: "white", fontWeight: "600" }}>{post.user}</Text>
      <Text style={{ color: "white" }}> {post.caption}</Text>
    </Text>
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
  footerIcon: {
    width: 33,
    height: 33,
  },
  leftFooterIconsContainer: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
  },
  shareIcon: {
    transform: [{ rotate: "320deg" }],
    marginTop: -3,
  },
});
export default Post;
