import React from 'react';
import { withDefaultTheme, connectTheme } from 'styled-components-theme-connector';

import theme from './List.theme';

const Container = connectTheme('list.container')('div');

const List = connectTheme('list.ul')(({ className, label, children }) => (
  <Container>
    <p>
      {label}
    </p>
    <ul className={className}>
      {children}
    </ul>
  </Container>
));

export default withDefaultTheme(theme, 'list')(List);
