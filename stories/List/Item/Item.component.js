import styled from 'styled-components';

import { connectTheme } from 'src';

const Item = styled.li`
  padding: 5px;
`;

export default connectTheme('list.li')(Item);
