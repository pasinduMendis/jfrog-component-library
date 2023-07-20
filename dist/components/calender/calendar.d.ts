import { AriaRangeCalendarProps, DateValue } from "react-aria";
import React, { CSSProperties } from "react";
type Props = AriaRangeCalendarProps<DateValue> & {
    btnBackground?: string;
    btnStyles?: CSSProperties;
    headreStyle?: CSSProperties;
    weekColor?: string;
    weekStyles?: CSSProperties;
    cellBackground?: string;
    cellBackgroundSelected?: string;
    cellStyles?: CSSProperties;
};
export type BtnProps = Props;
export default function RangeCalendar(props: Props): React.JSX.Element;
export {};
