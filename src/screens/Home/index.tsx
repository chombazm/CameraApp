import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Pressable, Image, ScrollView } from 'react-native';
import {
  AddIcon,
  BackYardIcon,
  DrawingRoomIcon,
  KitchenIcon,
  LivingRoomIcon,
  ScanIcon,
  SearchIcon,
} from '../../../assets/icons';
import { CtaButton } from '../../components/CtaButton';
import { FourGridContainer } from '../../components/FourGridContainer';
import { HeaderLabelCTA } from '../../components/HeaderLabelCTA';
import { PlantReadings } from '../../components/PlantReading';
import { PlantsContainer } from '../../components/PlantsContainer';
import { RowCols } from '../../components/RowCols';
import { SectionDivider } from '../../components/SectionDivider';
// import { HomeStackParamList, NavigationProps } from '../../types';
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
const readings = [
  {
    icon: <DrawingRoomIcon />,
    header: '2 Plants',
    volume: 'Drawing Room',
  },
  {
    icon: <KitchenIcon />,
    header: '1 Plant',
    volume: 'Kitchen',
  },
  {
    icon: <LivingRoomIcon />,
    header: '2 Plants',
    volume: 'Living Room',
  },
  {
    icon: <BackYardIcon />,
    header: '8 Plants',
    volume: 'Back Yard',
  },
];

const alerts = [
  {
    id: '1',
    title: 'Water your Cactus today (living room)',
    subtitle: 'It’s been 2-3 weeks since you have prune the dead leaves',
    image: require('../../../assets/images/alerts1.png'),
    onPress: () => console.warn('Alerts'),
  },
  {
    id: '2',
    title: 'Prune the dead branches of Bamboo t... ',
    subtitle: 'It’s 2 weeks old, you have to water it twice a week',
    image: require('../../../assets/images/alert2.png'),
    onPress: () => console.warn('Alerts'),
  },
];

// TODO: Type the navigation prop
export const HomeScreen = ({ navigation }: any) => {
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
          onPress={() => {
            navigation.navigate('Camera');
          }}
          icon={<ScanIcon />}
          isPrimary={false}
        />
      </View>

      <ScrollView>
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
        <SectionDivider />

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

        {/* Categories */}
        {/* <View style={{ paddingHorizontal: 20 }}> */}
        <FourGridContainer readings={readings} />
        {/* </View> */}

        <SectionDivider />

        {/* Header Cta */}
        <HeaderLabelCTA
          label="Alerts for today"
          cta={[
            {
              property: 'View all',
              action: () => {
                console.warn('view all Alerts');
              },
            },
          ]}
          isPrimary={false}
        />

        <RowCols alerts={alerts} />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};
