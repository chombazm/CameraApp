import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { CameraScreen } from './src/screens/Camera';
import { FlowerScreen } from './src/screens/Flower';
import { HomeScreen } from './src/screens/Home';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from './src/navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar style="auto" />
    </SafeAreaProvider>
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
