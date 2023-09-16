import { Button, Text, useTheme } from '@ui-kitten/components';
import { Image, StyleSheet, View, SafeAreaView } from 'react-native';
import LoginForm from '../Components/LoginForm';
import LoginIcon from '../../assets/LoginIcon.svg';
import { ScreenProps } from '../Components/Navigator';
import ScreenLayout from '../Components/ScreenLayout';

export default function LoginScreen({ navigation }: ScreenProps) {
   const theme = useTheme();

   const navigateSignup = () => {
      navigation.navigate('Signup');
   };

   return (
      <SafeAreaView style={{ flex: 1 }}>
         <ScreenLayout>
            <View style={styles.loginScreenContainer}>
               <View style={styles.iconContainer}>
                  <Image
                     style={styles.accountAnalysisImage}
                     source={require('../../assets/account-analysis.png')}
                  />
                  <LoginIcon width={300} />
               </View>
               <Text
                  style={[
                     styles.alignTextCenter,
                     { color: theme['color-basic-700'], fontWeight: '600' },
                  ]}
                  category="h1">
                  Login
               </Text>
               <LoginForm />
               <View>
                  <Text
                     style={[
                        styles.alignTextCenter,
                        { color: theme['color-basic-600'] },
                     ]}>
                     Don't have an account?
                  </Text>
                  <Button onPress={navigateSignup} appearance="ghost">
                     Create account
                  </Button>
               </View>
            </View>
         </ScreenLayout>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   loginScreenContainer: {
      justifyContent: 'center',
      alignContent: 'center',
      alignSelf: 'stretch',
      padding: 40,
      gap: 16,
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
   },
   accountAnalysisImage: {
      width: 180,
      height: 180,
      position: 'absolute',
      zIndex: 1,
      bottom: 46,
   },
});
