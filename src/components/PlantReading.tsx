import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../assets/colors';
import { RulerIcon } from '../../assets/icons';

type ReadingViewProps = {
  icon: React.ReactNode;
  header: string;
  volume: string;
};

type PlantReadingsProps = {
  readings: ReadingViewProps[];
};

export const PlantReadings = ({ readings }: PlantReadingsProps) => {
  /* [TODO: ] Work on this component
    I shouldn't be doing this, but I'm not sure how to get it the right way
    get the first to elements of the array
  */

  const firstTwoReadings = readings.slice(0, 2);
  const lastTwoReadings = readings.slice(2, 4);
  console.log(readings);
  return (
    <View style={styles.readingsSection}>
      <View style={styles.readingsContainer}>
        {firstTwoReadings.map(reading => (
          <ReadingView
            icon={reading.icon}
            header={reading.header}
            volume={reading.volume}
          />
        ))}
      </View>
      <View style={styles.readingsContainer}>
        {lastTwoReadings.map(reading => (
          <ReadingView
            icon={reading.icon}
            header={reading.header}
            volume={reading.volume}
          />
        ))}
      </View>
    </View>
  );
};

const ReadingView = ({ icon, header, volume }: ReadingViewProps) => {
  const heightColor = header === 'Height' ? colors.secondary : colors.gray;
  return (
    <View style={styles.readingContainer}>
      <View style={[styles.readingIconContainer]}>{icon}</View>
      <View style={styles.readingTextContainer}>
        <Text style={[styles.readingHeader]}>{header}</Text>
        <Text style={styles.readingVolumeText}>{volume}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  readingsSection: {
    marginTop: 20,
  },
  readingsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    // backgroundColor: 'red',
  },
  readingContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    // backgroundColor: 'blue',
  },
  readingIconContainer: {
    // padding: 5,
    borderRadius: 10,
    width: 60,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
  },
  readingTextContainer: {
    display: 'flex',
    flex: 1,
    // aspectRatio: 1,
    // flexDirection: 'column',
    justifyContent: 'space-evenly',
    // marginRight: 10,
    marginLeft: 10,
    // backgroundColor: 'green',
  },
  readingHeader: {
    fontSize: 14,
    color: colors.gray,
    fontWeight: 'bold',
  },
  readingVolumeText: {
    fontSize: 18,
    color: colors.gray,
  },
});
