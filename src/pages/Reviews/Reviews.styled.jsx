import styled from 'styled-components';

export const RevU = styled.ul``;
export const RevLi = styled.li`
  background-color: ${({ index }) =>
    index % 2 === 0 ? 'white' : 'rgb(209, 207, 207)'};
  border-radius: 0.2rem;
  padding: 4px 8px;
`;
