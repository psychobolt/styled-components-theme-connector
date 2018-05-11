// @flow
import * as React from 'react';
import styled, { isStyledComponent, type StyledComponentClass } from 'styled-components';
import { get } from 'lodash';

export default (selector: string = '') => (component: StyledComponentClass | React.ComponentType<any>) =>
  (isStyledComponent(component) ? component.extend : styled(component))`
    ${({ theme }) => get(theme, `_defaultTheme.${selector}`, '')}
  `.extend`
    ${({ theme }) => get(theme, `_customTheme.${selector}`, '')}
  `;
