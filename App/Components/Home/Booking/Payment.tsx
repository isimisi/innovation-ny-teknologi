import { Button, Card, Text, useStyleSheet } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';

interface Props {
   onBack: () => void;
   onConfirm: () => void;
}

export default function Payment({ onBack, onConfirm }: Props) {
   const styles = useStyleSheet(themedStyles);

   return (
      <Card style={styles.card} disabled={true}>
         <View>
            <Text>Payment</Text>
            <View style={styles.btnContainer}>
               <Button onPress={onBack} appearance="ghost" style={styles.btn}>
                  Back
               </Button>
               <Button
                  appearance="ghost"
                  style={styles.btn}
                  onPress={onConfirm}>
                  Pay
               </Button>
            </View>
         </View>
      </Card>
   );
}

const themedStyles = StyleSheet.create({
   card: {
      borderRadius: 12,
      alignSelf: 'center',
      width: '80%',
   },
   btnContainer: {
      flexDirection: 'row',
      gap: 4,
   },
   btn: { flex: 1 },
});
