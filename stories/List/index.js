import React from 'react';
import { ThemeProvider, css } from 'styled-components';
import { ThemeContextProvider, connectTheme } from 'styled-components-theme-connector';

import List from './List.component';
import Item from './Item';

export default {
  title: 'List',
  component: List,
};

export const DefaultList = () => (
  <List label="Todo List">
    <Item decorate>Clean</Item>
    <Item>Sleep</Item>
    <Item decorate>Work</Item>
  </List>
);

DefaultList.storyName = 'with default theme';

const Pin = connectTheme('list.pin')('div');

const customTheme = {
  mode: 'light',
  list: {
    container: 'background-color: #ecd3ee',
    ul: 'ist-style-type: circle',
    li: css`
      color: blue;
      ${({ theme, decorate }) => (theme?.context?.mode === 'inverted' ? `text-decoration: ${decorate ? 'initial' : 'line-through'}` : undefined)};
    `,
    pin: css`
      background-color: yellow;
      &::before {
        content: '${({ theme }) => (theme?.context?.mode === 'inverted' ? '🖤' : '❤️')}';
      }
    `,
  },
};

export const CustomList = () => (
  <ThemeProvider theme={customTheme}>
    <List label="Pets">
      <ThemeContextProvider mode="inverted">
        <Item decorate><Pin>Dog</Pin></Item>
        <Item>Cat</Item>
      </ThemeContextProvider>
      <Item decorate>Turtle</Item>
      <Item><Pin>Starfish</Pin></Item>
    </List>
  </ThemeProvider>
);

CustomList.storyName = 'with custom theme';
