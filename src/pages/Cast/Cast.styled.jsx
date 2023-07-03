import styled from 'styled-components';

export const ActorList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Actor = styled.li`
  display: flex;
  gap: 10px;
`;

export const ActorPoster = styled.img`
  flex-basis: 7%;
  width: 100%;
  overflow: hidden;
  height: 100%;
  object-fit: cover;
`;
