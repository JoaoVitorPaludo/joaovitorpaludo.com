import {
  Github,
  Languages,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
} from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppStore } from '../../../store/use-app-store/use-app-store'
import * as S from './styles'
import logo from '../../../assets/base-logo.png'
const mockData = {
  personal: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'email@example.com',
  },
}

export function Header() {
  const { setTheme, theme, toggleLanguage } = useAppStore()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation('header')

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <S.HeaderContainer>
      <S.Container>
        <S.Nav>
          <S.LogoContainer>
            <S.LogoBox>
              {/* <S.LogoText>JP</S.LogoText> */}
              <img src={logo} alt="Logo" />
            </S.LogoBox>
            {/* <S.BrandName>João Vitor</S.BrandName> */}
          </S.LogoContainer>

          <S.DesktopNav>
            <S.NavButton onClick={() => scrollToSection('about')}>
              {t('about')}
            </S.NavButton>
            <S.NavButton onClick={() => scrollToSection('experience')}>
              {t('experience')}
            </S.NavButton>
            <S.NavButton onClick={() => scrollToSection('projects')}>
              {t('projects')}
            </S.NavButton>
            <S.NavButton onClick={() => scrollToSection('skills')}>
              {t('skills')}
            </S.NavButton>
            <S.NavButton onClick={() => scrollToSection('contact')}>
              {t('contact')}
            </S.NavButton>

            <S.SocialLinks>
              <S.SocialLink
                href={mockData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </S.SocialLink>
              <S.SocialLink
                href={mockData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </S.SocialLink>
              <S.SocialLink href={`mailto:${mockData.personal.email}`}>
                <Mail size={20} />
              </S.SocialLink>
            </S.SocialLinks>

            <S.ActionsContainer>
              <S.ThemeToggle onClick={toggleLanguage}>
                <Languages size={20} />
              </S.ThemeToggle>

              <S.ThemeToggle
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </S.ThemeToggle>
            </S.ActionsContainer>
          </S.DesktopNav>

          <S.MobileMenuButtonContainer>
            <S.ThemeToggle onClick={toggleLanguage}>
              <Languages size={20} />
            </S.ThemeToggle>
            <S.ThemeToggle
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </S.ThemeToggle>
            <S.ThemeToggle onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </S.ThemeToggle>
          </S.MobileMenuButtonContainer>
        </S.Nav>

        {isMenuOpen && (
          <S.MobileMenu>
            <S.MobileMenuList>
              <S.MobileNavButton onClick={() => scrollToSection('about')}>
                About
              </S.MobileNavButton>
              <S.MobileNavButton onClick={() => scrollToSection('experience')}>
                Experience
              </S.MobileNavButton>
              <S.MobileNavButton onClick={() => scrollToSection('projects')}>
                Projects
              </S.MobileNavButton>
              <S.MobileNavButton onClick={() => scrollToSection('skills')}>
                Skills
              </S.MobileNavButton>
              <S.MobileNavButton onClick={() => scrollToSection('contact')}>
                Contact
              </S.MobileNavButton>

              <S.MobileSocialLinks>
                <S.SocialLink
                  href={mockData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </S.SocialLink>
                <S.SocialLink
                  href={mockData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                </S.SocialLink>
                <S.SocialLink href={`mailto:${mockData.personal.email}`}>
                  <Mail size={20} />
                </S.SocialLink>
              </S.MobileSocialLinks>
            </S.MobileMenuList>
          </S.MobileMenu>
        )}
      </S.Container>
    </S.HeaderContainer>
  )
}
