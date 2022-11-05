import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { CameraScreen } from './src/screens/Camera';

export default function App() {
  return (
    <View style={styles.container}>
      <CameraScreen />
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
