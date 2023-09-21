import { Layout } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

interface Props {
   children: JSX.Element;
}
// til min dovne hjerne så jeg slipper for at skrive styles ind hver gang jeg bruger Layout
export default function ScreenLayout({ children }: Props) {
   return (
      <Layout style={styles.layout} level="3">
         {children}
      </Layout>
   );
}

const styles = StyleSheet.create({
   layout: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
});
