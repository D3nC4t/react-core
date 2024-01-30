import createTheme from '../styled/createTheme';
import useThemeWithDefault from '../hooks/useThemeWithDefault';
var defaultTheme = createTheme();
export default function useTheme(theme) {
  if (theme === void 0) {
    theme = defaultTheme;
  }
  return useThemeWithDefault(theme);
}
