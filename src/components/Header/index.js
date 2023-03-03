import * as S from './style';

import logoImg from '../../assets/logo.png';

export default function Header() {
  return (
    <S.Container>
      <img src={logoImg} alt="Logo" />
      <h1>ZapRecall</h1>
    </S.Container>
  );
}
