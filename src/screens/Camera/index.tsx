import React from 'react';
// import { captureRef } from 'react-native-view-shot';
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
import { MainTabParamList, RootStackParamList } from '../../types';
import { RouteProp } from '@react-navigation/native';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const CAPTURE_SIZE = Math.floor(WINDOW_HEIGHT * 0.08);

// TODO: Type the navigation prop
export const CameraScreen = ({ navigation }: any) => {
  //  TODO: Type the useRef hook
  const cameraRef = React.useRef<any>();
  const [type, setType] = React.useState(CameraType.back);
  const [isCameraReady, setIsCameraReady] = React.useState(false);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [photo, setPhoto] = React.useState<string | null>(null);
  // state error checkers TODO: this can be refactored
  const [isCameraError, setIsCameraError] = React.useState(false);
  const [isFlashError, setIsFlashError] = React.useState(false);
  const [isCaptureError, setIsCaptureError] = React.useState(true);

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
  const handleCameraCapture = async () => {
    const cameraOptions = {
      quality: 1,
      base64: true,
      exif: true,
    };
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync(cameraOptions);
        setPhoto(photo.uri);
        // navigation.navigate('FoundCapture', { uri: photo.uri });
      } catch (error) {
        console.log(error);
      }
    }
  };

  // navigation.navigate('FoundCapture');

  const handleViewGallery = () => {};

  const handleClose = () => {
    navigation.goBack();
  };

  const handleFlash = () => {};

  // get camera permision
  React.useEffect(() => {
    requestPermission();
  }, []);

  React.useEffect(() => {
    if (permission?.granted) {
      setIsCameraReady(true);
    }
  }, [permission, isCameraReady]);

  if (!isCameraReady) return <View style={styles.cameraNotReady} />;
  // if (isCaptureError)
  //   return (
  //     <View style={styles.errorContainer}>
  //       <Text style={styles.errorText}>
  //         There was an error capturing the image
  //       </Text>
  //     </View>
  //   );
  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
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
