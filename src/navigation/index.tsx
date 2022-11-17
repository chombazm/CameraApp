import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/Home';
import { CameraScreen } from '../screens/Camera';
import { FlowerScreen } from '../screens/Flower';
import { MainTabParamList, RootStackParamList } from '../types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultScreen } from '../screens/Default';
import { colors } from '../../assets/colors';
import {
  TabArticlesIcon,
  TabExploreIcon,
  TabHomeIcon,
  TabProfileIcon,
  TabSavedIcon,
} from '../../assets/icons';

export function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Root"
      screenOptions={{
        headerShown: false,
        headerTintColor: colors.primary,
      }}>
      <Stack.Screen name="Root" component={MainTabNavigator} />
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen name="FoundCapture" component={FlowerScreen} />
      <Stack.Screen name="NotFoundCapture" component={DefaultScreen} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTabNavigator({
  navigation,
  route,
}: NativeStackScreenProps<MainTabParamList>) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,

        tabBarActiveTintColor: colors.primary,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabHomeIcon color={color} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={DefaultScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabExploreIcon color={color} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Articles"
        component={DefaultScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabArticlesIcon color={color} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={DefaultScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabSavedIcon color={color} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={DefaultScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabProfileIcon color={color} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const HomeStack = createNativeStackNavigator<RootStackParamList>();

// function HomeNavigator() {
//   return (
//     <HomeStack.Navigator
//       initialRouteName="HomeTab"
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <HomeStack.Screen
//         name="Camera"
//         component={CameraScreen}
//         options={{
//           tabBarVisible: false,
//         }}
//       />
//       <HomeStack.Screen name="NotFoundCapture" component={DefaultScreen} />
//       <HomeStack.Screen name="FoundCapture" component={FlowerScreen} />
//       <HomeStack.Screen name="HomeTab" component={HomeScreen} />
//     </HomeStack.Navigator>
//   );
// }
