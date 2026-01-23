import styled from '@emotion/styled'

export const Footer = styled.footer`
  background-color: ${(props) => props.theme.secondary};
  padding: 2rem 0;
  border-top: 1px solid ${(props) => props.theme.border};
`

export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }
`

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const SocialLink = styled.a`
  color: ${(props) => props.theme.mutedForeground};
  transition: color 0.3s;

  &:hover {
    color: ${(props) => props.theme.mainGreen};
  }
`

export const Text = styled.p`
  color: ${(props) => props.theme.mutedForeground};
  font-size: 0.875rem;
`

export const Link = styled.a`
  color: ${(props) => props.theme.mainGreen};
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`

export const BackToTopButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.mutedForeground};
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  transition: color 0.3s;

  &:hover {
    color: ${(props) => props.theme.foreground};
  }
`
