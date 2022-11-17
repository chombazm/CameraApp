import { NavigatorScreenParams } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type MainTabParamList = {
  Home: undefined;
  Explore: undefined;
  Articles: undefined;
  Saved: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Root: NavigatorScreenParams<MainTabParamList> | undefined;
  NotFound: undefined;
  HomeTab: undefined;
  Camera: undefined;
  FoundCapture: {
    uri: string;
  };
  NotFoundCapture: undefined;
};
