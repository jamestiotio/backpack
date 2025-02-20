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

/*
This is the component for the tooltip that is displayed to users.

The actual component that developers create (i.e. the default export from this package) is BpkTooltipPortal.
*/

import type { ReactNode } from 'react';

import { TransitionInitialMount, cssModules } from '../../bpk-react-utils';

import STYLES from './BpkTooltip.module.scss';
import { ARROW_ID, TOOLTIP_TYPES } from './constants';

const getClassName = cssModules(STYLES);

export type TooltipProps = {
  id: string;
  children: ReactNode | string;
  type?: (typeof TOOLTIP_TYPES)[keyof typeof TOOLTIP_TYPES];
  padded?: boolean;
  className?: string | null;
};

const BpkTooltip = ({
  children,
  className = null,
  id,
  padded = true,
  type = TOOLTIP_TYPES.light,
  ...rest
}: TooltipProps) => {
  const classNames = getClassName('bpk-tooltip', className);

  const innerClassNames = getClassName(
    'bpk-tooltip__inner',
    type === TOOLTIP_TYPES.dark && 'bpk-tooltip__inner--dark',
    padded && 'bpk-tooltip__inner--padded',
  );

  const arrowClassNames = getClassName(
    'bpk-tooltip__arrow',
    type === TOOLTIP_TYPES.dark && 'bpk-tooltip__arrow--dark',
  );

  return (
    <TransitionInitialMount
      appearClassName={getClassName('bpk-tooltip--appear')}
      appearActiveClassName={getClassName('bpk-tooltip--appear-active')}
      transitionTimeout={200}
    >
      {/* $FlowFixMe[cannot-spread-inexact] - inexact rest. See 'decisions/flowfixme.md'. */}
      <section
        id={id}
        tabIndex={-1}
        role="dialog"
        className={classNames}
        {...rest}
      >
        <span
          id={ARROW_ID}
          data-popper-arrow
          className={arrowClassNames}
          role="presentation"
        />
        <div className={innerClassNames}>{children}</div>
      </section>
    </TransitionInitialMount>
  );
};

export default BpkTooltip;
