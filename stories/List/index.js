import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import List from './List.component';
import Item from './Item';

const customTheme = {
  mode: 'light',
  list: {
    container: 'background-color: #ecd3ee',
    li: 'color: blue',
  },
};

storiesOf('List', module)
  .add('with default theme', () => (
    <List label="Todo List">
      <Item>
        {'Clean'}
      </Item>
      <Item>
        {'Sleep'}
      </Item>
      <Item>
        {'Work'}
      </Item>
    </List>
  ))
  .add('with custom theme', () => (
    <ThemeProvider theme={customTheme}>
      <List label="Pets">
        <Item>
          {'Dog'}
        </Item>
        <Item>
          {'Cat'}
        </Item>
        <Item>
          {'Turtle'}
        </Item>
      </List>
    </ThemeProvider>
  ));
