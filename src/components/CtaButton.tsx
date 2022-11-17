import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from '../../assets/colors';
import { PressableArea } from './PressableArea';

type CtaButtonProps = {
  text: string;
  onPress: () => void;
  icon?: React.ReactNode;
  isPrimary?: boolean;
};

export const CtaButton = ({
  icon,
  text,
  onPress,
  isPrimary = true,
}: CtaButtonProps) => {
  return (
    <PressableArea
      style={[
        styles.buttonBottom,
        { backgroundColor: isPrimary ? colors.primary : colors.secondary },
      ]}
      onPress={onPress}>
      <View style={styles.groupBtnContent}>
        {icon && <View style={styles.spaceIcon}>{icon}</View>}
        <Text
          style={[
            styles.buttonBottomText,
            { color: isPrimary ? colors.white : colors.primary },
          ]}>
          {text}
        </Text>
      </View>
    </PressableArea>
  );
};

const styles = StyleSheet.create({
  buttonBottom: {
    width: '100%',
    // height: 60,
    paddingVertical: 15,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  groupBtnContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonBottomText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  spaceIcon: {
    marginRight: 10,
  },
});
