import React from 'react';

import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { ArrowIcon } from '../../assets/icons';

type AlertsProps = {
  alerts: RowProps[];
};

type RowProps = {
  title: string;
  subtitle: string;
  image: any;
  onPress: () => void;
};

export const RowCols = ({ alerts }: AlertsProps) => {
  console.log(alerts);
  return (
    <View style={styles.container}>
      {alerts.map(alert => (
        <Row
          title={alert.title}
          subtitle={alert.subtitle}
          onPress={alert.onPress}
          image={alert.image}
        />
      ))}
    </View>
  );
};

const Row = ({ title, subtitle, image, onPress }: RowProps) => (
  <View style={styles.row}>
    <View>
      <Image source={image} />
    </View>
    <View style={styles.fxLeft}>
      <Text style={styles.xsText}>{title}</Text>
      <Text style={styles.xsText}>{subtitle}</Text>
    </View>
    <Pressable style={styles.fxLeft} onPress={onPress}>
      <ArrowIcon />
    </Pressable>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  fxLeft: {
    alignSelf: 'center',
  },
  xsText: {
    fontSize: 14,
  },
});
