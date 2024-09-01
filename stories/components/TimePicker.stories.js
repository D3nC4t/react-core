import Box from '../../components/Box';
import TimePicker from '../../components/TimePicker';
import {
  TimePickerControls
} from '../controls';
Box.displayName = 'Box';
TimePicker.displayName = 'TimePicker';
var meta = {
  title: 'Core/Components/TimePicker',
  component: TimePicker,
  tags: ['autodocs'],
  argTypes: TimePickerControls,
};
export default meta;
export var Default = {
  args: {
    value: '01:33',
  },
};
