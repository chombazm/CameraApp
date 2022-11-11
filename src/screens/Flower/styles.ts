import { StyleSheet } from 'react-native';
import { colors } from '../../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundrColor: '#000',
  },
  centralMainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'lavender',
  },

  topContainer: {
    width: '100%',
    height: '25%',
    backgroundColor: 'papayawhip',
  },
  topHeaderMenu: {
    width: '100%',
    marginTop: 40,
    display: 'flex',
    padding: 20,
    flexDirection: 'row-reverse',
  },
  imageHero: {
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    width: '100%',
    height: '75%',
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 20,
  },
  indexNegMargin: {
    marginTop: -20,
  },
  dividerLine: {
    width: '100%',
    height: 2,
    backgroundColor: colors.grayLight,
    marginTop: 20,
  },
  spaceIcon: {
    marginRight: 10,
  },
  shadeIcon: {
    padding: 1,
    borderRadius: 50,
    // backgroundColor: 'rgba(0,0,0,0.5)',
  },

  shadeIconMini: {
    padding: 4,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
  },
  statusBarMini: {
    width: '100%',
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  statusText: {
    fontSize: 14,
    color: colors.primary,
    // fontWeight: 'bold',
  },
  mdHeder: {
    fontSize: 24,
    color: colors.black,
    fontWeight: 'bold',
    marginVertical: 10,
  },

  bottomContainerFixed: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 10,
    width: '100%',
    // height: 60,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
});
