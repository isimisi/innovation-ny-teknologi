import { Layout } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

interface Props {
   children: JSX.Element;
}

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
