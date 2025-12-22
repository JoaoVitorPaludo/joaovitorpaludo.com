import { Header } from '../../../components/layout/header/header'
import { About } from './about/about'
import { Hero } from './hero/hero'
import * as S from './styles'
export function Home() {
  return (
    <S.HomePageContainer>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </S.HomePageContainer>
  )
}
