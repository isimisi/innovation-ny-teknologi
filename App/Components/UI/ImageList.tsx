import React from 'react';
import {
   Image,
   ImageURISource,
   ScrollView,
   StyleSheet,
   TouchableOpacity,
} from 'react-native';

type Props = {
   images: (string | ImageURISource)[];
   onPress: (index: number) => void;
   shift?: number;
};

// Disse tal definerer height og width på de små billeder vi gerne vil vise i vores ImageList
// Disse tal kan blive justeret efter hvad vi synes er pænest
const IMAGE_WIDTH = 120;
const IMAGE_HEIGH = 120;

// taget fra følgende repo
// https://github.com/jobtoday/react-native-image-viewing/blob/master/example/components/ImageList.tsx

/**
 * Forklaring på hvordan det fungerer
 * @props {images} Et array af strings, som er de URI/URL som referer til billedets lokation (som reelt vil være gemt på en backend server)
 * @props {shift} Dette er en props som vidergives til react-natives scrollView som er en indikator for, hvor stort et offset billederne skal starte med
 * @props {onPress} Den funktion der skal køre når man trykker på ét af billederne (her vil vi formentlig bare vise det billede der bliver trykket på)
 */
const ImageList = ({ images, shift = 0, onPress }: Props) => (
   <ScrollView
      horizontal
      style={styles.root}
      // beregning af offset'et som tidligere beskrevet
      contentOffset={{ x: shift * IMAGE_WIDTH, y: 0 }}
      contentContainerStyle={styles.container}>
      {/* Her loop'er vi igennem images array'et og for hvert billede renderer vi et touchableOpacity med billedet */}
      {images.map((image, index) => {
         const uri = typeof image === 'string' ? image : image.uri || '';

         return (
            <TouchableOpacity
               style={styles.button}
               key={`${uri}_${index}`}
               activeOpacity={0.8}
               onPress={() => onPress(index)}>
               <Image source={{ uri }} style={styles.image} />
            </TouchableOpacity>
         );
      })}
   </ScrollView>
);

const styles = StyleSheet.create({
   root: { flexGrow: 0 },
   container: {
      flex: 0,
      paddingLeft: 10,
      marginBottom: 10,
   },
   button: {
      marginRight: 10,
   },
   image: {
      width: IMAGE_WIDTH,
      height: IMAGE_HEIGH,
      borderRadius: 10,
   },
});

export default ImageList;
