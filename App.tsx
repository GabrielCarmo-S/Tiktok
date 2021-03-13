import React, { ReactNode, useEffect } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import "react-native-gesture-handler";
import Navigation from "./src/navigation";
import { withAuthenticator } from "aws-amplify-react-native";
import Amplify, { Auth, API, graphqlOperation } from "aws-amplify";
import config from "./aws-exports";
import { getUser } from "./src/graphql/queries";
import { createUser } from "./src/graphql/mutations";

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const randomImages = [
  "https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg",
  "https://hieumobile.com/wp-content/uploads/avatar-among-us-3.jpg",
  "https://hieumobile.com/wp-content/uploads/avatar-among-us-6.jpg",
  "https://hieumobile.com/wp-content/uploads/avatar-among-us-9.jpg",
];

const getRandomImage = () => {
  return randomImages[Math.floor(Math.random() * randomImages.length)];
};

const App = () => {
  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });

      if (!userInfo) {
        return;
      }

      const getUsers = await API.graphql(
        graphqlOperation(getUser, { id: userInfo.attributes.sub })
      );

      if (getUsers.data.getUser) {
        return;
      }

      const newUser = {
        id: userInfo.attributes.sub,
        username: userInfo.username,
        email: userInfo.attributes.email,
        imageUri: getRandomImage(),
      };

      await API.graphql(graphqlOperation(createUser, { input: newUser }));
    };

    fetchUser();
  }, []);

  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={{ flex: 1 }}>
        <Navigation />
      </SafeAreaView>
    </>
  );
};

export default withAuthenticator(App);
