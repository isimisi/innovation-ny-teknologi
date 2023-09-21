import { Icon, IconElement, IconProps } from '@ui-kitten/components';
import { ICON_PACKAGES } from '../../Packages/PackageNames';

export default function BreifcaseIcon(props: IconProps): IconElement {
   return <Icon name="briefcase" pack={ICON_PACKAGES.M_COMMUNITY} {...props} />;
}
