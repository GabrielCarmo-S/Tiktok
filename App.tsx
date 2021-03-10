import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </>
  );
}
