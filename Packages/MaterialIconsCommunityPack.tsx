import React from 'react';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ICON_PACKAGES } from './PackageNames';

export type MaterialCommunityIconName =
   keyof typeof MaterialCommunityIcons.glyphMap;

interface Props {
   name: MaterialCommunityIconName;
   style: JSX.Element['props']['style'];
}

export const MaterialCommunityIconsPack = {
   name: ICON_PACKAGES.M_COMMUNITY,
   icons: createIconsMap(),
};

function createIconsMap() {
   return new Proxy(
      {},
      {
         get(_target, name) {
            return IconProvider(name as MaterialCommunityIconName);
         },
      }
   );
}

const IconProvider = (name: MaterialCommunityIconName) => ({
   toReactElement: (props: JSX.Element['props']) =>
      ExpoIcon({ name, ...props }),
});

function ExpoIcon({ name, style }: Props) {
   const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
   return (
      <MaterialCommunityIcons
         name={name}
         size={height}
         color={tintColor}
         style={iconStyle}
      />
   );
}
