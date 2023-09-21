import React from 'react';
import { Spinner } from '@ui-kitten/components';
import {
   ImageProps,
   StyleSheet,
   View,
} from 'react-native';

// til knapper når de loader
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
