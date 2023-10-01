import { Button, Text, useTheme } from '@ui-kitten/components';
import { Image, StyleSheet, View, SafeAreaView, Keyboard } from 'react-native';
import LoginForm from '../Components/LoginForm';
import CloudIcon from '../../assets/CloudIcon.svg';
import { ScreenProps } from '../Components/Navigator';
import ScreenLayout from '../Components/ScreenLayout';
import ErrorModal from '../Components/UI/ErrorModal';
import { useState } from 'react';
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';

// login skærm når brugeren skal oprette sig - mest bare ui
export default function LoginScreen({ navigation }: ScreenProps) {
   const theme = useTheme();
   const [errorModal, setErrorModal] = useState(false);

   // navigerer til signup skærmen
   const navigateSignup = () => {
      navigation.navigate('Signup');
   };

   function dissmissModalHandler() {
      setErrorModal(false);
   }

   function errorModalNavigationHandler() {
      dissmissModalHandler();
      navigateSignup();
   }

   return (
      <SafeAreaView style={{ flex: 1 }}>
         <TouchableWithoutFeedback
            style={{ flex: 1 }}
            onPress={Keyboard.dismiss}
            accessible={false}>
            <ScreenLayout>
               <View style={styles.loginScreenContainer}>
                  <View style={styles.iconContainer}>
                     <Image
                        style={styles.accountAnalysisImage}
                        source={require('../../assets/account-analysis.png')}
                     />
                     <CloudIcon width={300} />
                  </View>
                  <Text
                     style={[
                        styles.alignTextCenter,
                        { color: theme['color-gray-500'], fontWeight: '600' },
                     ]}
                     category="h1">
                     Login
                  </Text>
                  <LoginForm
                     onError={() => setErrorModal(true)}
                     onSuccess={() => navigation.navigate('App')}
                  />
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
                  <ErrorModal
                     visible={errorModal}
                     secondaryButton={
                        <Button
                           appearance="ghost"
                           onPress={errorModalNavigationHandler}>
                           Create account
                        </Button>
                     }
                     onBackdropPress={dissmissModalHandler}
                     primaryButton={
                        <Button
                           appearance="ghost"
                           onPress={dissmissModalHandler}>
                           Retry
                        </Button>
                     }>
                     Your password or email is incorrect.
                  </ErrorModal>
               </View>
            </ScreenLayout>
         </TouchableWithoutFeedback>
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
