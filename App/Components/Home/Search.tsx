import { Input, useTheme } from '@ui-kitten/components';
import {
   NativeSyntheticEvent,
   StyleSheet,
   TextInputChangeEventData,
   View,
} from 'react-native';

import PressableChip from '../UI/PressableChip';
import TuneIcon from '../Icons/TuneIcon';
import IconButton from '../UI/IconButton';
import { useState } from 'react';
type Timer = ReturnType<typeof setTimeout>;

interface Props {
   onSearch: (searchTerm: string) => void;
}

// Boksen hvori der kan søges efter lokationer på listen
export default function Search({ onSearch }: Props) {
   const theme = useTheme();
   const [searchTerm, setSearchTerm] = useState('');
   const [debouncer, setDebouncer] = useState<Timer>();

   const handleChangeText = (text: string) => {
      setSearchTerm(text);

      if (debouncer) {
         clearTimeout(debouncer);
      }

      setDebouncer(
         setTimeout(() => {
            onSearch(text);
         }, 200)
      );
   };

   return (
      <View style={styles.container}>
         <View style={styles.itemsContainer}>
            <Input
               style={[
                  styles.input,
                  { backgroundColor: theme['color-basic-100'] },
               ]}
               placeholder="Search Office..."
               value={searchTerm}
               onChangeText={handleChangeText}
            />
            <IconButton>
               <TuneIcon />
            </IconButton>
         </View>
         <View style={[styles.itemsContainer, styles.chipsContainer]}>
            <PressableChip>Date</PressableChip>
            <PressableChip>Seats</PressableChip>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      gap: 6,
      width: '90%',
   },
   itemsContainer: {
      flexDirection: 'row',
      gap: 4,
   },
   input: {
      flex: 1,
   },
   button: {
      width: 40,
      height: 40,
   },
   chipsContainer: {
      marginHorizontal: 4,
   },
});
