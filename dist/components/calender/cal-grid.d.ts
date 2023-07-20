import { AriaCalendarGridProps } from "react-aria";
import React, { CSSProperties } from "react";
type GridStyle = {
    weekStyles?: CSSProperties;
    cellStyles?: CSSProperties;
    weekColor?: string;
    cellBackground?: string;
    cellBackgroundSelected?: string;
};
type Props = AriaCalendarGridProps & {
    gridStyles?: GridStyle;
    state: any;
};
export default function CalendarGrid({ state, ...props }: Props): React.JSX.Element;
export {};
