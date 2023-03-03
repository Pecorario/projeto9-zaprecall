import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 36px;
  line-height: 45px;

  margin-top: 20px;
  margin-bottom: 30px;

  color: #fff;
`;

export const Button = styled.button`
  width: 256px;
  height: 54px;

  font-size: 18px;
  line-height: 22px;

  background: #ffff;
  color: #d70900;
  border-radius: 5px;
  border: 1px solid #d70900;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  transition: all 0.2s;

  :hover {
    cursor: pointer;
    filter: brightness(0.95);
  }
`;
