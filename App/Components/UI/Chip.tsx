import { TextProps, useTheme } from '@ui-kitten/components';
import { StyleSheet, View, ViewProps } from 'react-native';
import { Text } from '@ui-kitten/components';

interface Props {
   children: JSX.Element | string;
   style?: ViewProps['style'];
   textStyle?: TextProps['style'];
}

// en lille ui brik til at vise meta data 
export default function Chip({ children, style, textStyle }: Props) {
   const theme = useTheme();

   return (
      <View
         style={[
            styles.chip,
            { backgroundColor: theme['color-primary-300'] },
            style,
         ]}>
         <Text
            style={[
               styles.text,
               { color: theme['color-basic-100'] },
               textStyle,
            ]}>
            {children}
         </Text>
      </View>
   );
}

const styles = StyleSheet.create({
   chip: {
      borderRadius: 50, //tbd
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 8,
      paddingVertical: 4,
   },
   text: {
      fontSize: 10,
      fontWeight: '400',
   },
});
