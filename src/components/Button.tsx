import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { PressableArea } from './PressableArea';

export const ButtonComp = () => {
  return (
    <PressableArea style={styles.container}>
      {/* Icon */}
      <Text>Flash</Text>
      <Text>Button</Text>
    </PressableArea>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'papayawhip',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
