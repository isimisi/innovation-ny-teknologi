import { Button, Input, Text } from '@ui-kitten/components';
import { Alert, StyleSheet, View, ViewProps } from 'react-native';
import EmailOutlineIcon from './Icons/EmailOutlineIcon';
import passwordFieldIcon from './Icons/PasswordFieldIcon';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import LoadingIndicator from './LoadingIndicator';

interface Props extends ViewProps {
   onSuccess: () => void;
}

export default function LoginForm({ onSuccess, ...props }: Props) {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [loading, setLoading] = useState(false);

   async function signInWithEmail() {
      // add validation and error!
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
         email: email,
         password: password,
      });

      setLoading(false);
      if (error) return Alert.alert(error.message, error.stack);
      onSuccess();
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
});
