import React from 'react';

import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { colors } from '../../assets/colors';
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
  return (
    <View style={styles.container}>
      {alerts.map(alert => (
        <Row
          key={alert.title}
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
      <Text style={styles.xsTextShade} numberOfLines={1} ellipsizeMode="tail">
        {subtitle}
      </Text>
    </View>
    <Pressable style={styles.arrowView} onPress={onPress}>
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
    marginVertical: 5,
    // backgroundColor: 'pink',
  },
  arrowView: {
    width: 20,
    // backgroundColor: 'red',
    alignSelf: 'center',
  },
  fxLeft: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    // backgroundColor: 'green',
    marginHorizontal: 5,
  },
  xsText: {
    fontSize: 14,
  },
  xsTextShade: {
    marginTop: 4,
    fontSize: 12,
    color: colors.gray,
  },
});
