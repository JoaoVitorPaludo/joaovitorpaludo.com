import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Section = styled.section`
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: ${(props) => props.theme.secondary};
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

export const TimelineContainer = styled.div`
  position: relative;
`

export const TimelineLine = styled.div`
  position: absolute;
  left: 2rem; /* left-8 */
  top: 0;
  bottom: 0;
  width: 0.125rem; /* w-0.5 */
  background-color: ${(props) => props.theme.mainGreen};
`

export const ExperienceItem = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: flex-start;
  margin-bottom: 3rem;
  &:last-child {
    margin-bottom: 0;
  }
`

export const TimelineDot = styled.div`
  position: absolute;
  left: 1.5rem; /* left-6 */
  width: 1rem; /* w-4 */
  height: 1rem; /* h-4 */
  background-color: ${(props) => props.theme.mainGreen};
  border-radius: 9999px;
  border-width: 4px;
  border-style: solid;
  border-color: ${(props) => props.theme.background};
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`

export const ExperienceContent = styled.div`
  margin-left: 5rem;
  flex: 1;
`

export const ExperienceCard = styled.div`
  background-color: ${(props) => props.theme.background};
  border-radius: 0.5rem;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const Position = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme.foreground};
  margin-bottom: 0.25rem;
`

export const Company = styled.p`
  color: ${(props) => props.theme.mainGreen};
  font-weight: 600;
  display: flex;
  align-items: center;
`

export const Period = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.mutedForeground};
  margin-top: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`

export const Description = styled.p`
  color: ${(props) => props.theme.mutedForeground};
  margin-bottom: 1rem;
  line-height: 1.625;
`

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

export const TechItem = styled.span`
  padding: 0.25rem 0.75rem;
  background-color: #dcfce7;
  color: #15803d;
  font-size: 0.875rem;
  border-radius: 9999px;
  font-weight: 500;
  background-color: rgba(34, 197, 94, 0.1);
  color: ${(props) => props.theme.mainGreen};
`

export const CTAContainer = styled.div`
  text-align: center;
  margin-top: 3rem;
`

export const CTAButton = styled.div`
  display: inline-flex;
  align-items: center;
  color: ${(props) => props.theme.mainGreen};
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #16a34a;
  }
`
