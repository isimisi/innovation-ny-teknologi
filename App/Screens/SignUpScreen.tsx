import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native';
import { ScreenProps } from '../Components/Navigator';
import ScreenLayout from '../Components/ScreenLayout';

export default function SignUpScreen({ navigation }: ScreenProps) {
   const navigateBack = () => {
      navigation.goBack();
   };

   return (
      <SafeAreaView style={{ flex: 1 }}>
         <ScreenLayout>
            <View>
               <Text>Signup</Text>
            </View>
         </ScreenLayout>
      </SafeAreaView>
   );
}
