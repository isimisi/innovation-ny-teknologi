import { Icon, IconElement, IconProps } from '@ui-kitten/components';
import { ICON_PACKAGES } from '../../Packages/PackageNames';

export default function ChevronRightIcon(props: IconProps): IconElement {
   return (
      <Icon name="chevron-right" pack={ICON_PACKAGES.M_COMMUNITY} {...props} />
   );
}
