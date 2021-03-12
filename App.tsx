import React, { ReactNode } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import 'react-native-gesture-handler'
import Navigation from './src/navigation'
import { withAuthenticator } from 'aws-amplify-react-native'
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);


const App: () => ReactNode = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <Navigation />
      </SafeAreaView>
    </>
  );
}

export default withAuthenticator(App);