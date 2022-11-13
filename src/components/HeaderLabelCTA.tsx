import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { colors } from '../../assets/colors';

type HeaderLabelCTAProps = {
  label: string;
  onPress?: () => void;
  isPrimary?: boolean;
  cta?: CtaButtonProps[];
};

type CtaButtonProps = {
  property: React.ReactNode | string;
  action: () => void;
};
export const HeaderLabelCTA = ({
  label,
  cta,
  isPrimary = true,
  onPress,
}: HeaderLabelCTAProps) => (
  <View style={styles.headerContainer}>
    <Text
      style={[
        styles.headerText,
        { fontWeight: isPrimary ? 'bold' : 'normal' },
      ]}>
      {label}
    </Text>
    <View style={styles.headerActionIcons}>
      {cta?.map((item, index) => (
        <Pressable key={index} onPress={item.action} style={styles.margIcon}>
          {typeof item.property === 'string' ? (
            <Text style={styles.xsText}>{item.property}</Text>
          ) : (
            item.property
          )}
        </Pressable>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 18,
  },
  headerActionIcons: {
    display: 'flex',
    flexDirection: 'row',
  },
  margIcon: {
    marginRight: 20,
  },
  xsText: {
    fontSize: 12,
    color: colors.primary,
    textDecorationLine: 'underline',
  },
});
