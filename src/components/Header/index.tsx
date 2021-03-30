import logoImg from '../../assets/logo.svg';
import candidatoImg from '../../assets/samuel.jpg';

import { Container, Logo, CandidatoContainer, Avatar } from './styles';

export function Header() {
  return (
    <Container>
      <Logo>
        <a href="https://www.objective.com.br/" target="_blank" rel="noopener noreferrer">
          <img src={logoImg} alt="Objective Solutions" />
        </a>
      </Logo>

      <CandidatoContainer>
        <p>
          <a href="https://github.com/samuelfilho87?tab=repositories" target="_blank" rel="noopener noreferrer">
            <strong>Samuel Damasceno Filho</strong> Teste de Front-end
          </a>
        </p>

        <Avatar>
          <a href="https://github.com/samuelfilho87?tab=repositories" target="_blank" rel="noopener noreferrer">
            <img src={candidatoImg} alt="Candidato Samuel Damasceno Filho" />
          </a>
        </Avatar>
      </CandidatoContainer>
    </Container>
  )
}