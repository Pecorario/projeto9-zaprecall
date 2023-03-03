import { useState } from 'react';

import iconPlay from '../../assets/seta_play.svg';
import iconTurn from '../../assets/seta_virar.svg';
import iconRight from '../../assets/icone_certo.png';
import iconWrong from '../../assets/icone_erro.png';
import iconAlmost from '../../assets/icone_quase.png';

import * as S from './style';

export default function Flashcard({
  content,
  answers,
  setAnswers,
  quantityOfCards,
  setIsFinished
}) {
  const [isStarted, setIsStarted] = useState(false);
  const [isTurned, setIsTurned] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [iconType, setIconType] = useState('');

  function handlePlay() {
    setIsStarted(true);
  }

  function handleTurn() {
    setIsTurned(true);
  }

  function handleAnswer(type) {
    const oldArr = [...answers];
    oldArr.push(type);

    if (oldArr.length === quantityOfCards) {
      setIsFinished(true);
    }

    setAnswers(oldArr);
    setIsAnswered(true);
    setIsStarted(false);
    setIconType(type);
  }

  return (
    <>
      {!isStarted && !isAnswered && (
        <S.Container data-test="flashcard">
          <S.Title data-test="flashcard-text">Pergunta {content.id}</S.Title>

          <button onClick={handlePlay} data-test="play-btn">
            <img src={iconPlay} alt="Jogar" />
          </button>
        </S.Container>
      )}

      {!isStarted && isAnswered && (
        <S.Container data-test="flashcard">
          <S.Title isAnswered type={iconType} data-test="flashcard-text">
            Pergunta {content.id}
          </S.Title>

          {iconType === 'right' && (
            <img src={iconRight} alt="Correto" data-test="zap-icon" />
          )}
          {iconType === 'almost' && (
            <img src={iconAlmost} alt="Quase" data-test="partial-icon" />
          )}
          {iconType === 'wrong' && (
            <img src={iconWrong} alt="Errado" data-test="no-icon" />
          )}
        </S.Container>
      )}

      {isStarted && !isTurned && (
        <S.Opened data-test="flashcard">
          <p data-test="flashcard-text">{content.question}</p>
          <S.ButtonTurn onClick={handleTurn} data-test="turn-btn">
            <img src={iconTurn} alt="Virar" />
          </S.ButtonTurn>
        </S.Opened>
      )}

      {isStarted && isTurned && (
        <S.Opened data-test="flashcard">
          <p data-test="flashcard-text">{content.answer}</p>
          <div>
            <S.ButtonAnswer
              type="wrong"
              onClick={() => handleAnswer('wrong')}
              data-test="no-btn"
            >
              Não lembrei
            </S.ButtonAnswer>

            <S.ButtonAnswer
              type="almost"
              onClick={() => handleAnswer('almost')}
              data-test="partial-btn"
            >
              Quase não lembrei
            </S.ButtonAnswer>

            <S.ButtonAnswer
              type="right"
              onClick={() => handleAnswer('right')}
              data-test="zap-btn"
            >
              Zap!
            </S.ButtonAnswer>
          </div>
        </S.Opened>
      )}
    </>
  );
}
