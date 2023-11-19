import { DateTime } from 'luxon';
import { Animated, Pressable, StyleSheet, View } from 'react-native';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import { Button, Text, useTheme } from '@ui-kitten/components';
import DatetimeButton from './DatetimeButton';
import React from 'react';
import { hourMinute, readable } from '../../../../lib/util/formatDate';

interface Props {
   label: string;
   date: DateTime | null;
   onSelectDate: (date: DateTime) => void;
   minDate?: DateTime;
   maxDate?: DateTime;
   initialDateText?: string;
   time: DateTime | null;
   onSelectTime: (time: DateTime) => void;
   initialTimeText?: string;
}

export default function DateTimePicker({
   date,
   onSelectDate,
   onSelectTime,
   time,
   initialDateText,
   initialTimeText,
   label,
   maxDate,
   minDate,
}: Props) {
   const theme = useTheme();

   return (
      <View style={styles.container}>
         <Text style={[styles.label, { color: theme['color-primary-500'] }]}>
            {label}
         </Text>

         <View style={styles.pickerContainer}>
            <DatePicker
               date={date}
               onSelect={onSelectDate}
               initialText={initialDateText}
               minDate={minDate}
               maxDate={maxDate}
            />
            <TimePicker
               time={time}
               initialText={initialTimeText}
               onSelect={onSelectTime}
            />
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 8,
      borderRadius: 8,
      gap: 10,
   },

   datetimeContainer: {
      flexDirection: 'row',
   },
   dateTime: {
      fontSize: 14,
   },
   pickerContainer: {
      flex: 4,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      gap: 5,
   },
   label: {
      flex: 1,
      fontWeight: '500',
   },
});
