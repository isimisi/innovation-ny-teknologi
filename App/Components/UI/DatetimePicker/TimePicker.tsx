import { Popover, useTheme } from '@ui-kitten/components';
import React from 'react';
import ReactNativeModernDatepicker from 'react-native-modern-datepicker';
import DatetimeButton from './DatetimeButton';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import DefaultShadow from '../../../Styles/DefaultShadow';
import { hourMinute } from '../../../../lib/util/formatDate';
import { DateTime } from 'luxon';

interface Props {
   initialText?: string;
   time: DateTime | null;
   onSelect: (date: DateTime) => void;
   buttonStyle?: StyleProp<ViewStyle>;
   style?: StyleProp<ViewStyle>;
}

export default function TimePicker({
   time,
   onSelect,
   initialText = 'Select Time',
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
         date={time?.toFormat(hourMinute) || initialText}
         onPress={handleShowPopper}
         style={buttonStyle}
      />
   );

   const handleTimeChange = (timeString: string) => {
      const changedTime = DateTime.fromFormat(timeString, hourMinute);
      onSelect(changedTime);
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
            onTimeChange={handleTimeChange}
            mode="time"
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
