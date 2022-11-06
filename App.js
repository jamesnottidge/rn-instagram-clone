import "react-native-gesture-handler";
import firebase from "./firebase";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens /HomeScreen";
import NewPostScreen from "./screens /NewPostScreen";
import SignedInStack from "./screens /navigation";

export default function App() {
  //   return <HomeScreen />;
  //   return <NewPostScreen />;
  return <SignedInStack />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
