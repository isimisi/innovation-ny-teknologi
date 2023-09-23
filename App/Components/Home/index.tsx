import { List } from '@ui-kitten/components';
import ListItem from './ListItem';
import { StyleSheet, View } from 'react-native';
import Search from './Search';
import { OfficeListItem } from '../../api/fetch';

interface Props {
   data: OfficeListItem[];
}

// Selve listen hvorpå lokationer/genstande, defineret i ListItem.tsx fremgår
// Endvidere er der oprettet en søgeboks, hvilken på nuværende tidspunkt ikke besidder funktionalitet, denne i Search.tsx
export default function Home({ data }: Props) {
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
