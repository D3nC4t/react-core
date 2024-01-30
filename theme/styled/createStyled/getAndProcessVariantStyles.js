import {
  merge
} from 'lodash';
import componentVariantsResolver from './componentVariantsResolver';
import processStyles from './processStyles';
export default function getAndProcessVariantStyles(props) {
  var styles = {};
  var variantStyles = componentVariantsResolver(props);
  for (var _i = 0, variantStyles_1 = variantStyles; _i < variantStyles_1.length; _i++) {
    var variant = variantStyles_1[_i];
    var addStyles = variant;
    if (typeof variant === 'function') {
      addStyles = variant(props);
    }
    styles = merge(styles, addStyles);
  }
  return processStyles(props, styles);
}
