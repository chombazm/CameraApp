import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { PressableArea } from './PressableArea';

type ButtonProps = {
  topButtons: {
    text?: string;
    icon?: ReactNode;
    onPress?: () => void;
  }[];
};

export const ButtonsContainer = ({ topButtons }: ButtonProps) => {
  return (
    <View style={styles.container}>
      {topButtons.map((button, index) => (
        <PressableArea key={index} onPress={button.onPress}>
          {button.icon || <Text style={styles.mtm}>{button.text}</Text>}
        </PressableArea>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 25,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mtm: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
});
