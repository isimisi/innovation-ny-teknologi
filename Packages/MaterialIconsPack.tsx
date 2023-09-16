import React from 'react';
import { StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ICON_PACKAGES } from './PackageNames';

export type MaterialIconName = keyof typeof MaterialIcons.glyphMap;

interface Props {
   name: MaterialIconName;
   style: JSX.Element['props']['style'];
}

export const MaterialIconsPack = {
   name: ICON_PACKAGES.MATERIAL,
   icons: createIconsMap(),
};

function createIconsMap() {
   return new Proxy(
      {},
      {
         get(_target, name) {
            return IconProvider(name as MaterialIconName);
         },
      }
   );
}

const IconProvider = (name: MaterialIconName) => ({
   toReactElement: (props: JSX.Element['props']) =>
      ExpoIcon({ name, ...props }),
});

function ExpoIcon({ name, style }: Props) {
   const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
   return (
      <MaterialIcons
         name={name}
         size={height}
         color={tintColor}
         style={iconStyle}
      />
   );
}
