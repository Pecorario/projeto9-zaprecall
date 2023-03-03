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
        <S.Container>
          <S.Title>Pergunta {content.id}</S.Title>

          <button onClick={handlePlay}>
            <img src={iconPlay} alt="Jogar" />
          </button>
        </S.Container>
      )}

      {!isStarted && isAnswered && (
        <S.Container>
          <S.Title isAnswered type={iconType}>
            Pergunta {content.id}
          </S.Title>

          {iconType === 'right' && <img src={iconRight} alt="Correto" />}
          {iconType === 'almost' && <img src={iconAlmost} alt="Quase" />}
          {iconType === 'wrong' && <img src={iconWrong} alt="Errado" />}
        </S.Container>
      )}

      {isStarted && !isTurned && (
        <S.Opened>
          <p>{content.question}</p>
          <S.ButtonTurn onClick={handleTurn}>
            <img src={iconTurn} alt="Virar" />
          </S.ButtonTurn>
        </S.Opened>
      )}

      {isStarted && isTurned && (
        <S.Opened>
          <p>{content.answer}</p>
          <div>
            <S.ButtonAnswer type="wrong" onClick={() => handleAnswer('wrong')}>
              Não lembrei
            </S.ButtonAnswer>

            <S.ButtonAnswer
              type="almost"
              onClick={() => handleAnswer('almost')}
            >
              Quase não lembrei
            </S.ButtonAnswer>

            <S.ButtonAnswer type="right" onClick={() => handleAnswer('right')}>
              Zap!
            </S.ButtonAnswer>
          </div>
        </S.Opened>
      )}
    </>
  );
}
