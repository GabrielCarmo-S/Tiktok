import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import Home from "./src/screens/Home";
import 'react-native-gesture-handler'
import Navigation from './src/navigation'

export default function App() {
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <Navigation />
      </SafeAreaView>
    </>
  );
}
