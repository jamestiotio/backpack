/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component } from 'react';
import type { ElementType } from 'react';
import type { BpkCalendarGridProps } from '../../bpk-component-calendar';
type Props = Partial<BpkCalendarGridProps> & {
    minDate: Date;
    maxDate: Date;
    DateComponent: ElementType;
    formatDateFull: (date: Date) => Date | string;
    month: Date;
    weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    formatMonth: (date: Date) => Date | string;
    focusedDate?: Date | null;
};
type State = {
    months: Date[];
    monthItemHeights: number[];
    outerHeight: number;
};
declare class BpkScrollableCalendarGridList extends Component<Props, State> {
    outerDiv: HTMLDivElement | null;
    static defaultProps: {
        className: null;
        focusedDate: null;
    };
    constructor(props: Props);
    componentDidMount: () => void;
    componentWillUnmount: () => void;
    getHtmlElement: () => {} | null;
    getItemSize: (index: number) => number;
    setComponentHeight: () => void;
    rowRenderer: ({ index, style }: {
        index: number;
        style: {};
    }) => JSX.Element;
    calculateOffsetInPixels: (numberOfMonths: number) => number;
    render(): JSX.Element;
}
export default BpkScrollableCalendarGridList;
