import Box from '../../components/Box';
import LocaleSelector from '../../components/LocaleSelector';
import {
  getConfig,
  setConfig
} from '../../config';
import {
  LocaleSelectorControls
} from '../controls';
Box.displayName = 'Box';
LocaleSelector.displayName = 'LocaleSelector';
var meta = {
  title: 'Auth/Components/LocaleSelector',
  component: LocaleSelector,
  tags: ['locale-selector'],
  argTypes: LocaleSelectorControls,
};
export default meta;
export var Default = {
  args: {
    onChange: function(selected) {
      return setConfig('locale', selected, true);
    },
    usePopover: true,
    value: getConfig('locale'),
  },
};
