import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import AppScreen from './AppScreen';

type RootStackParamList = {
   Login: undefined;
   Signup: undefined;
   App: undefined;
};

export type ScreenProps = NativeStackScreenProps<RootStackParamList>;

const { Navigator, Screen } = createStackNavigator();

// bruges til at navigere rundt på forskellige "routes"/"skærme" på appen
const HomeNavigator = () => {
   return (
      <Navigator
         initialRouteName="Login"
         screenOptions={{ headerShown: false }}>
         <Screen name="Login" component={LoginScreen} />
         <Screen name="Signup" component={SignUpScreen} />
         <Screen name="App" component={AppScreen} />
      </Navigator>
   );
};

export const AppNavigator = () => (
   <NavigationContainer>
      <HomeNavigator />
   </NavigationContainer>
);
