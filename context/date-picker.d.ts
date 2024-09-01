import React, { Context, ReactNode } from 'react';
import { DateTime } from 'luxon';
import { DurationLike } from 'luxon/src/duration';
export declare enum DatePickerViewType {
    day = "day",
    month = "month",
    year = "year"
}
export type DatePickerContextValue = {
    definePreviewDate: (date: DateTime | undefined, setSelected: boolean) => void;
    defineToDate?: (date: DateTime | undefined) => void;
    inView: DatePickerViewType;
    minus: (duration: DurationLike) => void;
    pickType: DatePickerViewType;
    plus: (duration: DurationLike) => void;
    previewDate: DateTime;
    selectDate: (date: DateTime | undefined) => void;
    selectedDate?: DateTime;
    toDate?: DateTime;
    switchView: (viewType: DatePickerViewType) => void;
    useRange?: boolean;
};
export type DatePickerContextProviderProps = {
    children: ReactNode;
    onChange: (date: DateTime | undefined) => void;
    onChangeToDate?: (date: DateTime | undefined) => void;
    pickType: DatePickerViewType;
    selectedDate?: DateTime;
    selectedToDate?: DateTime;
    useRange?: boolean;
};
export declare const DatePickerContext: Context<DatePickerContextValue>;
export declare const DatePickerContextProvider: ({ children, onChange, onChangeToDate, pickType, selectedDate, selectedToDate, useRange, }: DatePickerContextProviderProps) => React.JSX.Element;
