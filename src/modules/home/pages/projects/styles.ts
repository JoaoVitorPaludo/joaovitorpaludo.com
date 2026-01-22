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

export const ContentWrapper = styled.div`
  max-width: 72rem; /* max-w-6xl */
  margin-left: auto;
  margin-right: auto;
`

export const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`

export const Title = styled.h2`
  font-size: 1.875rem; /* text-3xl */
  line-height: 2.25rem;
  font-weight: 700;
  color: ${(props) => props.theme.foreground};
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.25rem; /* md:text-4xl */
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
  margin-bottom: 1rem;
`

export const Description = styled.p`
  color: ${(props) => props.theme.mutedForeground};
  max-width: 42rem; /* max-w-2xl */
  margin-left: auto;
  margin-right: auto;
`

export const CarouselContainer = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 0.75rem; /* rounded-xl */
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); /* shadow-2xl */
  margin-bottom: 3rem; /* mb-12 */
`

export const CarouselGrid = styled.div`
  display: grid;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

export const ImageContainer = styled.div`
  position: relative;
  height: 16rem; /* h-64 */
  @media (min-width: 768px) {
    height: 24rem; /* md:h-96 */
  }
`

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.2);
`

export const ProjectDetails = styled.div`
  padding: 2rem; /* p-8 */
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const FeaturedTag = styled.span`
  color: ${(props) => props.theme.mainGreen};
  font-weight: 600;
  font-size: 0.875rem; /* text-sm */
  margin-bottom: 0.5rem;
  display: block;
  text-transform: uppercase;
`

export const ProjectTitle = styled.h3`
  font-size: 1.5rem; /* text-2xl */
  line-height: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.foreground};
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 1.875rem; /* md:text-3xl */
    line-height: 2.25rem;
  }
`

export const ProjectDescription = styled.p`
  color: ${(props) => props.theme.mutedForeground};
  line-height: 1.625;
  margin-bottom: 1.5rem;
`

export const TechList = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

export const TechItem = styled.span`
  padding: 0.25rem 0.75rem;
  background-color: rgba(34, 197, 94, 0.1);
  color: #15803d;
  color: ${(props) => props.theme.mainGreen};
  font-size: 0.875rem;
  border-radius: 9999px;
  font-weight: 500;
`

export const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const LinkButton = styled.a<{ variant?: 'primary' | 'outline' }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  text-decoration: none;

  ${(props) =>
    props.variant === 'outline'
      ? `
    border: 2px solid ${props.theme.mainGreen};
    color: ${props.theme.mainGreen};
    background-color: transparent;
    &:hover {
      background-color: ${props.theme.mainGreen};
      color: white;
    }
  `
      : `
    background-color: ${props.theme.foreground};
    color: ${props.theme.background};
    &:hover {
      opacity: 0.9;
    }
  `}
`

export const NavButton = styled.button<{ position: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.position === 'left' ? 'left: 1rem;' : 'right: 1rem;')}
  width: 3rem;
  height: 3rem;
  background-color: rgba(255, 255, 255, 0.8);
  background-color: ${(props) => props.theme.card}cc;

  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.foreground};

  &:hover {
    background-color: ${(props) => props.theme.card};
  }
`

export const IndicatorsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 3rem;
`

export const IndicatorDot = styled.button<{ active: boolean }>`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 9999px;
  transition: background-color 0.2s;
  border: none;
  cursor: pointer;
  background-color: ${(props) =>
    props.active ? props.theme.mainGreen : props.theme.mutedForeground};
  opacity: ${(props) => (props.active ? 1 : 0.3)};

  &:hover {
    opacity: ${(props) => (props.active ? 1 : 0.5)};
  }
`

export const ProjectsGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

export const GridItem = styled(motion.div)<{ active?: boolean }>`
  background-color: ${(props) => props.theme.card};
  border-radius: 0.5rem;
  box-shadow: 0 8px 20px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s;
  border: 2px solid
    ${(props) => (props.active ? props.theme.mainGreen : 'transparent')};
  &:hover {
    transform: scale(1.05);
  }
`

export const GridImageContainer = styled.div`
  height: 12rem;
  position: relative;
`

export const GridContent = styled.div`
  padding: 1.5rem;
`

export const GridTitle = styled.h4`
  font-weight: 700;
  color: ${(props) => props.theme.foreground};
  margin-bottom: 0.5rem;
`

export const GridDescription = styled.p`
  color: ${(props) => props.theme.mutedForeground};
  font-size: 0.875rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const GridLinks = styled.div`
  display: flex;
  gap: 0.5rem;

  a {
    color: ${(props) => props.theme.mutedForeground};
    transition: color 0.2s;
    &:hover {
      color: ${(props) => props.theme.mainGreen};
    }
  }
`

export const GithubLinkContainer = styled.div`
  text-align: center;
  margin-top: 3rem;
`
