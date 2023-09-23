import ScreenLayout from '../../Components/ScreenLayout';
import Home from '../../Components/Home';
import { OfficeListItem, fetchOffices } from '../../api/fetch';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

// home screen som lige nu kun loader home screen
// skal måske lave useefect her og hente data
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
