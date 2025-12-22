import { Header } from '../../../components/layout/header/header'
import { Hero } from '../components/hero/hero'
import * as S from './styles'
export function Home() {
  return (
    <S.HomePageContainer>
      <Header />
      <main>
        <Hero />
      </main>
    </S.HomePageContainer>
  )
}
