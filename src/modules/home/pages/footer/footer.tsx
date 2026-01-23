import { ChevronUp, Github, Linkedin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import * as S from './styles'

export function Footer() {
  const { t } = useTranslation('footer')

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <S.Footer>
      <S.Container>
        <S.LeftSection>
          <S.Text>
            © {currentYear} João Vitor Paludo. {t('rights')}
          </S.Text>
          <S.Text>
            {t('developedBy')} <S.Link href="#">João Vitor Paludo</S.Link>
          </S.Text>
        </S.LeftSection>

        <S.RightSection>
          <S.SocialLinks>
            <S.SocialLink
              href="https://github.com/joaovitorpaludo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </S.SocialLink>
            <S.SocialLink
              href="https://linkedin.com/in/joaovitorpaludo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </S.SocialLink>
          </S.SocialLinks>

          <S.BackToTopButton onClick={scrollToTop}>
            <ChevronUp size={16} style={{ marginRight: '4px' }} />
            {t('backToTop')}
          </S.BackToTopButton>
        </S.RightSection>
      </S.Container>
    </S.Footer>
  )
}
