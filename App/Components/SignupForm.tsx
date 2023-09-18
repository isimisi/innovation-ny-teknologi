import { Button, Input, Text } from '@ui-kitten/components';
import { Alert, StyleSheet, View, ViewProps } from 'react-native';
import EmailOutlineIcon from './Icons/EmailOutlineIcon';
import passwordFieldIcon from './Icons/PasswordFieldIcon';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import LoadingIndicator from './LoadingIndicator';
import AccountOutlineIcon from './Icons/AccountOutlineIcon';

export default function SignupForm(props: ViewProps) {
   const [nickName, setNickName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [repeatPassword, setReapeatPassword] = useState('');

   const [loading, setLoading] = useState(false);

   async function signUpWithEmail() {
      // add validation and error!
      if (password !== repeatPassword) {
         return Alert.alert('passwords doesnt match');
      }

      setLoading(true);
      const { error } = await supabase.auth.signUp({
         email: email,
         password: password,
         options: {
            data: {
               nick_name: nickName,
            },
         },
      });

      if (error) Alert.alert(error.message);
      setLoading(false);
   }

   return (
      <View {...props} style={[styles.container, props.style]}>
         <Input
            style={styles.input}
            accessoryLeft={AccountOutlineIcon}
            onChangeText={(text) => setNickName(text)}
            label="Nickname"
            value={nickName}
            placeholder="Johnny"
            autoCapitalize={'none'}
         />
         <Input
            style={styles.input}
            accessoryLeft={EmailOutlineIcon}
            onChangeText={(text) => setEmail(text)}
            label="Email"
            value={email}
            placeholder="email@address.com"
            autoCapitalize={'none'}
         />
         <Input
            style={styles.input}
            accessoryLeft={passwordFieldIcon}
            label="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            placeholder="********"
            autoCapitalize={'none'}
         />
         <Input
            style={styles.input}
            accessoryLeft={passwordFieldIcon}
            label="Repeat password"
            onChangeText={(text) => setReapeatPassword(text)}
            value={repeatPassword}
            secureTextEntry={true}
            placeholder="********"
            autoCapitalize={'none'}
         />

         <Button
            size="medium"
            style={styles.signupButton}
            accessoryRight={loading ? LoadingIndicator : undefined}
            disabled={loading}
            onPress={() => signUpWithEmail()}>
            {(props) => (
               <Text {...props} style={[props?.style, styles.signupButtonText]}>
                  Sign Up
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
   signupButton: {
      marginVertical: 10,
      borderRadius: 10,
   },
   signupButtonText: {
      fontWeight: '500',
      textAlign: 'center',
   },
});
