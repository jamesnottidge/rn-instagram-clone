import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens /HomeScreen";
import NewPostScreen from "./screens /NewPostScreen";

export default function App() {
  //   return <HomeScreen />;
  return <NewPostScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
