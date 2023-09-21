import { Pressable } from 'react-native';
import Chip from './Chip';
import { useTheme } from '@ui-kitten/components';

interface Props {
   children: string;
   onPress?: (...args: any) => void;
}

// samme lille ui kompoenent som også kan trykkes på
export default function PressableChip({ children, onPress }: Props) {
   const theme = useTheme();

   return (
      <Pressable
         onPress={onPress}
         style={({ pressed }) => [
            {
               borderRadius: 50,
               backgroundColor: pressed
                  ? theme['color-basic-200']
                  : theme['color-basic-100'],
            },
         ]}>
         <Chip
            textStyle={{ color: theme['color-gray-500'] }}
            style={[
               {
                  backgroundColor: 'transparent',
                  borderRadius: 0,
                  paddingHorizontal: 20,
               },
            ]}>
            {children}
         </Chip>
      </Pressable>
   );
}
