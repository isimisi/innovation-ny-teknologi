import { Text, useStyleSheet, useTheme } from '@ui-kitten/components';
import { ListRenderItemInfo, Pressable, StyleSheet, View } from 'react-native';
import Chip from '../UI/Chip';
import { OfficeListItem } from '../../api/fetch';

interface Props extends ListRenderItemInfo<OfficeListItem> {
   onPress: (id: number) => void;
}

// Der er endnu ikke tilføjet funktion til nedenstående, men dette er genstandene på listen, hvorpå lokation vælges
// Funktionalitet og navigation tilføjes senere hen
export default function ListItem({ item, onPress }: Props) {
   const theme = useTheme();

   return (
      <Pressable
         onPress={() => onPress(item.id)}
         style={({ pressed }) => [
            styles.card,
            {
               backgroundColor: pressed
                  ? theme['color-basic-200']
                  : theme['color-basic-100'],
            },
         ]}>
         <View style={styles.context}>
            <Text
               category="h2"
               style={[styles.title, { color: theme['color-primary-500'] }]}>
               {item.name}
            </Text>
            <Text
               appearance="alternative"
               style={{ color: theme['color-gray-500'] }}>
               {item.address}
            </Text>
            <Text appearance="hint" category="s2">
               {item.date.from}
               {item.date.to ? `- ${item.date.to}` : ''}
            </Text>
            <View style={styles.chips}>
               {item.meta.map((m) => (
                  <Chip key={`${item.id}-${m}`}>{m}</Chip>
               ))}
            </View>
         </View>
      </Pressable>
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
