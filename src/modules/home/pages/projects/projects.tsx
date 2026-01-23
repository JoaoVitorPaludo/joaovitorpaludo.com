import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'
import * as S from './styles'
import { useProjects } from './use-projects'
import { AnimatePresence } from 'framer-motion'
import {
  containerVariants,
  itemVariants,
} from '../../../../commons/animations/variants'

export function Projects() {
  const {
    projects,
    loading,
    currentProjectIndex,
    nextProject,
    prevProject,
    t,
    setCurrentProjectIndex,
  } = useProjects()

  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  if (loading) {
    return (
      <S.Section>
        <S.Container>
          <S.Header>
            <S.Title>{t('title')}</S.Title>
            <S.Divider />
            <p>Loading...</p>
          </S.Header>
        </S.Container>
      </S.Section>
    )
  }

  const handleImageError = (projectName: string) => {
    setImageErrors((prev) => ({ ...prev, [projectName]: true }))
  }

  const getProjectImage = (projectName: string) => {
    if (imageErrors[projectName]) {
      return `https://opengraph.githubassets.com/1/joaovitorpaludo/${projectName}`
    }
    return `https://raw.githubusercontent.com/joaovitorpaludo/${projectName}/master/.github/preview.jpg`
  }

  const currentProject = projects[currentProjectIndex]
  return (
    <S.Section id="projects">
      <S.Container>
        <AnimatePresence>
          <S.ContentWrapper
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            exit="exit"
          >
            <S.Header>
              <S.Title>{t('title')}</S.Title>
              <S.Divider />
              <S.Description>{t('description')}</S.Description>
            </S.Header>

            <S.CarouselContainer variants={itemVariants}>
              <S.CarouselGrid>
                <S.ImageContainer>
                  <S.ProjectImage
                    src={getProjectImage(currentProject.name)}
                    alt={currentProject.name}
                    onError={() => handleImageError(currentProject.name)}
                  />
                  <S.ImageOverlay />
                </S.ImageContainer>

                <S.ProjectDetails>
                  <div>
                    <S.FeaturedTag>
                      {t('featured')} #{currentProjectIndex + 1}
                    </S.FeaturedTag>
                    <S.ProjectTitle>{currentProject.name}</S.ProjectTitle>
                    <S.ProjectDescription>
                      {currentProject.description ||
                        'No description available.'}
                    </S.ProjectDescription>
                  </div>

                  <S.TechList>
                    {currentProject.topics.length > 0
                      ? currentProject.topics.map((tech) => (
                          <S.TechItem key={tech}>{tech}</S.TechItem>
                        ))
                      : currentProject.language && (
                          <S.TechItem>{currentProject.language}</S.TechItem>
                        )}
                  </S.TechList>

                  <S.LinksContainer>
                    <S.LinkButton
                      href={currentProject.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                      {t('code')}
                    </S.LinkButton>
                    {currentProject.homepage && (
                      <S.LinkButton
                        href={currentProject.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outline"
                      >
                        <ExternalLink size={20} />
                        {t('live')}
                      </S.LinkButton>
                    )}
                  </S.LinksContainer>
                </S.ProjectDetails>
              </S.CarouselGrid>

              <S.NavButton position="left" onClick={prevProject}>
                <ChevronLeft size={24} />
              </S.NavButton>
              <S.NavButton position="right" onClick={nextProject}>
                <ChevronRight size={24} />
              </S.NavButton>
            </S.CarouselContainer>

            <S.IndicatorsContainer>
              {projects.map((_, index) => (
                <S.IndicatorDot
                  key={index}
                  active={index === currentProjectIndex}
                  onClick={() => setCurrentProjectIndex(index)}
                />
              ))}
            </S.IndicatorsContainer>

            <S.ProjectsGrid>
              {projects.map((proj, index) => (
                <S.GridItem
                  key={proj.id}
                  active={index === currentProjectIndex}
                  onClick={() => setCurrentProjectIndex(index)}
                  whileHover={{ scale: 1.05 }}
                  variants={itemVariants}
                >
                  <S.GridImageContainer>
                    <S.ProjectImage
                      src={getProjectImage(proj.name)}
                      alt={proj.name}
                      onError={() => handleImageError(proj.name)}
                    />
                    <S.ImageOverlay />
                  </S.GridImageContainer>
                  <S.GridContent>
                    <S.GridTitle>{proj.name}</S.GridTitle>
                    <S.GridDescription>
                      {proj.description || 'No description available.'}
                    </S.GridDescription>
                    <S.GridLinks>
                      <a
                        href={proj.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={20} />
                      </a>
                      {proj.homepage && (
                        <a
                          href={proj.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </S.GridLinks>
                  </S.GridContent>
                </S.GridItem>
              ))}
            </S.ProjectsGrid>

            <S.GithubLinkContainer>
              <S.LinkButton
                href="https://github.com/joaovitorpaludo"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                style={{ display: 'inline-flex' }}
              >
                <Github size={20} />
                {t('viewAll')}
              </S.LinkButton>
            </S.GithubLinkContainer>
          </S.ContentWrapper>
        </AnimatePresence>
      </S.Container>
    </S.Section>
  )
}
