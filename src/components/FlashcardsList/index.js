import * as S from './style';

import Flashcard from '../Flashcard';

export default function FlashcardsList({
  cards,
  setAnswers,
  answers,
  isFinished,
  setIsFinished
}) {
  return (
    <S.Container isFinished={isFinished}>
      {cards.map(card => (
        <Flashcard
          key={card.id}
          content={card}
          answers={answers}
          setAnswers={setAnswers}
          setIsFinished={setIsFinished}
          quantityOfCards={cards.length}
        />
      ))}
    </S.Container>
  );
}
