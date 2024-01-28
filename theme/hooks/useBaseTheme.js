import { useContext, useDebugValue } from 'react';
import { ThemeContext } from '@emotion/react';
export default function useBaseTheme() {
    var theme = useContext(ThemeContext);
    if (process.env.NODE_ENV !== 'production') {
        useDebugValue(theme);
    }
    return theme;
}
