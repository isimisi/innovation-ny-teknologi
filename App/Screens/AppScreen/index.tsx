import { ViewPager } from '@ui-kitten/components';
import { useState } from 'react';
import HomeScreen from './HomeScreen';
import FavoriteScreen from './FavoriteScreen';
import HistoryScreen from './HistoryScreen';
import AccountScreen from './AccountScreen';
import BottomNav from '../../Components/BottomNav';
import { SafeAreaView } from 'react-native';
import { SCREENS } from '../../Constants/SCREENS';

export default function AppScreen() {
   const [screenIndex, setScreenIndex] = useState(SCREENS.HOME);

   function selectScreenHandler(index: number) {
      setScreenIndex(index);
   }

   return (
      <SafeAreaView style={{ flex: 1 }}>
         <ViewPager
            selectedIndex={screenIndex}
            style={{ flex: 1 }}
            onSelect={selectScreenHandler}>
            <HomeScreen />

            <FavoriteScreen />

            <HistoryScreen />

            <AccountScreen />
         </ViewPager>
         <BottomNav screen={screenIndex} onSelectScreen={selectScreenHandler} />
      </SafeAreaView>
   );
}
