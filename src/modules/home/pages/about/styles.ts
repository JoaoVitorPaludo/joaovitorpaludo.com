import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Section = styled.section`
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: ${(props) => props.theme.background};
`

export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

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

export const ContentWrapper = styled(motion.div)`
  max-width: 56rem; /* max-w-4xl */
  margin-left: auto;
  margin-right: auto;
`

export const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`

export const Title = styled.h2`
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  color: ${(props) => props.theme.foreground};
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`

export const Divider = styled.div`
  width: 5rem;
  height: 0.25rem;
  background-color: ${(props) => props.theme.mainGreen};
  margin-left: auto;
  margin-right: auto;
  border-radius: 9999px;
`

export const Grid = styled.div`
  display: grid;
  gap: 3rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

export const ImageContainer = styled.div`
  position: relative;
`

export const ImageWrapper = styled.div`
  position: relative;
  z-index: 10;
`

export const ProfileImage = styled.img`
  width: 100%;
  height: 24rem;
  object-fit: cover;
  border-radius: 0.5rem;
  box-shadow: 0 25px 50px -12px rgba(34, 197, 94, 0.25);
`

export const Content = styled.div``

export const Subtitle = styled.h3`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.foreground};
  margin-bottom: 1.5rem;
`

export const Text = styled.p`
  color: ${(props) => props.theme.mutedForeground};
  margin-bottom: 1.5rem;
  line-height: 1.625;
`

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const IconBox = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: ${(props) =>
    props.theme.background === '#ffffff' ? '#dcfce7' : 'rgba(20, 83, 45, 0.3)'};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.mainGreen};
`

export const StatInfo = styled.div``

export const StatValue = styled.p`
  font-weight: 600;
  color: ${(props) => props.theme.foreground};
`

export const StatLabel = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.mutedForeground};
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ContactItem = styled.p`
  color: ${(props) => props.theme.mutedForeground};
`

export const ContactLabel = styled.span`
  font-weight: 600;
  color: ${(props) => props.theme.foreground};
`
