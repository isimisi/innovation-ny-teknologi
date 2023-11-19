import { Popover, useTheme } from '@ui-kitten/components';
import React from 'react';
import ReactNativeModernDatepicker from 'react-native-modern-datepicker';
import DatetimeButton from './DatetimeButton';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import DefaultShadow from '../../../Styles/DefaultShadow';
import { readable, yearmonthday } from '../../../../lib/util/formatDate';
import { DateTime } from 'luxon';

interface Props {
   initialText?: string;
   date: DateTime | null;
   onSelect: (date: DateTime) => void;
   minDate?: DateTime;
   maxDate?: DateTime;
   buttonStyle?: StyleProp<ViewStyle>;
   style?: StyleProp<ViewStyle>;
}

export default function DatePicker({
   date,
   onSelect,
   initialText = 'Select Date',
   maxDate,
   minDate,
   buttonStyle,
   style,
}: Props) {
   const theme = useTheme();
   const [isVisible, setIsVisible] = React.useState(false);

   const handleShowPopper = () => setIsVisible(true);
   const handleBackdropPress = () => {
      setIsVisible(false);
   };

   const renderToggleButton = () => (
      <DatetimeButton
         date={date?.toFormat(readable) || initialText}
         onPress={handleShowPopper}
         style={buttonStyle}
      />
   );

   const handleDateChange = (dateString: string) => {
      const changedDate = DateTime.fromFormat(dateString, yearmonthday);
      onSelect(changedDate);
      handleBackdropPress();
   };

   return (
      <Popover
         visible={isVisible}
         onBackdropPress={handleBackdropPress}
         backdropStyle={styles.backdrop}
         anchor={renderToggleButton}
         style={[styles.popover, DefaultShadow, style]}
         animationType="fade">
         <ReactNativeModernDatepicker
            options={{
               backgroundColor: theme['color-basic-100'],
               textHeaderColor: theme['color-gray-500'],
               textDefaultColor: theme['color-primary-300'],
               selectedTextColor: theme['color-gray-100'],
               mainColor: theme['color-primary-500'],
               textSecondaryColor: theme['color-primary-500'],
            }}
            current={DateTime.now().toFormat(yearmonthday)}
            selected={date?.toFormat(yearmonthday) || ''}
            maximumDate={maxDate?.toFormat(yearmonthday)}
            minimumDate={minDate?.toFormat(yearmonthday)}
            onDateChange={handleDateChange}
            mode="calendar"
            minuteInterval={30}
            style={{ borderRadius: 10, minWidth: 250 }}
         />
      </Popover>
   );
}

const styles = StyleSheet.create({
   popover: {
      borderRadius: 10,
      minWidth: 250,
   },
   backdrop: {
      // backgroundColor: '#11143690',
   },
});
