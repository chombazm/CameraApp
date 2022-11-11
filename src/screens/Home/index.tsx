import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { AddIcon, ScanIcon, SearchIcon } from '../../../assets/icons';
import { CtaButton } from '../../components/CtaButton';
import { HeaderLabelCTA } from '../../components/HeaderLabelCTA';
import { PlantsContainer } from '../../components/PlantsContainer';
import { SectionDivider } from '../../components/SectionDivider';
import { styles } from './styles';

const popularPlants = [
  {
    id: 1,
    name: 'Peperomia Houseplant',
    type: 'Fits well',
    image: require('../../../assets/images/aloe-vera.png'),
  },
  {
    id: 2,
    name: 'Asplenium Houseplant',
    type: 'Succulent',
    image: require('../../../assets/images/aloe-vera2.png'),
  },
];

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header Cta  */}
      <HeaderLabelCTA
        label="My Plants"
        cta={[
          {
            property: <SearchIcon />,
            action: () => {
              console.warn('Search');
            },
          },
          {
            property: <AddIcon />,
            action: () => {
              console.warn('Add');
            },
          },
        ]}
      />

      <View style={styles.ctaContainer}>
        <CtaButton
          text="Scan and identify the plant"
          onPress={() => {}}
          icon={<ScanIcon />}
          isPrimary={false}
        />
      </View>

      {/* Header Cta */}
      <HeaderLabelCTA
        label="Popular plants"
        cta={[
          {
            property: 'View all',
            action: () => {
              console.warn('view all');
            },
          },
        ]}
        isPrimary={false}
      />

      {/* Popular plants */}
      <PlantsContainer Plants={popularPlants} />
      <View style={styles.mpSet}>
        <SectionDivider />
      </View>

      {/* Header Cta */}
      <HeaderLabelCTA
        label="Categories"
        cta={[
          {
            property: 'View all',
            action: () => {
              console.warn('view all');
            },
          },
        ]}
        isPrimary={false}
      />
      <StatusBar style="auto" />
    </View>
  );
};
