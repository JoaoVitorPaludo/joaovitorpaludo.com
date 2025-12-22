import { AnimatePresence } from 'framer-motion'

import { ArrowDown, Download } from 'lucide-react'
import {
  containerVariants,
  itemVariants,
} from '../../../../commons/animations/variants'
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
        <AnimatePresence>
          <S.ContentWrapper
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <S.Title variants={itemVariants}>
              Olá, eu sou
              <S.Highlight>João Vitor</S.Highlight>
            </S.Title>
            <S.Subtitle variants={itemVariants}>Software Developer</S.Subtitle>

            <S.Bio variants={itemVariants}>
              Apaixonado por criar soluções web inovadoras e escaláveis.
              Especialista em React, Node.js e arquitetura de software.
            </S.Bio>

            <S.Location variants={itemVariants}>📍 Brasil</S.Location>

            <S.ButtonGroup variants={itemVariants}>
              <S.PrimaryButton onClick={scrollToAbout}>
                Conhecer mais
              </S.PrimaryButton>
              <S.SecondaryButton onClick={handleResumeDownload}>
                <Download size={20} />
                Download CV
              </S.SecondaryButton>
            </S.ButtonGroup>

            <S.ScrollButton onClick={scrollToAbout} variants={itemVariants}>
              <ArrowDown size={32} />
            </S.ScrollButton>
          </S.ContentWrapper>
        </AnimatePresence>
      </S.Container>
    </S.Section>
  )
}
