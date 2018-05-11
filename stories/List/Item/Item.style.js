import { css } from 'styled-components';
import theme from 'styled-theming';

const color = theme('mode', {
  dark: '#fff',
  light: '#000',
});

export default {
  li: css`
    color: ${color};
  `,
};
