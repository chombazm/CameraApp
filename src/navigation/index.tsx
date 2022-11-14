import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/Home';
import { CameraScreen } from '../screens/Camera';
import { FlowerScreen } from '../screens/Flower';
import {
  HomeStackParamList,
  MainTabParamList,
  RootStackParamList,
} from '../types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultScreen } from '../screens/Default';
import { colors } from '../../assets/colors';

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
      {/* <Stack.Screen name="HomeMain" component={MainTabNavigator} /> */}
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,

        tabBarActiveTintColor: colors.primary,
      }}>
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Explore" component={DefaultScreen} />
      <Tab.Screen name="Articles" component={DefaultScreen} />
      <Tab.Screen name="Saved" component={DefaultScreen} />
      <Tab.Screen name="Profile" component={DefaultScreen} />
    </Tab.Navigator>
  );
}
const HomeStack = createNativeStackNavigator<HomeStackParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="HomeTab" component={HomeScreen} />
      <HomeStack.Screen name="Camera" component={CameraScreen} />
      <HomeStack.Screen name="FoundCapture" component={FlowerScreen} />
      <HomeStack.Screen name="NotFoundCapture" component={DefaultScreen} />
    </HomeStack.Navigator>
  );
}
