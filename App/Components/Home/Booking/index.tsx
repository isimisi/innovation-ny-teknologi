import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
   Modal,
   Button,
   Card,
   ModalProps,
   Text,
   useTheme,
} from '@ui-kitten/components';
import ImageView from 'react-native-image-viewing';
import stockImages from './stockImages';
import ImageList from '../../UI/ImageList';
import { OfficeListItem } from '../../../api/fetch';
import Chip from '../../UI/Chip';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import DatePicker from '../../UI/DatetimePicker/DatePicker';
import { DateTime } from 'luxon';
import TimePicker from '../../UI/DatetimePicker/TimePicker';
import DateTimePicker from '../../UI/DatetimePicker';

const randomIndex = Math.floor(Math.random() * stockImages.length);
const randomImageSelection = stockImages[randomIndex];

interface Props extends Omit<ModalProps, 'children' | 'id'> {
   // id: number;
   item: OfficeListItem; // temporary
}

interface Datetime {
   date: null | DateTime;
   time: null | DateTime;
}

interface DatetimeState {
   start: Datetime;
   end: Datetime;
}

export default function BookingModal({
   onBackdropPress,
   visible,
   item,
}: Props) {
   const [imageVisible, setImageVisible] = React.useState(false);
   const [imageIndex, setImageIndex] = React.useState(0);
   const [datetime, setDatetime] = useState<DatetimeState>({
      start: {
         date: null,
         time: null,
      },
      end: {
         date: null,
         time: null,
      },
   });
   // for future
   // const [officeInformation, dispatchOfficeInformation] = React.useReducer(
   //    reducer,
   //    initialOfficeInformation
   // );

   const theme = useTheme();

   // useEffect(() => {
   //    if (visible) {
   //       // fetch for ID
   //    }
   // }, [id]);

   const handleSelectDate = (type: 'start' | 'end') => (date: DateTime) => {
      setDatetime((prev) => ({ ...prev, [type]: { ...prev[type], date } }));
   };
   const handleSelectTime = (type: 'start' | 'end') => (time: DateTime) => {
      setDatetime((prev) => ({ ...prev, [type]: { ...prev[type], time } }));
   };

   return (
      <Modal
         visible={visible}
         style={styles.modal}
         backdropStyle={styles.backdrop}
         onBackdropPress={onBackdropPress}>
         <Card style={styles.card} disabled={true}>
            <View style={styles.container}>
               {!item ? (
                  <></>
               ) : (
                  <View style={styles.context}>
                     <Text
                        category="h4"
                        style={[
                           styles.title,
                           { color: theme['color-primary-500'] },
                        ]}>
                        {item.name}
                     </Text>
                     <Text
                        appearance="alternative"
                        style={{ color: theme['color-gray-500'] }}>
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
               )}

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
                  <Button
                     onPress={onBackdropPress}
                     appearance="ghost"
                     style={styles.btn}>
                     Cancel
                  </Button>
                  <Button appearance="ghost" style={styles.btn}>
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
      </Modal>
   );
}

const styles = StyleSheet.create({
   modal: {
      width: '80%',
   },
   backdrop: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
   },
   card: {
      borderRadius: 12,
      alignSelf: 'center',
   },
   title: {
      fontWeight: '400',
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
});
