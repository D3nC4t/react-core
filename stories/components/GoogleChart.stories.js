import GoogleChart from '../../components/GoogleChart';
import Typography from '../../components/Typography';
import {
  GoogleChartControls
} from '../controls';
GoogleChart.displayName = 'GoogleChart';
Typography.displayName = 'Typography';
var meta = {
  title: 'Core/Components/GoogleChart',
  component: GoogleChart,
  tags: ['autodocs', 'google', 'chart', 'visualization', 'data', 'analytics'],
  argTypes: GoogleChartControls,
};
export default meta;
export var Default = {
  args: {
    data: [
      ["Year", "Expenses", "Profit"],
      ["1994", 1234, 321],
      ["2001", 1357, 531],
      ["2008", 741, 1470],
      ["2014", 951, 1593],
    ],
  },
};
