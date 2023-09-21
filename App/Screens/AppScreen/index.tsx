import { ViewPager } from '@ui-kitten/components';
import { useState } from 'react';
import HomeScreen from './HomeScreen';
import FavoriteScreen from './FavoriteScreen';
import HistoryScreen from './HistoryScreen';
import AccountScreen from './AccountScreen';
import BottomNav from '../../Components/BottomNav';

import { SCREENS } from '../../Constants/SCREENS';
import SafeAreaView from '../../Components/UI/SafeAreaView';

// samler alle skærme på appen til det her viewpager
// gør så man kan swipe til den næste skærm
// dertil er der også bottom naivgation som gør det samme basically
export default function AppScreen() {
   const [screenIndex, setScreenIndex] = useState(SCREENS.HOME);

   function selectScreenHandler(index: number) {
      setScreenIndex(index);
   }

   return (
      <>
         <SafeAreaView>
            <ViewPager
               selectedIndex={screenIndex}
               style={{ flex: 1 }}
               onSelect={selectScreenHandler}>
               <HomeScreen />

               <FavoriteScreen />

               <HistoryScreen />

               <AccountScreen />
            </ViewPager>
            <BottomNav
               screen={screenIndex}
               onSelectScreen={selectScreenHandler}
            />
         </SafeAreaView>
      </>
   );
}
