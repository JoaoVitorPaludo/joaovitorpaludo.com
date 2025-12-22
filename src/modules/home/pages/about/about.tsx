import { AnimatePresence, motion } from 'framer-motion'
import { Code, Coffee, Heart } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import {
  containerVariants,
  itemVariants,
} from '../../../../commons/animations/variants'
import * as S from './styles'

export function About() {
  const { t } = useTranslation('about')

  return (
    <S.Section id="about">
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

            <S.Grid>
              <S.ImageContainer>
                <S.ImageWrapper>
                  <S.ProfileImage
                    src="https://github.com/joaovitorpaludo.png"
                    alt="João Vitor Paludo"
                  />
                </S.ImageWrapper>
              </S.ImageContainer>

              <S.Content>
                <S.Subtitle>{t('subtitle')}</S.Subtitle>

                <S.Text>{t('bio')}</S.Text>

                <S.Text>{t('experience')}</S.Text>

                <S.StatsGrid>
                  <motion.div variants={itemVariants}>
                    <S.StatItem>
                      <S.IconBox>
                        <Code size={24} />
                      </S.IconBox>
                      <S.StatInfo>
                        <S.StatValue>5+</S.StatValue>
                        <S.StatLabel>{t('funFacts.projects')}</S.StatLabel>
                      </S.StatInfo>
                    </S.StatItem>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <S.StatItem>
                      <S.IconBox>
                        <Coffee size={24} />
                      </S.IconBox>
                      <S.StatInfo>
                        <S.StatValue>∞</S.StatValue>
                        <S.StatLabel>{t('funFacts.coffees')}</S.StatLabel>
                      </S.StatInfo>
                    </S.StatItem>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <S.StatItem>
                      <S.IconBox>
                        <Heart size={24} />
                      </S.IconBox>
                      <S.StatInfo>
                        <S.StatValue>100%</S.StatValue>
                        <S.StatLabel>{t('funFacts.passion')}</S.StatLabel>
                      </S.StatInfo>
                    </S.StatItem>
                  </motion.div>
                </S.StatsGrid>

                <S.ContactInfo>
                  <motion.div variants={itemVariants}>
                    <S.ContactItem>
                      <S.ContactLabel>{t('contact.email')}: </S.ContactLabel>
                      joaovpaludo@gmail.com
                    </S.ContactItem>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <S.ContactItem>
                      <S.ContactLabel>{t('contact.phone')}: </S.ContactLabel>
                      +55 54 99962-8219
                    </S.ContactItem>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <S.ContactItem>
                      <S.ContactLabel>{t('contact.location')}: </S.ContactLabel>
                      Brasil
                    </S.ContactItem>
                  </motion.div>
                </S.ContactInfo>
              </S.Content>
            </S.Grid>
          </S.ContentWrapper>
        </AnimatePresence>
      </S.Container>
    </S.Section>
  )
}
