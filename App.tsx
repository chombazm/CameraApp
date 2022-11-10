import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { CameraScreen } from './src/screens/Camera';
import { FlowerScreen } from './src/screens/Flower';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CameraScreen /> */}

      <FlowerScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 20,

    // backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
