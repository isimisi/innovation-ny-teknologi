import {
   StyleSheet,
   Platform,
   StatusBar,
   SafeAreaView as SAV,

} from 'react-native';
import { SafeAreaViewProps } from 'react-native-safe-area-context';

// safe area view lavet både til ios og android
// inspiration fra https://stackoverflow.com/questions/51289587/how-to-use-safeareaview-for-android-notch-devices
export default function SafeAreaView(props: SafeAreaViewProps) {
   return (
      <SAV {...props} style={[styles.AndroidSafeArea, props.style]}>
         {props.children}
      </SAV>
   );
}

const styles = StyleSheet.create({
   AndroidSafeArea: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

   },
});
