import {
   Button,
   Card,
   Text,
   useStyleSheet,
   Divider,
} from '@ui-kitten/components';
import { ScrollView, StyleSheet, View } from 'react-native';
import { OfficeListItem } from '../../../api/fetch';
import bookingStyles from './styles';
import MapView, { PROVIDER_GOOGLE, Region } from 'react-native-maps';
import AppleIcon from '../../Icons/AppleIcon';
import ChevronRightIcon from '../../Icons/ChevronRight';

const initialRegion: Region = {
   longitude: 12.529707066714764,
   latitude: 55.681160982279025,
   latitudeDelta: 0.008,
   longitudeDelta: 0.008,
};

interface Props {
   onBack: () => void;
   onConfirm: () => void;
   item: OfficeListItem;
}

const mockOrder = Array(3)
   .fill('Item')
   .map((_, i) => ({
      order: `Item ${i + 1}`,
      price: ((i + 1) * 100) / 3 + Math.ceil(Math.random() * 20),
   }));

const total = mockOrder.reduce((acc, curr) => acc + curr.price, 0);

export default function Payment({ onBack, onConfirm, item }: Props) {
   const styles = useStyleSheet(themedStyles);

   return (
      <Card style={styles.card} disabled={true}>
         <View>
            <View style={styles.container}>
               <View>
                  <Text category="h4" style={[styles.title]}>
                     {item.name}
                  </Text>
                  <Text appearance="alternative" style={styles.address}>
                     {item.address}
                  </Text>
               </View>

               <ScrollView
                  contentContainerStyle={styles.scrollViewContainer}
                  style={{ maxHeight: 400 }}>
                  <View style={styles.mapContainer}>
                     {/* Tilføj funktionalitet så den viser hvor kontoret er */}
                     <MapView
                        style={styles.map}
                        provider={PROVIDER_GOOGLE}
                        initialRegion={initialRegion}
                     />
                  </View>

                  <View>
                     <Text style={styles.sectionText}>Payment</Text>
                     {/* Valg af foretrukken betaling, indtil videre viser jeg blot apple pay - mangler funktionalitet */}
                     <View style={styles.paymentMethodContainer}>
                        <View style={styles.iconContainer}>
                           <AppleIcon style={[styles.icon, styles.appleIcon]} />
                        </View>
                        <View style={styles.paymentMethodTextContainer}>
                           <Text style={styles.paymentMethodTitle}>
                              Apple Pay
                           </Text>
                           <Text style={styles.paymentMethodCharged}>
                              Charged for{' '}
                              {total.toLocaleString('da', {
                                 currency: 'DKK',
                                 style: 'currency',
                              })}
                           </Text>
                        </View>
                        <View style={styles.iconContainer}>
                           <ChevronRightIcon
                              style={[styles.icon, styles.chevronIcon]}
                           />
                        </View>
                     </View>
                  </View>

                  {/* Liste af personens ordre */}
                  <View style={styles.list}>
                     <View>
                        <Text style={styles.sectionText}>Order Details</Text>
                        <Text style={styles.priceInfo}>
                           Prices in kr, incl. Taxes
                        </Text>
                     </View>
                     <View style={styles.items}>
                        {mockOrder.map(({ order, price }) => (
                           <View style={styles.itemContainer}>
                              <Text style={styles.item}>{order}</Text>
                              <Text style={styles.item}>
                                 {/* Sørger for at formattere prisen til xxx,xx kr */}
                                 {price.toLocaleString('da', {
                                    currency: 'DKK',
                                    style: 'currency',
                                 })}
                              </Text>
                           </View>
                        ))}
                        <Divider style={styles.divider} />
                        <View style={styles.itemContainer}>
                           <Text style={[styles.item, styles.totalItem]}>
                              Total
                           </Text>
                           <Text style={[styles.item, styles.totalItem]}>
                              {total.toLocaleString('da', {
                                 currency: 'DKK',
                                 style: 'currency',
                              })}
                           </Text>
                        </View>
                     </View>
                  </View>
               </ScrollView>
            </View>
            <View style={styles.btnContainer}>
               <Button onPress={onBack} appearance="ghost" style={styles.btn}>
                  Back
               </Button>
               <Button
                  appearance="ghost"
                  style={styles.btn}
                  onPress={onConfirm}>
                  Confirm
               </Button>
            </View>
         </View>
      </Card>
   );
}

const themedStyles = StyleSheet.create({
   ...bookingStyles,
   icon: {
      width: 28,
      height: 28,
   },
   appleIcon: {
      color: 'color-basic-900',
   },
   chevronIcon: {
      color: 'color-gray-300',
   },
   iconContainer: {
      justifyContent: 'center',
   },
   paymentMethodTitle: {
      fontWeight: '600',
      fontSize: 18,
      color: 'color-gray-500',
   },
   paymentMethodCharged: {
      color: 'color-gray-500',
      fontSize: 10,
   },
   paymentMethodTextContainer: {
      width: 150,
   },
   paymentMethodContainer: {
      borderColor: 'color-primary-200',
      borderWidth: 1,
      borderRadius: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      padding: 10,
   },
   scrollViewContainer: {
      gap: 15,
      width: '100%',
   },
   sectionText: {
      color: 'color-gray-600',
      fontWeight: '600',
      fontSize: 14,
      padding: 5,
   },
   itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   items: {
      gap: 4,
   },
   item: {
      fontSize: 12,
      paddingHorizontal: 2,
      color: 'color-gray-500',
   },
   totalItem: {
      fontWeight: '500',
      paddingTop: 2,
      color: 'color-gray-600',
   },
   priceInfo: {
      fontSize: 14,
   },
   list: {
      gap: 4,
   },
   divider: {
      backgroundColor: 'color-basic-400',
   },
   container: {
      gap: 8,
   },
});
