import "react-native-gesture-handler";
import firebase from "./firebase";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens /HomeScreen";
import NewPostScreen from "./screens /NewPostScreen";
import { SignedInStack } from "./screens /navigation";
import AuthNavigation from "./AuthNavigation";

export default function App() {
  //   return <HomeScreen />;
  //   return <NewPostScreen />;
  return <AuthNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
