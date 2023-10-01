import React from 'react';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';
import { SCREENS } from '../Constants/SCREENS';

import HomeIcon from './Icons/HomeIcon';
import HeartIcon from './Icons/HeartIcon';
import BreifcaseIcon from './Icons/BriefcaseIcon';
import AccountIcon from './Icons/AccountIcon';

interface Props {
   screen: SCREENS;
   onSelectScreen: (index: number) => void;
}

const screens = Object.values(SCREENS).slice(
   0,
   Object.values(SCREENS).length / 2
);

const IconMap = [HomeIcon, HeartIcon, BreifcaseIcon, AccountIcon];

// den nedre komponent til at vise og navigere mellem de forskellige skærme
export default function BottomNav({ screen, onSelectScreen }: Props) {
   return (
      <View style={styles.navigationContainer}>
         <BottomNavigation
            style={styles.bottomNavigation}
            selectedIndex={screen}
            onSelect={onSelectScreen}
            appearance="noIndicator">
            {screens.map((screenTitle, i) => (
               <BottomNavigationTab
                  icon={(iconProps) =>
                     IconMap[i]({
                        ...iconProps,
                        style: [iconProps?.style, styles.icons],
                     })
                  }
                  key={screenTitle + '_' + i}
               />
            ))}
         </BottomNavigation>
      </View>
   );
}

const styles = StyleSheet.create({
   navigationContainer: {
      width: '100%',
      alignSelf: 'center',
   },
   bottomNavigation: {
      borderRadius: 16,
      paddingVertical: 15,
   },
   icons: {
      width: 30,
      height: 30,
   },
});
