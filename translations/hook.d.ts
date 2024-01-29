import { Dispatch, SetStateAction } from 'react';
import { IntlShape } from 'react-intl';
import { I18nLocale } from '../types';
declare const useTranslations: (module: string, forceLocale?: I18nLocale) => [IntlShape, boolean, Dispatch<SetStateAction<IntlShape>>];
export default useTranslations;
