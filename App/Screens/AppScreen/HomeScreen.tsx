import ScreenLayout from '../../Components/ScreenLayout';
import Home from '../../Components/Home';
import { OfficeListItem, fetchOffices } from '../../api/fetch';
import { useEffect, useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';

// Her vises index.tsx, hvilket pt. indeholder listen over mulige lokationer samt søgefelt
export default function HomeScreen() {
   const [offices, setOffices] = useState<OfficeListItem[]>([]);

   useEffect(() => {
      (async () => {
         try {
            const response = await fetchOffices();
            setOffices(response);
         } catch (error) {
            Alert.alert(String(error));
         }
      })();
   }, []);

   return (
      <ScreenLayout>
         <TouchableWithoutFeedback
            style={{ flex: 1, width: '100%' }}
            onPress={Keyboard.dismiss}
            accessible={false}>
            <Home data={offices} />
         </TouchableWithoutFeedback>
      </ScreenLayout>
   );
}
