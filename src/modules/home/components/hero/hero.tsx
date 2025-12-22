import { ArrowDown, Download } from 'lucide-react'
import * as S from './styles'

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleResumeDownload = () => {}

  return (
    <S.Section>
      <S.Container>
        <S.ContentWrapper>
          <S.Title>
            Olá, eu sou
            <S.Highlight>João Vitor</S.Highlight>
          </S.Title>

          <S.Subtitle>Software Developer</S.Subtitle>

          <S.Bio>
            Apaixonado por criar soluções web inovadoras e escaláveis.
            Especialista em React, Node.js e arquitetura de software.
          </S.Bio>

          <S.Location>📍 Brasil</S.Location>

          <S.ButtonGroup>
            <S.PrimaryButton onClick={scrollToAbout}>
              Conhecer mais
            </S.PrimaryButton>
            <S.SecondaryButton onClick={handleResumeDownload}>
              <Download size={20} />
              Download CV
            </S.SecondaryButton>
          </S.ButtonGroup>

          <S.ScrollButton onClick={scrollToAbout}>
            <ArrowDown size={32} />
          </S.ScrollButton>
        </S.ContentWrapper>
      </S.Container>
    </S.Section>
  )
}
