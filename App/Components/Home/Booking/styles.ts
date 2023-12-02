import { StyleSheet } from 'react-native';
import DefaultShadow from '../../../Styles/DefaultShadow';

export default StyleSheet.create({
   card: {
      borderRadius: 12,
      alignSelf: 'center',
      width: '80%',
   },
   btnContainer: {
      flexDirection: 'row',
      gap: 4,
   },
   btn: { flex: 1 },
   title: {
      fontWeight: '400',
      color: 'color-primary-500',
   },
   address: {
      color: 'color-gray-500',
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
   mapContainer: {
      ...DefaultShadow,
      backgroundColor: 'color-basic-100',
      borderRadius: 12,
   },
});
