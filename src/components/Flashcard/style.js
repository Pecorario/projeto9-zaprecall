import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  min-height: 65px;
  max-height: 65px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 15px;

  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);

  button:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  line-height: 19px;
  font-weight: 700;

  ${({ isAnswered }) => isAnswered && 'text-decoration: line-through'};
  ${({ type }) => type === 'right' && 'color: #2FBE34'};
  ${({ type }) => type === 'almost' && 'color: #FF922E'};
  ${({ type }) => type === 'wrong' && 'color: #FF3030'};
`;

export const Opened = styled.div`
  width: 300px;
  height: fit-content;

  display: flex;
  flex-direction: column;

  background: #ffffd4;

  p {
    flex: 1;
    padding: 18px 15px 0 15px;
  }

  div {
    display: flex;
    justify-content: space-between;
    padding: 12px 12px 12px 12px;
  }
`;

export const ButtonTurn = styled.button`
  align-self: flex-end;
  padding: 6px 15px;

  img {
    width: 30px;
  }

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const ButtonAnswer = styled.button`
  width: 85px;
  height: 37px;
  padding: 0 10px;

  border-radius: 5px;

  font-size: 12px;
  line-height: 14px;

  color: #fff;

  ${({ type }) => type === 'right' && 'background: #2FBE34'};
  ${({ type }) => type === 'almost' && 'background: #FF922E'};
  ${({ type }) => type === 'wrong' && 'background: #FF3030'};

  :hover {
    cursor: pointer;
    filter: brightness(0.95);
  }
`;
