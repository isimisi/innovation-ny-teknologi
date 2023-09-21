import { Icon, IconElement, IconProps } from '@ui-kitten/components';
import { ICON_PACKAGES } from '../../Packages/PackageNames';

export default function AccountIcon(props: IconProps): IconElement {
   return <Icon name="account" pack={ICON_PACKAGES.M_COMMUNITY} {...props} />;
}
