import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundrColor: '#000',
  },
  buttonContainerTop: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 30,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainerBottom: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mtm: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  camera: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
