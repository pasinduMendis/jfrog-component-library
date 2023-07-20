import React from "react";
import { AriaCalendarCellProps } from "react-aria";
type Props = AriaCalendarCellProps & {
    state: any;
    key: string;
    cellBackgroundNonSelected?: string;
    cellBackgroundSelected?: string;
    cellStyles?: object;
};
export default function CalendarCell({ state, date, ...props }: Props): React.JSX.Element;
export {};
