import { Button, Modal, useTheme } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import NfcManager, {
   NfcError,
   NfcEvents,
   TagEvent,
   NfcTech,
   Ndef,
} from 'react-native-nfc-manager';
import WirelessIcon from '../../../assets/WirelessIcon.svg';
import NfcMobileIcon from '../../../assets/nfc-mobile.svg';
import ErrorModal from '../UI/ErrorModal';

interface Props {
   cancel: () => void;
}

// Inspiration kommer fra:
// https://blog.logrocket.com/using-nfc-tags-react-native/#how-write-nfc-tag

export default function Scanner({ cancel }: Props) {
   const [hasNfc, setHasNFC] = useState<boolean | null>(null);

   const theme = useTheme();

   // Checking if the device supports NFC
   // We might want an alternative for phones not supporting NFC ?
   // Also, we can make sure on google play that only devices who has NFC can download the app (maybe we dont want that)
   useEffect(() => {
      const checkIsSupported = async () => {
         const deviceIsSupported = await NfcManager.isSupported();

         setHasNFC(deviceIsSupported);

         if (deviceIsSupported) {
            await NfcManager.start();
            await NfcManager.registerTagEvent();
         }
      };

      checkIsSupported();
   }, []);

   useEffect(() => {
      // Adding a listener for when a nfc tag has been discovered / read
      NfcManager.setEventListener(NfcEvents.DiscoverTag, (tag: TagEvent) => {
         console.log('tag found:', tag);
      });

      // when component unmounts we want to remove the listener aswell
      return () => {
         NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
      };
   }, []);

   if (hasNfc === null) return null;

   if (!hasNfc) {
      return (
         <ErrorModal
            visible
            onBackdropPress={cancel}
            primaryButton={
               <Button appearance="ghost" onPress={cancel}>
                  Cancel
               </Button>
            }
            secondaryButton={
               <Button appearance="ghost">Contact Support</Button>
            }>
            NFC not supported
         </ErrorModal>
      );
   }

   return (
      <Modal visible backdropStyle={styles.backdrop} style={styles.modal}>
         <View
            style={[
               styles.card,
               { backgroundColor: theme['color-basic-100'] },
            ]}>
            <View
               style={[
                  styles.header,
                  { borderBottomColor: theme['color-gray-200'] },
               ]}>
               <Text
                  style={{
                     color: theme['color-gray-600'],
                     fontWeight: '500',
                  }}>
                  NFC Tag Reader
               </Text>
            </View>
            <View style={styles.main}>
               <NfcMobileIcon width={100} height={100} />
               <Text style={{ color: theme['color-gray-400'] }}>
                  Hold your device near the NFC tag
               </Text>
            </View>
            <Button appearance="ghost" onPress={cancel}>
               Cancel
            </Button>
         </View>
      </Modal>
   );
}

const styles = StyleSheet.create({
   backdrop: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
   },
   card: {
      borderRadius: 16,
      width: '70%',
      alignItems: 'center',
      padding: 8,
   },
   modal: {
      width: '100%',
      alignItems: 'center',
   },
   header: {
      borderBottomWidth: 1,
      width: '100%',
      alignItems: 'center',
      padding: 8,
      gap: 5,
   },
   main: {
      alignItems: 'center',
      padding: 8,
      gap: 12,
   },
   notSupported: {
      paddingVertical: 16,
      gap: 16,
   },
});
