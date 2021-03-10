import React, { useState } from "react";
import { Text, Image, View } from "react-native";
import { Video } from "expo-av";
import styles from "./styles";

import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";


const Post = () => {
  return (
    <View style={styles.container}>
      <Video
        source={{
          uri:
            "https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4",
        }}
        style={styles.video}
        shouldPlay
        isLooping
        resizeMode={"cover"}
      />

      <View style={styles.uiContainer}>
        <View style={styles.rightContainer}>
          <Image
            style={styles.profilePicture}
            source={{
              uri:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu8GrR4JDZhoglUgxri3V6xJFfm60u95UEcA&usqp=CAU",
            }}
          />

          <View style={styles.iconContainer}>
            <AntDesign name={"heart"} size={40} color="white" />
            <Text style={styles.statsLabel}>123</Text>
          </View>

          <View style={styles.iconContainer}>
            <FontAwesome name={"commenting"} size={40} color="white" />
            <Text style={styles.statsLabel}>123</Text>
          </View>

          <View style={styles.iconContainer}>
            <Fontisto name={"share-a"} size={35} color="white" />
            <Text style={styles.statsLabel}>123</Text>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <Text style={styles.handle}>@gabrielcarmo-s</Text>
          <Text style={styles.description}>kkkkkkkkkkkkkkkkkk</Text>

          <View style={styles.songRow}>
            <Entypo name={"beamed-note"} size={24} color="white" />
            <Text style={styles.songName}>Nf - The Search</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Post;
