import React from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';

export const RowCols = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <Text style={styles.xsText}>
            <Image source={require('../../assets/images/alerts1.png')} />
          </Text>
        </View>
        <View>
          <Text style={styles.xsText}>Chomba chanda</Text>
          <Text style={styles.xsText}>Chomba chanda</Text>
        </View>
        <View>
          <Text style={styles.xsText}>{'>'}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  xsText: {
    fontSize: 14,
  },
});
