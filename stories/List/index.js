import React from 'react';
import { ThemeProvider } from 'styled-components';

import List from './List.component';
import Item from './Item';

const customTheme = {
  mode: 'light',
  list: {
    container: 'background-color: #ecd3ee',
    ul: 'list-style-type: circle',
    li: 'color: blue',
  },
};

export default {
  title: 'List',
  component: List,
};

export const DefaultList = () => (
  <List label="Todo List">
    <Item>Clean</Item>
    <Item>Sleep</Item>
    <Item>Work</Item>
  </List>
);

DefaultList.storyName = 'with default theme';

export const CustomList = () => (
  <ThemeProvider theme={customTheme}>
    <List label="Pets">
      <Item>Dog</Item>
      <Item>Cat</Item>
      <Item>Turtle</Item>
    </List>
  </ThemeProvider>
);

CustomList.storyName = 'with custom theme';
