import {
  useDebugValue
} from 'react';
import createTheme from '../styled/createTheme';
import isObjectEmpty from '../../utils/isObjectEmpty';
import useBaseTheme from '../hooks/useBaseTheme';
export default function useTheme(defaultTheme) {
  var contextTheme = useBaseTheme();
  var theme = !contextTheme || isObjectEmpty(contextTheme) ?
    defaultTheme !== null && defaultTheme !== void 0 ? defaultTheme : createTheme() :
    contextTheme;
  if (process.env.NODE_ENV !== 'production') {
    useDebugValue(theme);
  }
  return theme;
}
