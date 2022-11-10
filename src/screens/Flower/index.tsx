import React from 'react';
import {
  View,
  Text,
  Pressable,
  Dimensions,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {
  BookmarkIcon,
  CrossIcon,
  RulerIcon,
  TickIcon,
} from '../../../assets/icons';
import { styles } from './styles';

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
          <View style={styles.tagContainer}>
            <Text style={styles.tagText}>Indor</Text>
            <Text style={styles.tagText}>Pet friendly</Text>
            <Text style={styles.tagText}>Papaveraceae</Text>
          </View>

          <View style={styles.descriptionContainer}>
            <View style={styles.descriptionHeader}>
              <Text style={styles.descriptionHeaderText}>Description</Text>
              <Text style={styles.descriptionHeaderSubText}>
                From Wikipedia, the free encyclopedia
              </Text>
            </View>

            <Text style={styles.descriptionText}>
              Papaver somniferum, commonly known as the opium poppy or breadseed
              poppy, is a species of flowering plant in the family Papaveraceae.
              It is the species of plant from which both opium and poppy seeds
              are dererived a...<Text style={styles.readMore}>Read more</Text>
            </Text>
          </View>

          <View style={styles.dividerLine} />
          <View style={styles.readingsSection}>
            <View style={styles.readingsContainer}>
              <View style={styles.readingContainer}>
                <View style={styles.readingIconContainer}>
                  <RulerIcon />
                </View>
                <View style={styles.readingTextContainer}>
                  <Text style={styles.readingHeader}>Height</Text>
                  <Text style={styles.readingVolumeText}>30-50 cm</Text>
                </View>
              </View>
              <View style={styles.readingContainer}>
                <View style={styles.readingIconContainer}>
                  <RulerIcon />
                </View>
                <View style={styles.readingTextContainer}>
                  <Text style={styles.readingHeader}>Water</Text>
                  <Text style={styles.readingVolumeText}>30-50 cm</Text>
                </View>
              </View>
            </View>

            <View style={styles.readingsContainer}>
              <View style={styles.readingContainer}>
                <View style={styles.readingIconContainer}>
                  <RulerIcon />
                </View>
                <View style={styles.readingTextContainer}>
                  <Text style={styles.readingHeader}>Height</Text>
                  <Text style={styles.readingVolumeText}>30-50 cm</Text>
                </View>
              </View>
              <View style={styles.readingContainer}>
                <View style={styles.readingIconContainer}>
                  <RulerIcon />
                </View>
                <View style={styles.readingTextContainer}>
                  <Text style={styles.readingHeader}>Water</Text>
                  <Text style={styles.readingVolumeText}>30-50 cm</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={styles.bottomContainerFixed}>
        <Pressable style={styles.buttonBottom}>
          <View style={styles.groupBtnContent}>
            <View style={styles.spaceIcon}>
              <BookmarkIcon />
            </View>
            <Text style={styles.buttonBottomText}>Save this plant</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};
