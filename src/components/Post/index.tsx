import React, { useState } from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { Video } from "expo-av";
import styles from "./styles";

import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";

const Post = (props: { post: any }) => {
  const [post, setPost] = useState(props.post);

  const [isLiked, setIsLiked] = useState(false);

  const onLikePress = () => {
    const likesToAdd = isLiked ? -1 : 1;
    setPost({...post, likes: post.likes + likesToAdd});

    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: post.videoUri,
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
              uri: post.user.imageUri,
            }}
          />

          <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
            <AntDesign name={"heart"} size={40} color={isLiked ? 'red' : 'white'} />
            <Text style={styles.statsLabel}>{post.likes}</Text>
          </TouchableOpacity>

          <View style={styles.iconContainer}>
            <FontAwesome name={"commenting"} size={40} color="white" />
            <Text style={styles.statsLabel}>{post.comments}</Text>
          </View>

          <View style={styles.iconContainer}>
            <Fontisto name={"share-a"} size={35} color="white" />
            <Text style={styles.statsLabel}>{post.shares}</Text>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <View>
            <Text style={styles.handle}>{post.user.username}</Text>
            <Text style={styles.description}>{post.description}</Text>

            <View style={styles.songRow}>
              <Entypo name={"beamed-note"} size={24} color="white" />
              <Text style={styles.songName}>{post.song.name}</Text>
            </View>
          </View>

          <Image
            style={styles.songImage}
            source={{
              uri: post.song.imageUri,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Post;
