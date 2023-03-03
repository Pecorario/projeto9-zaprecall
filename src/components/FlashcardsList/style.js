import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  padding-bottom: ${({ isFinished }) => (isFinished ? '175px' : '75px')};
  overflow: auto;
`;
