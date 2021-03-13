import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Camera } from "expo-camera";

import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const Cameras = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const [isRecording, setRecording] = useState(false);

  const onRecord = () => {};

  return (
    <View style={styles.container}>
      <Camera style={styles.preview} type={type} />
      <TouchableOpacity
        onPress={onRecord}
        style={isRecording ? styles.buttonStop : styles.buttonRecord}
      />
    </View>
  );
};

export default Cameras;
