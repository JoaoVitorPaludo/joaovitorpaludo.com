import { Header } from '../../../components/layout/header/header'
import { About } from './about/about'
import { Contact } from './contact/contact'
import { Experience } from './experience/experience'
import { Hero } from './hero/hero'
import { Projects } from './projects/projects'
import * as S from './styles'
export function Home() {
  return (
    <S.HomePageContainer>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </S.HomePageContainer>
  )
}
