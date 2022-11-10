import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../assets/colors';

type PlantTagsProps = {
  tags: string[];
};

export const PlantTags = (tags: PlantTagsProps) => (
  console.log(tags),
  (
    <View style={styles.tagContainer}>
      {tags.tags.map(tag => (
        <Text style={styles.tagText}>{tag}</Text>
      ))}
    </View>
  )
);

const styles = StyleSheet.create({
  tagContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  tagText: {
    fontSize: 14,
    backgroundColor: colors.grayLight,
    color: colors.gray,
    paddingHorizontal: 15,
    paddingVertical: 3,
    marginRight: 10,
    borderRadius: 5,
  },
});
