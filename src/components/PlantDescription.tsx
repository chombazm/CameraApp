import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../assets/colors';

type PlantDescriptionProps = {
  title: string;
  text: string;
  source: string;
};
export const PlantDescription = ({
  title,
  text,
  source,
}: PlantDescriptionProps) => {
  return (
    <View style={styles.descriptionContainer}>
      <View>
        <Text style={styles.descriptionHeaderText}>{title}</Text>
        <Text style={styles.descriptionHeaderSubText}>From {source}</Text>
      </View>

      <Text style={styles.descriptionText}>
        {text}
        <Text style={styles.readMore}>Read more</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    display: 'flex',
    marginTop: 10,
    // alignItems: 'center',
    // paddingVertical: 10,
  },

  descriptionHeaderText: {
    fontSize: 18,
    color: colors.black,
    fontWeight: 'bold',
    marginRight: 10,
  },
  descriptionHeaderSubText: {
    fontSize: 14,
    color: colors.gray,
    marginRight: 10,
    marginVertical: 10,
  },

  descriptionText: {
    fontSize: 14,
    color: colors.gray,
    marginRight: 10,
    lineHeight: 20,
    // marginTop: 10,
  },
  readMore: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: 'bold',
    marginRight: 10,
    marginTop: 10,
  },
});
