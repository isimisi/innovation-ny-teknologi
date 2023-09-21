import { Text, useTheme } from '@ui-kitten/components';
import { ListRenderItemInfo, StyleSheet, View } from 'react-native';
import Chip from '../UI/Chip';

// Komponenten der bliver vist i listen på home screen
export default function ListItem(info: ListRenderItemInfo<{ title: string }>) {
   const theme = useTheme();

   return (
      <View
         style={[styles.card, { backgroundColor: theme['color-basic-100'] }]}>
         <View style={styles.context}>
            <Text
               category="h2"
               style={[styles.title, { color: theme['color-primary-500'] }]}>
               {info.item.title}
            </Text>
            <Text
               appearance="alternative"
               style={{ color: theme['color-gray-500'] }}>
               addressvej 2
            </Text>
            <Text appearance="hint" category="s2">
               23. Nov 2023 - 24. Nov 2023
            </Text>
            <View style={styles.chips}>
               {/* meta data */}
               <Chip>3 Seats</Chip>
               <Chip>600 kr</Chip>
            </View>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   card: {
      width: '90%',
      alignSelf: 'center',
      borderRadius: 8,
      marginVertical: 5,
      shadowColor: '#171717',
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 4,
   },
   title: {
      fontWeight: '400',
   },
   context: {
      gap: 2,
      paddingHorizontal: 20,
      paddingVertical: 12,
   },
   chips: {
      gap: 2,
      paddingVertical: 5,
      flexDirection: 'row',
      alignItems: 'flex-start',
   },
});
