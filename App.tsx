import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { default as theme } from './theme.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { MaterialIconsPack } from './App/Packages/MaterialIconsPack';
import { MaterialCommunityIconsPack } from './App/Packages/MaterialIconsCommunityPack';
import { default as mapping } from './mapping.json';

import { AppNavigator } from './App/Components/Navigator';

export default () => (
   <>
      <IconRegistry
         icons={[EvaIconsPack, MaterialIconsPack, MaterialCommunityIconsPack]}
      />
      <ApplicationProvider
         {...eva}
         customMapping={{ ...eva.mapping, ...mapping }}
         theme={{ ...eva.light, ...theme }}>
         <AppNavigator />
      </ApplicationProvider>
   </>
);
