import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, Text, useStyleSheet } from '@ui-kitten/components';
import ImageView from 'react-native-image-viewing';
import stockImages from './stockImages';
import ImageList from '../../UI/ImageList';
import MapView, { PROVIDER_GOOGLE, Region } from 'react-native-maps';
import { DateTime } from 'luxon';
import DateTimePicker from '../../UI/DatetimePicker';
import { OfficeListItem } from '../../../api/fetch';
import bookingStyles from './styles';
const randomIndex = Math.floor(Math.random() * stockImages.length);
const randomImageSelection = stockImages[randomIndex];
const initialRegion: Region = {
   longitude: 12.529707066714764,
   latitude: 55.681160982279025,
   latitudeDelta: 0.008,
   longitudeDelta: 0.008,
};
interface Datetime {
   date: null | DateTime;
   time: null | DateTime;
}

export interface DatetimeState {
   start: Datetime;
   end: Datetime;
}

interface Props {
   item: OfficeListItem;
   setDatetime: React.Dispatch<React.SetStateAction<DatetimeState>>;
   datetime: DatetimeState;
   onCancel: () => void;
   onConfirm: () => void;
}

export default function SelectDate({
   item,
   setDatetime,
   datetime,
   onCancel,
   onConfirm,
}: Props) {
   const [imageVisible, setImageVisible] = React.useState(false);
   const [imageIndex, setImageIndex] = React.useState(0);

   const handleSelectDate = (type: 'start' | 'end') => (date: DateTime) => {
      setDatetime((prev) => ({ ...prev, [type]: { ...prev[type], date } }));
   };
   const handleSelectTime = (type: 'start' | 'end') => (time: DateTime) => {
      setDatetime((prev) => ({ ...prev, [type]: { ...prev[type], time } }));
   };

   const styles = useStyleSheet(themedStyles);

   return (
      <Card style={styles.card} disabled={true}>
         <View style={styles.container}>
            <View style={styles.context}>
               <Text category="h4" style={[styles.title]}>
                  {item.name}
               </Text>
               <Text appearance="alternative" style={styles.address}>
                  {item.address}
               </Text>

               <DateTimePicker
                  label="From"
                  date={datetime.start.date}
                  onSelectDate={handleSelectDate('start')}
                  time={datetime.start.time}
                  onSelectTime={handleSelectTime('start')}
                  minDate={DateTime.now()}
               />
               <DateTimePicker
                  label="To"
                  date={datetime.end.date}
                  onSelectDate={handleSelectDate('end')}
                  time={datetime.end.time}
                  onSelectTime={handleSelectTime('end')}
                  minDate={datetime.start.date || DateTime.now()}
               />
            </View>

            <ImageList
               images={randomImageSelection}
               onPress={(i) => {
                  setImageIndex(i);
                  setImageVisible(true);
               }}
            />

            <View style={styles.mapContainer}>
               {/* Tilføj funktionalitet så den viser hvor kontoret er */}
               <MapView
                  style={styles.map}
                  provider={PROVIDER_GOOGLE}
                  initialRegion={initialRegion}
               />
            </View>

            <View style={styles.btnContainer}>
               <Button onPress={onCancel} appearance="ghost" style={styles.btn}>
                  Cancel
               </Button>
               <Button
                  appearance="ghost"
                  style={styles.btn}
                  onPress={onConfirm}>
                  Confirm
               </Button>
            </View>
         </View>

         <ImageView
            images={randomImageSelection}
            imageIndex={imageIndex}
            visible={imageVisible}
            onRequestClose={() => setImageVisible(false)}
         />
      </Card>
   );
}

const themedStyles = StyleSheet.create({
   ...bookingStyles,
   context: {
      gap: 2,
   },
   container: {
      gap: 12,
   },
});
