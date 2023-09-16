import { Button, Text, useTheme } from '@ui-kitten/components';
import { Image, StyleSheet, View } from 'react-native';
import LoginForm from '../Components/LoginForm';
import LoginIcon from '../assets/LoginIcon.svg';

export default function LoginScreen() {
   const theme = useTheme();

   return (
      <View style={styles.loginScreenContainer}>
         <View style={styles.iconContainer}>
            <Image
               style={styles.accountAnalysisImage}
               source={require('../assets/account-analysis.png')}
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
            <Button appearance="ghost">create account</Button>
         </View>
      </View>
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
