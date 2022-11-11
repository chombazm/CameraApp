import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../assets/colors';

export const SectionDivider = ({ message }: { message?: string }) => {
  if (!message) return <View style={styles.dividerLine} />;
  return (
    <View style={styles.sectionDivider}>
      <View style={styles.sectionDividerLine} />
      <Text style={styles.sectionDividerText}>{message}</Text>
      <View style={styles.sectionDividerLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionDivider: {
    width: '100%',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  sectionDividerText: {
    paddingHorizontal: 10,
  },
  sectionDividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
    alignSelf: 'center',
  },
  dividerLine: {
    width: '100%',
    height: 2,
    backgroundColor: colors.grayLight,
    marginTop: 20,
  },
});
