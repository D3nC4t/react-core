import {
  merge
} from 'lodash';
import Accordion from './Accordion';
import AccordionActions from './AccordionActions';
import AccordionDetails from './AccordionDetails';
import AccordionGroup from "./AccordionGroup";
import AccordionSummary from './AccordionSummary';
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
import ConfirmModal from './ConfirmModal';
import DateInput from './DateInput';
import DatePicker from './DatePicker';
import Divider from './Divider';
import Drawer from './Drawer';
import DynamicForm from './DynamicForm';
import GoogleChart from './GoogleChart';
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
import ScrollBox from './ScrollBox';
import Select from './Select';
import Slider from './Slider';
import StepperModal from './StepperModal';
import Switch from './Switch';
import Table from './Table';
import TableBody from './TableBody';
import TableCell from './TableCell';
import TableHead from './TableHead';
import TableRow from './TableRow';
import TextArea from './TextArea';
import TimePicker from './TimePicker';
import Tooltip from './Tooltip';
import Typography from './Typography';
var themeComponents = function(theme) {
  return merge({}, Accordion, AccordionActions, AccordionDetails, AccordionGroup, AccordionSummary, Alert,
    Autocomplete, Avatar(theme), AvatarGroup, Backdrop(theme), Badge, Box(theme), Breadcrumbs, Button(theme),
    ButtonGroup(theme), Checkbox, Chip, CircularLoading, CircularProgress, ConfirmModal, DateInput, DatePicker,
    Divider, Drawer, DynamicForm, GoogleChart, Icon, Input, Link, LocaleSelector, Modal(theme), Paper(theme),
    Popover(theme), Portal, ProgressBar, Radio, ScrollBox, Select, Slider, StepperModal, Switch, Table, TableBody,
    TableCell, TableHead, TableRow, TextArea, TimePicker, Tooltip, Typography);
};
export default themeComponents;
