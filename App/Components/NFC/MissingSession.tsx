import { Button, Text, useTheme } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import WirelessIcon from '../../../assets/WirelessIcon.svg';
import DefaultShadow from '../../Styles/DefaultShadow';

interface Props {
   onPress: () => void;
}

export default function MissingSession({ onPress }: Props) {
   const theme = useTheme();

   return (
      <View
         style={[
            styles.container,
            { backgroundColor: theme['color-basic-100'] },
         ]}>
         <View style={styles.textContainer}>
            <Text style={{ color: theme['color-gray-600'] }}>
               No seat has been registered yet.
            </Text>
            <Text style={{ color: theme['color-gray-600'] }}>
               Please scan the NFC tag located near your booked seat.
            </Text>
         </View>
         <View style={styles.btnContainer}>
            <Button
               accessoryRight={(props) => (
                  <WirelessIcon {...props} width={40} height={40} />
               )}
               onPress={onPress}>
               Scan NFC Tag
            </Button>
            <View style={styles.supportContainer}>
               <Text style={{ color: theme['color-gray-400'] }}>
                  Is this an error?
               </Text>
               <Button appearance="ghost">Contact Support</Button>
            </View>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      gap: 24,
      padding: 24,
      borderRadius: 16,
      ...DefaultShadow,
   },
   textContainer: {
      gap: 4,
   },
   btnContainer: {
      gap: 36,
   },
   supportContainer: {
      alignItems: 'center',
   },
});
