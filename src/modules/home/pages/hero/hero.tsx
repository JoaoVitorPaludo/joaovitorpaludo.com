import { AnimatePresence } from 'framer-motion'

import { ArrowDown, Download, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import {
  containerVariants,
  itemVariants,
} from '../../../../commons/animations/variants'
import * as S from './styles'
export function Hero() {
  const { t } = useTranslation('hero')

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
              {t('title')}
              <S.Highlight>{t('titleHighlight')}</S.Highlight>
            </S.Title>
            <S.Subtitle variants={itemVariants}>{t('subtitle')}</S.Subtitle>

            <S.Bio variants={itemVariants}>{t('bio')}</S.Bio>

            <S.Location variants={itemVariants}>
              <MapPin size={17} />
              {t('location')}
            </S.Location>

            <S.ButtonGroup variants={itemVariants}>
              <S.PrimaryButton onClick={scrollToAbout}>
                {t('primaryButton')}
              </S.PrimaryButton>
              <S.SecondaryButton onClick={handleResumeDownload}>
                <Download size={20} />
                {t('secondaryButton')}
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
