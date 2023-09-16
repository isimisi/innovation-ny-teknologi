import React from 'react';
import * as eva from '@eva-design/eva';
import {
   ApplicationProvider,
   Layout,
   IconRegistry,
} from '@ui-kitten/components';
import { default as theme } from './theme.json';
import LoginScreen from './Screens/LoginScreen';
import { StyleSheet } from 'react-native';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export default () => (
   <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
         <Layout style={styles.layout} level="3">
            <LoginScreen />
         </Layout>
      </ApplicationProvider>
   </>
);

const styles = StyleSheet.create({
   layout: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
});
