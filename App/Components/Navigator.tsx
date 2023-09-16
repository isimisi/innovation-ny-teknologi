import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
   Login: undefined;
   Signup: undefined;
};

export type ScreenProps = NativeStackScreenProps<RootStackParamList>;

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
   <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={LoginScreen} />
      <Screen name="Signup" component={SignUpScreen} />
   </Navigator>
);

export const AppNavigator = () => (
   <NavigationContainer>
      <HomeNavigator />
   </NavigationContainer>
);
