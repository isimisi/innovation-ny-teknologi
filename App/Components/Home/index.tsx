import { List } from '@ui-kitten/components';
import ListItem from './ListItem';
import { StyleSheet, View } from 'react-native';
import Search from './Search';
import { OfficeListItem } from '../../api/fetch';
import BookingModal from './Booking';
import React from 'react';

interface Props {
   data: OfficeListItem[];
}

// Selve listen hvorpå lokationer/genstande, defineret i ListItem.tsx fremgår
// Endvidere er der oprettet en søgeboks, hvilken på nuværende tidspunkt ikke besidder funktionalitet, denne i Search.tsx
export default function Home({ data }: Props) {
   const [selectedOffice, setSelectedOffice] = React.useState({
      isVisible: false,
      // id: 0,
      index: 0,
   });

   const handlePressItem = (index: number) => {
      setSelectedOffice({ isVisible: true, index });
   };

   const handleBackdropPress = () =>
      setSelectedOffice((prev) => ({ isVisible: false, index: prev.index }));

   return (
      <View style={styles.container}>
         <Search />
         <List
            style={styles.listContainer}
            data={data}
            renderItem={(info) => (
               <ListItem
                  {...info}
                  onPress={() => handlePressItem(info.index)}
               />
            )}
         />

         <BookingModal
            visible={selectedOffice.isVisible}
            // id={selectedOffice.id}
            item={data[selectedOffice.index]}
            onBackdropPress={handleBackdropPress}
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
