import { List } from '@ui-kitten/components';
import ListItem from './ListItem';
import { StyleSheet, View } from 'react-native';
import Search from './Search';

// dummy data
const data = Array(8).fill({ title: 'bruh' });

// Komponent til Home screen som skal render en liste med items loadet fra backend
// samt har den en search funktion til at søge efter kontorer
export default function Home() {
   return (
      <View style={styles.container}>
         <Search />
         <List
            style={styles.listContainer}
            data={data}
            renderItem={(info) => <ListItem {...info} />}
         />
      </View>
   );
}

const styles = StyleSheet.create({
   listContainer: {
      width: '100%',
      gap: 10,
      backgroundColor: 'none',
   },
   container: {
      flex: 1,
      gap: 20,
      width: '100%',
      alignItems: 'center',
   },
});