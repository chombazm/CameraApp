import React from 'react';
import {
  View,
  Text,
  Pressable,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {
  BookmarkIcon,
  CrossIcon,
  RulerIcon,
  DropIcon,
  SunIcon,
  TemperetureIcon,
  TickIcon,
} from '../../../assets/icons';
import { CtaButton } from '../../components/CtaButton';
import { PlantDescription } from '../../components/PlantDescription';
import { PlantReadings } from '../../components/PlantReading';
import { PlantTags } from '../../components/PlantTags';
import { styles } from './styles';

const readings = [
  {
    icon: <RulerIcon />,
    header: 'Height',
    volume: '30-50 cm',
  },
  {
    icon: <DropIcon />,
    header: 'Water',
    volume: '333ml',
  },
  {
    icon: <SunIcon />,
    header: 'Sunlight',
    volume: 'Normal',
  },
  {
    icon: <TemperetureIcon />,
    header: 'Temperature',
    volume: '15-25 C',
  },
];

const description = {
  title: 'Description',
  text: 'Papaver somniferum, commonly known as the opium poppy or breadseed poppy, is a species of flowering plant in the family Papaveraceae. It is the species of plant from which both opium and poppy seeds are dererived a...',
  source: 'Wikipedia, the free encyclopedia',
};

const tags = ['Poppy', 'Flower', 'Breadseed', 'Opium'];

export const FlowerScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.centralMainContainer}>
        <View style={styles.topContainer}>
          <ImageBackground
            source={require('../../../assets/images/flower1.png')}
            style={styles.imageHero}
            resizeMode="cover">
            <View style={styles.topHeaderMenu}>
              <View style={styles.shadeIcon}>
                <CrossIcon />
              </View>
            </View>
          </ImageBackground>
        </View>

        <ScrollView style={[styles.mainContainer, styles.indexNegMargin]}>
          <View style={styles.statusBarMini}>
            <View style={[styles.shadeIconMini, styles.spaceIcon]}>
              <TickIcon />
            </View>
            <Text style={styles.statusText}>
              Hurray, we identified the plant!
            </Text>
          </View>

          <Text style={styles.mdHeder}>Papaver Somniferum</Text>
          <PlantTags tags={tags} />

          {/* Plant descrition */}
          <PlantDescription
            title={description.title}
            source={description.source}
            text={description.text}
          />

          <View style={styles.dividerLine} />

          {/* Plant readings */}
          <PlantReadings readings={readings} />
        </ScrollView>
      </View>

      <View style={styles.bottomContainerFixed}>
        <CtaButton
          text="Save this plant"
          onPress={() => {}}
          icon={<BookmarkIcon />}
        />
      </View>
    </View>
  );
};
