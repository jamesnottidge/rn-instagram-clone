import { View, Text } from "react-native";
import React, { useState } from "react";
import { SignedInStack, SignedOutStack } from "./screens /navigation";
import { useEffect } from "react";
import { getAuth } from "firebase/auth";
const auth = getAuth();

const AuthNavigation = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const userHandler = (user) =>
    user ? setCurrentUser(user) : setCurrentUser(null);
  useEffect(() => auth.onAuthStateChanged((user) => userHandler(user)), []);
  return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>;
};
export default AuthNavigation;
