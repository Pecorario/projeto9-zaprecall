import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: ${({ isFinished }) => (isFinished ? '171px' : '70px')};

  background: #ffffff;

  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 22px;

  text-align: center;
`;

export const AnswersContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
`;

export const FinishContainer = styled.div`
  width: 100%;
  padding: 0 60px;
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerFinishTitle = styled.div`
  display: flex;
  gap: 12px;

  margin-bottom: 14px;

  img {
    width: 23px;
    height: 23px;
  }
`;

export const FinishTitle = styled(Text)`
  font-weight: 700;
`;
