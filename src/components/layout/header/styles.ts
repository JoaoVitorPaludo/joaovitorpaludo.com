import styled from '@emotion/styled'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background-color: ${(props) => props.theme.background};
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${(props) => props.theme.border};
`

export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
  @media (min-width: 1536px) {
    max-width: 1536px;
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const LogoBox = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: #22c55e;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LogoText = styled.span`
  color: white;
  font-weight: 700;
  font-size: 1.125rem;
`

export const BrandName = styled.span`
  font-weight: 700;
  font-size: 1.25rem;
  color: ${(props) => props.theme.foreground};
`

export const DesktopNav = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`

export const NavButton = styled.button`
  color: ${(props) => props.theme.mutedForeground};
  background: none;
  border: none;
  cursor: pointer;
  transition: color 300ms;
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  &:hover {
    color: #22c55e;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 1.5rem;
  padding-left: 1.5rem;
  border-left: 1px solid ${(props) => props.theme.border};
`

export const SocialLink = styled.a`
  color: ${(props) => props.theme.mutedForeground};
  transition: color 300ms;
  display: flex;
  align-items: center;

  &:hover {
    color: #22c55e;
  }
`

export const ThemeToggle = styled.button`
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.foreground};
  border: none;
  cursor: pointer;
  transition: background-color 300ms;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
    /* background-color: ${(props) => props.theme.muted}; */
  }
`

export const MobileMenuButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (min-width: 768px) {
    display: none;
  }
`

export const MobileMenu = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-top: 1px solid ${(props) => props.theme.border};
  @media (min-width: 768px) {
    display: none;
  }
`

export const MobileMenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const MobileNavButton = styled.button`
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.mutedForeground};
  transition: color 300ms;
  font-size: 1rem;

  &:hover {
    color: #22c55e;
  }
`

export const MobileSocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${(props) => props.theme.border};
`
