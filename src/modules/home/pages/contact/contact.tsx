import {
  CheckCircle,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import * as S from './styles'
import { useContact } from './useContact'
import { AnimatePresence } from 'framer-motion'
import {
  containerVariants,
  itemVariants,
} from '../../../../commons/animations/variants'

export function Contact() {
  const { methods, handleSubmit, theme } = useContact()
  const { t } = useTranslation('contact')

  return (
    <S.Section id="contact">
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

            <S.Grid>
              <S.ContactInfo variants={itemVariants}>
                <S.SectionTitle>{t('info.title')}</S.SectionTitle>

                <S.ContactItems>
                  <S.ContactItem>
                    <S.IconWrapper>
                      <Mail color={theme.mainGreen} size={24} />
                    </S.IconWrapper>
                    <S.ContactDetails>
                      <S.ContactLabel>{t('info.email.label')}</S.ContactLabel>
                      <S.ContactLink href={`mailto:${t('personal.email')}`}>
                        {t('personal.email')}
                      </S.ContactLink>
                    </S.ContactDetails>
                  </S.ContactItem>

                  <S.ContactItem>
                    <S.IconWrapper>
                      <Phone color={theme.mainGreen} size={24} />
                    </S.IconWrapper>
                    <S.ContactDetails>
                      <S.ContactLabel>{t('info.phone.label')}</S.ContactLabel>
                      <S.ContactLink href={`tel:${t('personal.phone')}`}>
                        {t('personal.phone')}
                      </S.ContactLink>
                    </S.ContactDetails>
                  </S.ContactItem>

                  <S.ContactItem>
                    <S.IconWrapper>
                      <MapPin color={theme.mainGreen} size={24} />
                    </S.IconWrapper>
                    <S.ContactDetails>
                      <S.ContactLabel>
                        {t('info.location.label')}
                      </S.ContactLabel>
                      <S.ContactText>{t('personal.location')}</S.ContactText>
                    </S.ContactDetails>
                  </S.ContactItem>
                </S.ContactItems>

                <S.SocialSection>
                  <S.SocialTitle>{t('social.title')}</S.SocialTitle>
                  <S.SocialLinks>
                    <S.SocialLink
                      href={t('personal.github')}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={24} />
                    </S.SocialLink>
                    <S.SocialLink
                      href={t('personal.linkedin')}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={24} />
                    </S.SocialLink>
                  </S.SocialLinks>
                </S.SocialSection>

                <S.AvailabilityCard>
                  <S.AvailabilityTitle>
                    {t('availability.title')}
                  </S.AvailabilityTitle>
                  <S.AvailabilityText>
                    {t('availability.text')}
                  </S.AvailabilityText>
                </S.AvailabilityCard>
              </S.ContactInfo>

              <S.FormSection variants={itemVariants}>
                <S.SectionTitle>{t('form.title')}</S.SectionTitle>

                {methods.formState.isSubmitSuccessful ? (
                  <S.SuccessMessage>
                    <CheckCircle
                      color={theme.mainGreen}
                      size={48}
                      style={{ margin: '0 auto 1rem' }}
                    />
                    <S.SuccessTitle>{t('success.title')}</S.SuccessTitle>
                    <S.SuccessText>{t('success.text')}</S.SuccessText>
                  </S.SuccessMessage>
                ) : (
                  <S.Form onSubmit={methods.handleSubmit(handleSubmit)}>
                    <S.FormGrid>
                      <S.FormGroup>
                        <S.Label htmlFor="name">
                          {t('form.fields.name.label')} *
                        </S.Label>
                        <S.Input
                          type="text"
                          id="name"
                          {...methods.register('from_name')}
                          placeholder={t('form.fields.name.placeholder')}
                          hasError={!methods.formState.errors.from_name}
                        />
                      </S.FormGroup>

                      <S.FormGroup>
                        <S.Label htmlFor="email">
                          {t('form.fields.email.label')} *
                        </S.Label>
                        <S.Input
                          type="email"
                          id="email"
                          placeholder={t('form.fields.email.placeholder')}
                          {...methods.register('from_email')}
                          hasError={!methods.formState.errors.from_email}
                        />
                      </S.FormGroup>
                    </S.FormGrid>

                    <S.FormGroup>
                      <S.Label htmlFor="subject">
                        {t('form.fields.subject.label')} *
                      </S.Label>
                      <S.Input
                        type="text"
                        id="subject"
                        {...methods.register('subject')}
                        placeholder={t('form.fields.subject.placeholder')}
                        hasError={!methods.formState.errors.subject}
                      />
                    </S.FormGroup>

                    <S.FormGroup>
                      <S.Label htmlFor="message">
                        {t('form.fields.message.label')} *
                      </S.Label>
                      <S.TextArea
                        id="message"
                        {...methods.register('message')}
                        rows={6}
                        placeholder={t('form.fields.message.placeholder')}
                        hasError={!methods.formState.errors.message}
                      />
                    </S.FormGroup>

                    <S.SubmitButton type="submit">
                      {methods.formState.isSubmitting ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          {t('form.submit')}
                        </>
                      )}
                    </S.SubmitButton>
                  </S.Form>
                )}
              </S.FormSection>
            </S.Grid>
          </S.ContentWrapper>
        </AnimatePresence>
      </S.Container>
    </S.Section>
  )
}
