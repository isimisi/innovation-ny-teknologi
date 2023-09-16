import { Icon, IconElement, IconProps } from '@ui-kitten/components';
import { ICON_PACKAGES } from '../../Packages/PackageNames';

export default function passwordFieldIcon(props: IconProps): IconElement {
   return (
      <Icon
         name="form-textbox-password"
         pack={ICON_PACKAGES.M_COMMUNITY}
         {...props}
      />
   );
}
