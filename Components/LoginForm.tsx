import { Button, Input, Text } from '@ui-kitten/components';
import {
   StyleProp,
   StyleSheet,
   View,
   ViewProps,
   ViewStyle,
} from 'react-native';
import EmailOutlineIcon from './Icons/EmailOutlineIcon';
import passwordFieldIcon from './Icons/PasswordFieldIcon';

export default function LoginForm(props: ViewProps) {
   return (
      <View {...props} style={[styles.container, props.style]}>
         <Input style={styles.input} accessoryLeft={EmailOutlineIcon} />
         <View>
            <Input style={styles.input} accessoryLeft={passwordFieldIcon} />
            <Button style={styles.forgotPasswordbutton} appearance="ghost">
               Forgot password
            </Button>
         </View>
         <Button size="medium" style={styles.loginButton}>
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
