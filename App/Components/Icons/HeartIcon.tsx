import { Icon, IconElement, IconProps } from '@ui-kitten/components';
import { ICON_PACKAGES } from '../../Packages/PackageNames';

export default function HeartIcon(props: IconProps): IconElement {
   return (
      <Icon
         name="heart"
         pack={ICON_PACKAGES.M_COMMUNITY}
         {...props}
      />
   );
}
