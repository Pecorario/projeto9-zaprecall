import iconRight from '../../assets/icone_certo.png';
import iconWrong from '../../assets/icone_erro.png';
import iconAlmost from '../../assets/icone_quase.png';
import iconParty from '../../assets/party.png';
import iconSad from '../../assets/sad.png';

import * as S from './style';

export default function Footer({ answers, quantityOfCards, isFinished }) {
  function getMessage() {
    if (answers.includes('wrong')) {
      return (
        <>
          <S.ContainerFinishTitle>
            <img src={iconSad} alt="Triste" />
            <S.FinishTitle>Putz...</S.FinishTitle>
          </S.ContainerFinishTitle>
          <S.Text>Ainda faltam alguns... Mas não desanime!</S.Text>
        </>
      );
    }

    return (
      <>
        <S.ContainerFinishTitle>
          <img src={iconParty} alt="Festa!" />
          <S.FinishTitle>Parabéns</S.FinishTitle>
        </S.ContainerFinishTitle>

        <S.Text>Você não esqueceu de nenhum flashcard!</S.Text>
      </>
    );
  }

  return (
    <S.Container isFinished={isFinished} data-test="footer">
      {isFinished && (
        <S.FinishContainer data-test="finish-text">
          {getMessage()}
        </S.FinishContainer>
      )}

      <S.Text>
        {answers.length}/{quantityOfCards} CONCLUÍDOS
      </S.Text>

      <S.AnswersContainer>
        {answers.map((item, idx) => {
          if (item === 'right') {
            return (
              <img
                key={idx}
                src={iconRight}
                alt="Correto"
                data-test="zap-icon"
              />
            );
          } else if (item === 'almost') {
            return (
              <img
                key={idx}
                src={iconAlmost}
                alt="Quase"
                data-test="partial-icon"
              />
            );
          } else {
            return (
              <img key={idx} src={iconWrong} alt="Errado" data-test="no-icon" />
            );
          }
        })}
      </S.AnswersContainer>
    </S.Container>
  );
}
