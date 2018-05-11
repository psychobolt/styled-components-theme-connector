import React from 'react';

import { withDefaultTheme, connectTheme } from 'src';

import theme from './List.theme';

const Container = connectTheme('list.container')('div');

const List = connectTheme('list.ul')(({ className, ...props }) => (
  <Container>
    <p>{props.label}</p>
    <ul>{props.children}</ul>
  </Container>
));

export default withDefaultTheme(theme, 'list')(List);
