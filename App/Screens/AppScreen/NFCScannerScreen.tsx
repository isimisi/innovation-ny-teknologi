import { SafeAreaView, Text, View } from 'react-native';
import ScreenLayout from '../../Components/ScreenLayout';
import Scanner from '../../Components/NFC/Scanner';

// kommende skærm
export default function NFCScannerScreen() {
   return (
      <ScreenLayout>
         <Scanner />
      </ScreenLayout>
   );
}
