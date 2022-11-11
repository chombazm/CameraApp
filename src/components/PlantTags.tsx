import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../assets/colors';

type PlantTagsProps = {
  tags: string[];
};

export const PlantTags = (tags: PlantTagsProps) => (
  <View style={styles.tagContainer}>
    {tags.tags.map(tag => (
      <View key={tag} style={styles.tagTextContainer}>
        <Text style={styles.tagText}>{tag}</Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  tagContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  tagTextContainer: {
    borderRadius: 5,
    backgroundColor: colors.grayLight,
    marginRight: 10,
  },

  tagText: {
    paddingHorizontal: 15,
    paddingVertical: 4,
    fontSize: 12,
    color: colors.gray,
  },
});
