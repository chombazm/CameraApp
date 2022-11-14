import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type MainTabParamList = {
  Home: undefined;
  Explore: undefined;
  Articles: undefined;
  Saved: undefined;
  Profile: undefined;
};

export type HomeStackParamList = {
  HomeTab: NavigatorScreenParams<MainTabParamList>;
  Camera: undefined;
  FoundCapture: undefined;
  NotFoundCapture: undefined;
};

export type RootStackParamList = {
  Root: NavigatorScreenParams<MainTabParamList> | undefined;
  HomeMain: NavigatorScreenParams<HomeStackParamList> | undefined;
  NotFound: undefined;
};

export type NavigationProps = NativeStackScreenProps<
  HomeStackParamList,
  'Camera'
>;
