import { IconElement, useTheme } from '@ui-kitten/components';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

interface Props {
   onPress?: (...args: any) => void;
   children: IconElement;
}
// en knap der kan loade ikoner i stedet for text
export default function IconButton({ children, onPress }: Props) {
   const theme = useTheme();
   return (
      <View style={styles.outerContainer}>
         <Pressable
            onPress={onPress}
            style={({ pressed }) => [
               styles.button,
               {
                  backgroundColor: pressed
                     ? theme['color-primary-700']
                     : theme['color-primary-500'],
               },
            ]}>
            {React.cloneElement(children, {
               style: [styles.icon, { color: theme['color-basic-100'] }],
            })}
         </Pressable>
      </View>
   );
}

const styles = StyleSheet.create({
   button: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      elevation: 2,
   },
   icon: {
      width: 24,
      height: 24,
   },
   outerContainer: { overflow: 'hidden', borderRadius: 4 },
});
