import { css } from 'styled-components';
import theme from 'styled-theming';

const backgroundColor = theme('mode', {
  light: '#fff',
  dark: '#000',
});

const color = theme('mode', {
  dark: '#fff',
  light: '#000',
});

export default {
  container: css`
    background-color: ${backgroundColor};

    > p {
      font-size: 24pt;
      color: ${color};
      margin: 0;
      padding: 5px;
      border-bottom: 1px ${color} solid;
    }
  `,
};
