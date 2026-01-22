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
  max-width: 72rem;
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
  margin-bottom: 1rem;
`

export const Description = styled.p`
  color: ${(props) => props.theme.mutedForeground};
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
`

export const Grid = styled.div`
  display: grid;
  gap: 3rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ContactInfo = styled.div``

export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.foreground};
  margin-bottom: 2rem;
`

export const ContactItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const IconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: rgba(34, 197, 94, 0.1);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

export const ContactDetails = styled.div``

export const ContactLabel = styled.p`
  font-weight: 600;
  color: ${(props) => props.theme.foreground};
  margin-bottom: 0.25rem;
`

export const ContactLink = styled.a`
  color: ${(props) => props.theme.mutedForeground};
  transition: color 0.2s;

  &:hover {
    color: ${(props) => props.theme.mainGreen};
  }
`

export const ContactText = styled.p`
  color: ${(props) => props.theme.mutedForeground};
`

export const SocialSection = styled.div`
  margin-top: 1rem;
`

export const SocialTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${(props) => props.theme.foreground};
  margin-bottom: 1rem;
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`

export const SocialLink = styled.a`
  width: 3rem;
  height: 3rem;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(34, 197, 94, 0.1);

    svg {
      color: ${(props) => props.theme.mainGreen};
    }
  }

  svg {
    color: ${(props) => props.theme.mutedForeground};
  }
`

export const AvailabilityCard = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: rgba(34, 197, 94, 0.1);
  border-radius: 0.5rem;
  border-left: 4px solid ${(props) => props.theme.mainGreen};
`

export const AvailabilityTitle = styled.h4`
  font-weight: 600;
  color: ${(props) => props.theme.foreground};
  margin-bottom: 0.5rem;
`

export const AvailabilityText = styled.p`
  color: ${(props) => props.theme.foreground};
  opacity: 0.9;
`

export const FormSection = styled.div``

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const FormGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${(props) => props.theme.foreground};
  margin-bottom: 0.5rem;
`
interface InputProps {
  hasError?: boolean
}
export const Input = styled.input<InputProps>`
  width: 100%;
  padding: 1rem;
  border: 1px solid
    ${(props) => (props.hasError ? props.theme.mainGreen : props.theme.border)};
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.foreground};
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.mainGreen};
    box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
  }

  &::placeholder {
    color: ${(props) => props.theme.mutedForeground};
    opacity: 0.6;
  }
`

export const TextArea = styled.textarea<InputProps>`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid
    ${(props) => (props.hasError ? props.theme.mainGreen : props.theme.border)};
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.foreground};
  resize: none;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.mainGreen};
    box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
  }

  &::placeholder {
    color: ${(props) => props.theme.mutedForeground};
    opacity: 0.6;
  }
`

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.mainGreen};
  color: white;
  font-weight: 600;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #16a34a;
    transform: scale(1.02);
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  &:active {
    transform: scale(0.98);
  }
`

export const SuccessMessage = styled.div`
  background-color: rgba(34, 197, 94, 0.1);
  border: 1px solid ${(props) => props.theme.mainGreen};
  border-radius: 0.5rem;
  padding: 2rem;
  text-align: center;
  margin-top: 25%;
`

export const SuccessTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${(props) => props.theme.mainGreen};
  margin-bottom: 0.5rem;
`

export const SuccessText = styled.p`
  color: ${(props) => props.theme.mainGreen};
`
