import { Text } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';

interface Props {}

/**
 * This component is meant to be shown when the user
 * has successfully scanned a seat which they have booked
 * For it to be successful the user has to scan the nfc tag at the seat,
 * in the given time period of the booking
 */
export default function SeatSession({}: Props) {
   return (
      <View>
         <Text>Seat Session</Text>
         {/* user information ? */}
         {/* seat information */}
         {/* countdown ? */}
      </View>
   );
}
