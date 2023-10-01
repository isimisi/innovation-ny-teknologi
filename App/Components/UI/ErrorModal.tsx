import {
   Button,
   Card,
   Modal,
   ModalProps,
   Text,
   useTheme,
} from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';

interface Props extends Omit<ModalProps, 'children'> {
   children: string;
   secondaryButton?: JSX.Element;
   primaryButton?: JSX.Element;
   subText?: string;
}

export default function ErrorModal({
   visible,
   backdropStyle,
   onBackdropPress,
   children,
   secondaryButton = <Button appearance="ghost">Cancel</Button>,
   primaryButton = <Button appearance="ghost">Okay</Button>,
   subText,
}: Props) {
   const theme = useTheme();
   return (
      <Modal
         visible={visible}
         style={styles.modal}
         backdropStyle={[styles.backdrop, backdropStyle]}
         onBackdropPress={onBackdropPress}>
         <Card style={styles.card} disabled={true}>
            <View style={styles.container}>
               <Text style={[styles.title, { color: theme['color-gray-500'] }]}>
                  {children}
               </Text>
               {subText && (
                  <Text
                     style={{ color: theme['color-gray-400'] }}
                     category="s2">
                     {subText}
                  </Text>
               )}
               <View style={styles.buttonContainer}>
                  {secondaryButton}
                  {primaryButton}
               </View>
            </View>
         </Card>
      </Modal>
   );
}
const styles = StyleSheet.create({
   card: {
      borderRadius: 12,
      alignSelf: 'center',
   },
   container: {
      gap: 10,
   },
   modal: {
      width: '80%',
   },
   backdrop: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
   },
   buttonContainer: {
      gap: 10,
      justifyContent: 'flex-end',
      flexDirection: 'row',
   },
   title: {
      fontSize: 18,
      fontWeight: '600',
   },
});
