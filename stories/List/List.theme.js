import listStyles from './List.style.js';
import { styles as itemStyles } from './Item/index.js';

export default {
  mode: 'dark',
  list: {
    ...listStyles,
    ...itemStyles,
  },
};
