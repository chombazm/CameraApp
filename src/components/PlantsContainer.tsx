import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { colors } from '../../assets/colors';

type PlantsContainerProps = {
  Plants: Plant[];
};

type Plant = {
  id: number;
  name: string;
  type: string;
  image: any;
};
export const PlantsContainer = (Plants: PlantsContainerProps) => {
  return (
    <View style={styles.popularPlantsContainer}>
      {Plants.Plants.map((plant, index) => (
        <Plant
          key={index}
          id={plant.id}
          name={plant.name}
          type={plant.type}
          image={plant.image}
        />
      ))}
    </View>
  );
};

const Plant = ({ name, type, image }: Plant) => (
  <View style={styles.popularPlant}>
    <View style={styles.popularPlantTextContainer}>
      <Text style={styles.plantXsText}>{type}</Text>
      <Text style={styles.plantXText}>{name}</Text>
    </View>
    <View style={styles.popularPlantImage}>
      <Image source={image} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  popularPlantsContainer: {
    width: '100%',
    height: 120,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: 10,
    marginTop: 30,
    // paddingVertical: 20,
    // backgroundColor: 'pink',
  },
  popularPlant: {
    flex: 1,
    // height: 200,
    display: 'flex',
    alignItems: 'flex-end',
    marginHorizontal: 5,
    // marginHorizontal: 10,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: colors.grayLight,
  },
  popularPlantTextContainer: {
    width: '80%',
  },
  popularPlantText: {},
  popularPlantImage: {
    width: 120,
    position: 'absolute',
    right: 0,
    bottom: 10,
    zIndex: -1,
  },
  plantXsText: {
    fontSize: 10,
    color: colors.primary,
  },
  plantXText: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.black,
    fontWeight: 'bold',
  },
});
