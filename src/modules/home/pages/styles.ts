import styled from '@emotion/styled'

export const HomePageContainer = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.background};
  transition:
    background-color 300ms,
    color 300ms;
`
