import ScreenLayout from '../../Components/ScreenLayout';
import Home from '../../Components/Home';
import { OfficeListItem, fetchOffices } from '../../api/fetch';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

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
         <Home data={offices} />
      </ScreenLayout>
   );
}
