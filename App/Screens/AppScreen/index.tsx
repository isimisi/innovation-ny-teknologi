import { SafeAreaView, View } from 'react-native';
import ScreenLayout from '../../Components/ScreenLayout';
import { Text } from '@ui-kitten/components';

export default function AppScreen() {
   return (
      <SafeAreaView style={{ flex: 1 }}>
         <ScreenLayout>
            <View>
               <Text>App</Text>
            </View>
         </ScreenLayout>
      </SafeAreaView>
   );
}
