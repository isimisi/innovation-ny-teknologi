import { ScreenProps } from '../Components/Navigator';
import ScreenLayout from '../Components/ScreenLayout';
import SignupForm from '../Components/SignupForm';
import { Button, Text, useTheme } from '@ui-kitten/components';
import { Image, StyleSheet, View, SafeAreaView } from 'react-native';

import CloudIcon from '../../assets/CloudIcon.svg';

export default function SignUpScreen({ navigation }: ScreenProps) {
   const navigateBack = () => {
      navigation.goBack();
   };

   const theme = useTheme();

   const navigateSignup = () => {
      navigation.navigate('Login');
   };

   return (
      <SafeAreaView style={{ flex: 1 }}>
         <ScreenLayout>
            <View style={styles.signupScreenContainer}>
               <View style={styles.iconContainer}>
                  <Image
                     style={styles.accountAnalysisImage}
                     source={require('../../assets/account-analysis.png')}
                  />
                  <CloudIcon style={styles.cloudIcon} width={216} />
               </View>

               <View style={styles.signupContainer}>
                  <Text
                     style={[
                        styles.title,
                        { color: theme['color-gray-500'], fontWeight: '600' },
                     ]}
                     category="h1">
                     Sign Up
                  </Text>
                  <SignupForm />
                  <View>
                     <Text
                        style={[
                           styles.alignTextCenter,
                           { color: theme['color-basic-600'] },
                        ]}>
                        Already have an account?
                     </Text>
                     <Button onPress={navigateSignup} appearance="ghost">
                        Login to existing account
                     </Button>
                  </View>
               </View>
            </View>
         </ScreenLayout>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   signupScreenContainer: {
      justifyContent: 'center',
      alignContent: 'center',
      alignSelf: 'stretch',
      padding: 40,
      flex: 1,
      gap: 12,
   },
   title: {
      textAlign: 'center',
   },
   alignTextCenter: {
      textAlign: 'center',
   },
   iconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
   },
   accountAnalysisImage: {
      width: 130,
      height: 130,
      zIndex: 1,
   },
   cloudIcon: { position: 'absolute', top: 35 },
   signupContainer: {
      flex: 3,
      gap: 10,
   },
});
