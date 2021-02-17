import styled from 'styled-components';
import { connectTheme } from 'styled-components-theme-connector';

const Item = styled.li`
  padding: 5px;
  text-decoration: ${({ decorate }) => (decorate ? 'line-through' : 'initial')};
`;

export default connectTheme('list.li')(Item);
