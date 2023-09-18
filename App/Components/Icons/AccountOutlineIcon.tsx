import { Icon, IconElement, IconProps } from '@ui-kitten/components';
import { ICON_PACKAGES } from '../../Packages/PackageNames';

export default function AccountOutlineIcon(props: IconProps): IconElement {
   return (
      <Icon
         name="account-outline"
         pack={ICON_PACKAGES.M_COMMUNITY}
         {...props}
      />
   );
}
