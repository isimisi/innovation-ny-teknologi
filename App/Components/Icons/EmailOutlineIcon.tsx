import { Icon, IconElement, IconProps } from '@ui-kitten/components';
import { ICON_PACKAGES } from '../../Packages/PackageNames';

export default function EmailOutlineIcon(props: IconProps): IconElement {
   return (
      <Icon name="email-outline" pack={ICON_PACKAGES.M_COMMUNITY} {...props} />
   );
}
