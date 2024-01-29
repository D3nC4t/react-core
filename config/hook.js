import { useContext } from 'react';
import ConfigContext from './context';
var useConfig = function () {
    return useContext(ConfigContext);
};
export default useConfig;
