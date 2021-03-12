import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import Home from "./src/screens/Home";
import 'react-native-gesture-handler'
import Navigation from './src/navigation'
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

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
