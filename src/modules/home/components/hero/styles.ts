import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
`

const bounce = keyframes`
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8,0,1,1);
  }
  50% {
    transform: none;
    animation-timing-function: cubic-bezier(0,0,0.2,1);
  }
`

export const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
  background: ${(props) => props.theme.backgroundGradient};
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

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
  max-width: 56rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

export const StatusDot = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  background-color: #ffffff;
  border-radius: 9999px;
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`

export const Title = styled.h1`
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.foreground};
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3.75rem;
    line-height: 1;
  }
`

export const Highlight = styled.span`
  display: block;
  color: #22c55e;
  margin-top: 0.5rem;
`

export const Subtitle = styled.h2`
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: ${(props) => props.theme.mutedForeground};
  margin-bottom: 1.5rem;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`

export const Bio = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: ${(props) => props.theme.mutedForeground};
  margin-bottom: 2rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.625;
`

export const Location = styled.p`
  color: #22c55e;
  margin-bottom: 3rem;
  font-weight: 500;

  @media (prefers-color-scheme: dark) {
    color: #4ade80;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`

export const ButtonBase = styled.button`
  padding: 0.75rem 2rem;
  font-weight: 600;
  border-radius: 0.5rem;
  transition: all 300ms;
  transform: scale(1);
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`

export const PrimaryButton = styled(ButtonBase)`
  background-color: #22c55e;
  color: #ffffff;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid #22c55e;
  height: 45px;

  &:hover {
    background-color: #16a34a;
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`

export const SecondaryButton = styled(ButtonBase)`
  border: 1px solid #22c55e;
  color: #22c55e;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 45px;
  &:hover {
    background-color: #22c55e;
    color: #ffffff;
  }
`

export const ScrollButton = styled.button`
  animation: ${bounce} 1s infinite;
  color: #22c55e;
  transition: color 150ms;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #16a34a;
  }
`
