import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Modal, ModalProps, ViewPager } from '@ui-kitten/components';
import { OfficeListItem } from '../../../api/fetch';
import SelectDate, { DatetimeState } from './SelectDate';
import Payment from './Payment';
import OrderDetail from './OrderDetails';

interface Props extends Omit<ModalProps, 'children' | 'id'> {
   // id: number;
   item: OfficeListItem; // temporary
}

export default function BookingModal({
   onBackdropPress,
   visible,
   item,
}: Props) {
   const [page, setPage] = useState(0);
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

   const handleConfirmBooking = () => setPage(1);
   const handleBackdropPress = () => {
      setPage(0);
      onBackdropPress && onBackdropPress();
   };
   // for future
   // const [officeInformation, dispatchOfficeInformation] = React.useReducer(
   //    reducer,
   //    initialOfficeInformation
   // );

   // useEffect(() => {
   //    if (visible) {
   //       // fetch for ID
   //    }
   // }, [id]);

   return (
      <Modal
         visible={visible}
         style={styles.modal}
         backdropStyle={styles.backdrop}
         onBackdropPress={onBackdropPress}>
         <ViewPager
            selectedIndex={page}
            swipeEnabled={false}
            animationDuration={200}
            style={styles.viewPager}>
            <SelectDate
               setDatetime={setDatetime}
               datetime={datetime}
               item={item}
               onCancel={handleBackdropPress}
               onConfirm={handleConfirmBooking}
            />
            <Payment onBack={() => setPage(0)} onConfirm={() => setPage(2)} />
            <OrderDetail
               onBack={() => setPage(1)}
               onConfirm={handleBackdropPress}
            />
         </ViewPager>
      </Modal>
   );
}

const styles = StyleSheet.create({
   modal: {
      width: '100%',
   },
   backdrop: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
   },
   viewPager: {},
});
