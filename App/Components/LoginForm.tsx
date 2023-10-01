import { Button, Input, Text } from '@ui-kitten/components';
import { StyleSheet, View, ViewProps } from 'react-native';
import EmailOutlineIcon from './Icons/EmailOutlineIcon';
import passwordFieldIcon from './Icons/PasswordFieldIcon';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import LoadingIndicator from './LoadingIndicator';

interface Props extends ViewProps {
   onSuccess: () => void;
   onError: (message?: string) => void;
}
// form til at logge ind på appen
export default function LoginForm({ onSuccess, onError, ...props }: Props) {
   // info på brugeren
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   // error handling

   // loading når vi afventer svar fra backend
   const [loading, setLoading] = useState(false);

   function inputChangeHandler(dispatch: (text: string) => void) {
      return function (text: string) {
         dispatch(text);
      };
   }

   // funktion der sender credentials til supabase backend
   async function signInWithEmail() {
      const trimmedEmail = email.trim(),
         trimmedPassword = password.trim();

      // tjekker hvis input er tomt så vil vi ikke sende et request til backend
      if (trimmedEmail.length < 1 || trimmedPassword.length < 1) {
         return;
      }

      // add validation and error!
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
         email: email.trim(),
         password: password.trim(),
      });

      setLoading(false);
      // mangler at håndtere error hvis brugeren ikke har valideret deres email
      if (error) return onError();
      onSuccess();
   }

   return (
      <View {...props} style={[styles.container, props.style]}>
         <Input
            style={styles.input}
            accessoryLeft={EmailOutlineIcon}
            onChangeText={inputChangeHandler(setEmail)}
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
               onChangeText={inputChangeHandler(setPassword)}
               value={password}
               secureTextEntry={true}
               placeholder="********"
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
            accessoryRight={loading ? LoadingIndicator : undefined}
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
   backdrop: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
   },
});
