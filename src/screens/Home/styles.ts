import { StyleSheet } from 'react-native';
import { colors } from '../../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
    paddingTop: 50,
    paddingBottom: 30,
  },

  ctaContainer: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },

  mpSet: {
    padding: 10,
  },
});
