import * as S from './style';

import logoImg from '../../assets/logo.png';

export default function Welcome({ setIsGameStarted }) {
  function handleStartGame() {
    setIsGameStarted(true);
  }

  return (
    <S.Container>
      <img src={logoImg} alt="Logo" />

      <S.Title>ZapRecall</S.Title>

      <S.Button onClick={handleStartGame} data-test="start-btn">
        Iniciar Recall!
      </S.Button>
    </S.Container>
  );
}
