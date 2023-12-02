import { Icon, IconElement, IconProps } from '@ui-kitten/components';
import { ICON_PACKAGES } from '../../Packages/PackageNames';

export default function AppleIcon(props: IconProps): IconElement {
   return <Icon name="apple" pack={ICON_PACKAGES.M_COMMUNITY} {...props} />;
}
