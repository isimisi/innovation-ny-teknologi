import { Button, Input, Text } from '@ui-kitten/components';
import { Alert, StyleSheet, View, ViewProps } from 'react-native';
import EmailOutlineIcon from './Icons/EmailOutlineIcon';
import passwordFieldIcon from './Icons/PasswordFieldIcon';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function LoginForm(props: ViewProps) {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [loading, setLoading] = useState(false);

   async function signInWithEmail() {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
         email: email,
         password: password,
      });

      if (error) Alert.alert(error.message);
      setLoading(false);
   }

   return (
      <View {...props} style={[styles.container, props.style]}>
         <Input
            style={styles.input}
            accessoryLeft={EmailOutlineIcon}
            onChangeText={(text) => setEmail(text)}
            label="Email"
            value={email}
            placeholder="email@address.com"
            autoCapitalize={'none'}
         />
         <View>
            <Input
               style={styles.input}
               accessoryLeft={passwordFieldIcon}
               label="Password"
               onChangeText={(text) => setPassword(text)}
               value={password}
               secureTextEntry={true}
               placeholder="Password"
               autoCapitalize={'none'}
            />
            <Button style={styles.forgotPasswordbutton} appearance="ghost">
               Forgot password
            </Button>
         </View>
         <Button
            size="medium"
            style={styles.loginButton}
            disabled={loading}
            onPress={() => signInWithEmail()}>
            {(props) => (
               <Text {...props} style={[props?.style, styles.loginButtonText]}>
                  Login
               </Text>
            )}
         </Button>
      </View>
   );
}

const styles = StyleSheet.create({
   input: {
      borderRadius: 10,
   },
   container: {
      gap: 12,
   },
   forgotPasswordbutton: {
      alignSelf: 'flex-end',
   },
   loginButton: {
      borderRadius: 10,
   },
   loginButtonText: {
      fontWeight: '500',
      textAlign: 'center',
   },
});
