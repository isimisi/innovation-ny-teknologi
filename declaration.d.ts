// til at loade svg'er ind og så ts forstår lortet
declare module '*.svg' {
   import React from 'react';
   import { SvgProps } from 'react-native-svg';
   const content: React.FC<SvgProps>;
   export default content;
}
