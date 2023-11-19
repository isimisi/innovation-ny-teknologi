import { Text, useTheme } from '@ui-kitten/components';
import React, { RefObject } from 'react';
import { Pressable, PressableProps, StyleSheet, View } from 'react-native';

interface Props extends Omit<PressableProps, 'children'> {
   date: string;
}

const DatetimeButton = React.forwardRef<View, Props>(
   ({ date, style, ...rest }, ref) => {
      const theme = useTheme();

      return (
         <Pressable
            ref={ref}
            {...rest}
            style={(state) => [
               {
                  backgroundColor: state.pressed
                     ? theme['color-basic-200']
                     : 'transparent',
               },
               styles.button,
               typeof style === 'function' ? style(state) : style,
            ]}>
            <Text style={[{ color: theme['color-primary-400'] }]}>{date}</Text>
         </Pressable>
      );
   }
);

const styles = StyleSheet.create({
   button: {
      padding: 8,
      alignItems: 'center',
      borderRadius: 4,
   },
   text: {},
});

export default DatetimeButton;
