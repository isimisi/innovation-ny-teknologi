import { Layout, Text } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';
import LoginForm from '../Components/LoginForm';

export default function LoginScreen() {
   return (
      <View style={styles.loginScreenContainer}>
         <Text category="h1">Login</Text>
         <LoginForm />
      </View>
   );
}

const styles = StyleSheet.create({
   loginScreenContainer: {
      justifyContent: 'center',
      alignContent: 'center',
   },
});
