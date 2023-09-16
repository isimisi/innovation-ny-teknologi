import { Icon, IconElement, Input } from '@ui-kitten/components';
import { View } from 'react-native';

function renderIcon(): IconElement {
   return <Icon name="email-outline" />;
}

export default function LoginForm() {
   return (
      <View>
         <Input placeholder="example@email.com" accessoryLeft={renderIcon} />
      </View>
   );
}
