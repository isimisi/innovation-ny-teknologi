import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, Text, useStyleSheet } from '@ui-kitten/components';
import ImageView from 'react-native-image-viewing';
import stockImages from './stockImages';
import ImageList from '../../UI/ImageList';
import Chip from '../../UI/Chip';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { DateTime } from 'luxon';
import DateTimePicker from '../../UI/DatetimePicker';
import { OfficeListItem } from '../../../api/fetch';
const randomIndex = Math.floor(Math.random() * stockImages.length);
const randomImageSelection = stockImages[randomIndex];

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
               <View style={styles.chips}>
                  {item.meta.map((m) => (
                     <Chip key={`${item.id}-${m}`}>{m}</Chip>
                  ))}
               </View>

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

            <View>
               {/* Tilføj funktionalitet så den viser hvor kontoret er */}
               <MapView style={styles.map} provider={PROVIDER_GOOGLE} />
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
   card: {
      borderRadius: 12,
      alignSelf: 'center',
      width: '80%',
   },
   title: {
      fontWeight: '400',
      color: 'color-primary-500',
   },
   context: {
      gap: 2,
   },
   container: {
      gap: 12,
   },
   chips: {
      gap: 2,
      paddingVertical: 5,
      flexDirection: 'row',
      alignItems: 'flex-start',
   },
   map: {
      width: '100%',
      height: 120,
      borderRadius: 12,
   },
   btnContainer: {
      flexDirection: 'row',
      gap: 4,
   },
   btn: {
      flex: 1,
   },
   address: {
      color: 'color-gray-500',
   },
});
