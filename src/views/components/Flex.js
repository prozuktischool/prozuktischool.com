import styled from 'styled-components';
import {
  space,
  layout,
  position,
  color,
  flexbox,
  typography,
} from 'styled-system';

const Flex = styled.div`
  display: flex;
  ${space};
  ${layout};
  ${position};
  ${color};
  ${flexbox};
  ${typography};
`;

export default Flex;
