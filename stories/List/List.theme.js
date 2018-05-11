import listStyles from './List.style';
import { styles as itemStyles } from './Item';

export default {
  mode: 'dark',
  list: {
    ...listStyles,
    ...itemStyles,
  },
};
