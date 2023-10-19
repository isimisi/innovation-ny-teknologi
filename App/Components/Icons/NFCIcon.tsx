import { Icon, IconElement, IconProps } from '@ui-kitten/components';
import { ICON_PACKAGES } from '../../Packages/PackageNames';

export default function NFCIcon(props: IconProps): IconElement {
   return <Icon name="nfc" pack={ICON_PACKAGES.M_COMMUNITY} {...props} />;
}
