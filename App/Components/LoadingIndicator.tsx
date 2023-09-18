import React from 'react';
import { Spinner } from '@ui-kitten/components';
import {
   ImageProps,
   ImageSourcePropType,
   StyleSheet,
   View,
} from 'react-native';

export default function LoadingIndicator(
   { style }: Partial<ImageProps> = { style: {} }
) {
   return (
      <View style={[style, styles.indicator]}>
         <Spinner size="small" />
      </View>
   );
}

const styles = StyleSheet.create({
   indicator: {
      justifyContent: 'center',
      alignItems: 'center',
   },
});
