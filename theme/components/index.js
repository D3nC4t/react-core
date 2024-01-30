import {
  merge
} from 'lodash';
import Alert from './Alert';
import Autocomplete from './Autocomplete';
import Avatar from './Avatar';
import AvatarGroup from './AvatarGroup';
import Backdrop from './Backdrop';
import Badge from './Badge';
import Box from './Box';
import Breadcrumbs from './Breadcrumbs';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Checkbox from './Checkbox';
import Chip from './Chip';
import CircularLoading from './CircularLoading';
import CircularProgress from './CircularProgress';
import Divider from './Divider';
import Drawer from './Drawer';
import Icon from './Icon';
import Input from './Input';
import Link from './Link';
import LocaleSelector from './LocaleSelector';
import Modal from './Modal';
import Paper from './Paper';
import Popover from './Popover';
import Portal from './Portal';
import ProgressBar from './ProgressBar';
import Radio from './Radio';
import Select from './Select';
import Slider from './Slider';
import Switch from './Switch';
import Table from './Table';
import TableBody from './TableBody';
import TableCell from './TableCell';
import TableHead from './TableHead';
import TableRow from './TableRow';
import TextArea from './TextArea';
import Tooltip from './Tooltip';
import Typography from './Typography';
var themeComponents = function(theme) {
  return merge({}, Alert, Autocomplete, Avatar(theme), AvatarGroup, Backdrop(theme), Badge, Box(theme), Breadcrumbs,
    Button(theme), ButtonGroup(theme), Checkbox, Chip, CircularLoading, CircularProgress, Divider, Drawer, Icon,
    Input, Link, LocaleSelector, Modal(theme), Paper(theme), Popover(theme), Portal, ProgressBar, Radio, Select,
    Slider, Switch, Table, TableBody, TableCell, TableHead, TableRow, TextArea, Tooltip, Typography);
};
export default themeComponents;
