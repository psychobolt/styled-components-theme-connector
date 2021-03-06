// @flow
import * as React from 'react';
import styled from 'styled-components';
import { get } from 'lodash';

export default ((selector = '') => component => styled(component)`
  ${({ theme }) => get(theme, `_defaultTheme.${selector}`, '')}
  ${({ theme }) => get(theme, `_customTheme.${selector}`, '')}
`: (selector: string) => (component: React.ComponentType<any>) => React.AbstractComponent<any>);
