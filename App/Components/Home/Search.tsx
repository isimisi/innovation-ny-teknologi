import { Input, useTheme } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';

import PressableChip from '../UI/PressableChip';
import TuneIcon from '../Icons/TuneIcon';
import IconButton from '../UI/IconButton';

// søge komponeneten til at søge efter kontorer
export default function Search() {
   const theme = useTheme();

   return (
      <View style={styles.container}>
         <View style={styles.itemsContainer}>
            <Input
               style={[
                  styles.input,
                  { backgroundColor: theme['color-basic-100'] },
               ]}
               placeholder="Search Office..."
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
