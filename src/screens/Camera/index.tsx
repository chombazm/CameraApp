import React from 'react';

import { View, Text, Pressable, Dimensions } from 'react-native';
import { ButtonsContainer } from '../../components/ButtonsContainer.';
import { styles } from './styles';
import {
  FlashIcon,
  CrossIcon,
  CameraIcon,
  SwitchCameraType,
} from '../../../assets/icons';
import { Camera, CameraType } from 'expo-camera';
import { NavigationProps } from '../../types';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const CAPTURE_SIZE = Math.floor(WINDOW_HEIGHT * 0.08);

export const CameraScreen = ({ navigation }: NavigationProps) => {
  const cameraRef = React.useRef();
  const [type, setType] = React.useState(CameraType.back);
  const [isCameraReady, setIsCameraReady] = React.useState(false);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const [hasPermission, setHasPermission] = React.useState<
    string | null | boolean
  >(null);

  React.useEffect(() => {
    onHandlePermission();
  }, []);

  const onHandlePermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const handleCameraType = () => {
    setType(type === CameraType.back ? CameraType.front : CameraType.back);
  };

  const handleCameraCapture = () => {
    navigation.navigate('FoundCapture');
  };

  const handleViewGallery = () => {};

  const handleClose = () => {
    navigation.goBack();
  };

  const handleFlash = () => {};

  // get camera permision
  React.useEffect(() => {
    requestPermission();
  }, []);

  // if (!isCameraReady) return <View />;
  return (
    <View style={styles.container}>
      <Camera
        // ref={cameraRef}
        style={styles.camera}
        type={type}
        onCameraReady={() => setIsCameraReady(true)}
      />
      <View style={styles.buttonContainerTop}>
        <Pressable onPress={handleFlash}>
          <FlashIcon />
        </Pressable>
        <Pressable>
          <Text style={styles.mtm}>Identify the plant</Text>
        </Pressable>
        <Pressable onPress={handleClose}>
          <CrossIcon />
        </Pressable>
      </View>

      <View style={styles.buttonContainerBottom}>
        <Pressable onPress={handleViewGallery}>
          <Text style={styles.mtm}>File</Text>
        </Pressable>
        <Pressable onPress={handleCameraCapture}>
          <CameraIcon />
        </Pressable>
        <Pressable onPress={handleCameraType}>
          <SwitchCameraType />
        </Pressable>
      </View>
    </View>
  );
};
