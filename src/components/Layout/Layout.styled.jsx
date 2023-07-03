import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Cont = styled.div`
  max-width: 480px;
  padding: 0 20px;
  margin: 0 auto;
  overflow: hidden;

  @media screen and (min-width: 480px) {
    padding: 0 32px;
    max-width: 768px;
  }

  @media screen and (min-width: 769px) {
    max-width: 1280px;
  }
`;
export const Header = styled.header`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;
export const LinkList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;
export const LinkItem = styled.li``;
export const LinkPage = styled(NavLink)`
  padding: 4px 8px;
  border-radius: 0.4rem;
  text-transform: uppercase;
  font-size: 20px;
  text-decoration: none;
  color: black;
  transition: color 300ms cubic-bezier(0.075, 0.82, 0.165, 1),
    background-color 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover,
  :focus {
    color: orange;
  }
  &.active {
    color: white;
    background-color: orangered;
    transition: color 300ms cubic-bezier(0.075, 0.82, 0.165, 1),
      background-color 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;
