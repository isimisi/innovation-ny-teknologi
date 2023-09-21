import { Icon, IconElement, IconProps } from '@ui-kitten/components';
import { ICON_PACKAGES } from '../../Packages/PackageNames';

export default function TuneIcon(props: IconProps): IconElement {
   return <Icon name="tune" pack={ICON_PACKAGES.M_COMMUNITY} {...props} />;
}
