import { AnimatePresence } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import {
  containerVariants,
  itemVariants,
} from '../../../../commons/animations/variants'
import * as S from './styles'

interface ExperienceItem {
  id: number
  position: string
  company: string
  period: string
  description: string
  technologies: string[]
}

export function Experience() {
  const { t } = useTranslation('experience')
  const experiences = t('items', { returnObjects: true }) as ExperienceItem[]

  return (
    <S.Section id="experience">
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
            </S.Header>

            <S.TimelineContainer>
              <S.TimelineLine />

              {experiences.map((exp) => (
                <S.ExperienceItem key={exp.id} variants={itemVariants}>
                  <S.TimelineDot />

                  <S.ExperienceContent>
                    <S.ExperienceCard>
                      <S.CardHeader>
                        <div>
                          <S.Position>{exp.position}</S.Position>
                          <S.Company>
                            <MapPin size={16} style={{ marginRight: '4px' }} />
                            {exp.company}
                          </S.Company>
                        </div>
                        <S.Period>
                          <Calendar size={16} style={{ marginRight: '4px' }} />
                          <span>{exp.period}</span>
                        </S.Period>
                      </S.CardHeader>

                      <S.Description>{exp.description}</S.Description>

                      <S.TechList>
                        {exp.technologies.map((tech, techIndex) => (
                          <S.TechItem key={techIndex}>{tech}</S.TechItem>
                        ))}
                      </S.TechList>
                    </S.ExperienceCard>
                  </S.ExperienceContent>
                </S.ExperienceItem>
              ))}
            </S.TimelineContainer>
          </S.ContentWrapper>
        </AnimatePresence>
      </S.Container>
    </S.Section>
  )
}
