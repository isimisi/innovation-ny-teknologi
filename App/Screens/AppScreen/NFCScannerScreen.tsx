import ScreenLayout from '../../Components/ScreenLayout';
import Scanner from '../../Components/NFC/Scanner';
import { useEffect, useState } from 'react';
import SeatSession from '../../Components/NFC/SeatSession';
import MissingSession from '../../Components/NFC/MissingSession';
import { Text } from 'react-native-svg';

// kommende skærm
export default function NFCScannerScreen() {
   const [scannerVisible, setScannerVisible] = useState(false);
   const [session, setSession] = useState<boolean | null>(null);

   const handleCancelNFCScanner = () => setScannerVisible(false);

   const handleOpenNFCScaner = () => setScannerVisible(true);

   useEffect(() => {
      // api call get session
      // setSession(true);
   }, []);

   return (
      <ScreenLayout>
         {session ? (
            <SeatSession />
         ) : (
            <>
               <MissingSession onPress={handleOpenNFCScaner} />
               {/* {scannerVisible && <Scanner cancel={handleCancelNFCScanner} />} */}
            </>
         )}
      </ScreenLayout>
   );
}
