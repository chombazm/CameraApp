import React from "react"

import { View, Text } from "react-native";
import { ButtonsContainer } from "../../components/ButtonsContainer.";
import { styles } from "./styles";
import { FlashIcon, CrossIcon, CameraIcon, SwitchCameraType } from "../../../assets/icons";
import { Camera, CameraType } from 'expo-camera';

const TopButtons = [
  {
    text: "Flash",
    icon: <FlashIcon />,
    onPress: () => console.log("Flash"),
  },
  {
    text: "Identify the plant",

  },
  {
    text: "Cross",
    icon: <CrossIcon />,
    onPress: () => console.log("Cross"),
  },
]
const BottomButtons = [
  {
    text: "File",
    onPress: () => console.log("File"),
  },
  {
    text: "Camera",
    icon: <CameraIcon />,
    onPress: () => console.log("Camera"),
  },
  {
    text: "Switch",
    icon: <SwitchCameraType />,
    onPress: () => CameraType.back ? CameraType.front : CameraType.back,
  },
]
export const CameraScreen = () => {
  const [type, setType] = React.useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  // get camera permision
  React.useEffect(() => {
    requestPermission();
  }, []);

  return (
    <View style={styles.container}>
      {/* Add 3 icons in row */}
      <ButtonsContainer topButtons={TopButtons} />
      
      <Camera style={styles.camera} type={type} />
     
      <ButtonsContainer topButtons={BottomButtons} />
      {/* <ButtonsContainer /> */}
    </View>
  )
}