import {
  CheckCircle,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react'
import { useState } from 'react'
import * as S from './styles'
import { useContact } from './useContact'

const mockData = {
  personal: {
    email: 'joao@example.com',
    phone: '+55 (11) 99999-9999',
    location: 'São Paulo, Brasil',
    github: 'https://github.com/joaovitorpaludo',
    linkedin: 'https://linkedin.com/in/joaovitorpaludo',
  },
}

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export function Contact() {
  const { methods, handleSubmit } = useContact()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <S.Section id="contact">
      <S.Container>
        <S.ContentWrapper>
          <S.Header>
            <S.Title>Entre em Contato</S.Title>
            <S.Divider />
            <S.Description>
              Vamos trabalhar juntos! Entre em contato para discutir projetos,
              oportunidades ou apenas para trocar uma ideia.
            </S.Description>
          </S.Header>

          <S.Grid>
            {/* Contact Info */}
            <S.ContactInfo>
              <S.SectionTitle>Informações de Contato</S.SectionTitle>

              <S.ContactItems>
                <S.ContactItem>
                  <S.IconWrapper>
                    <Mail color="#22c55e" size={24} />
                  </S.IconWrapper>
                  <S.ContactDetails>
                    <S.ContactLabel>Email</S.ContactLabel>
                    <S.ContactLink href={`mailto:${mockData.personal.email}`}>
                      {mockData.personal.email}
                    </S.ContactLink>
                  </S.ContactDetails>
                </S.ContactItem>

                <S.ContactItem>
                  <S.IconWrapper>
                    <Phone color="#22c55e" size={24} />
                  </S.IconWrapper>
                  <S.ContactDetails>
                    <S.ContactLabel>Telefone</S.ContactLabel>
                    <S.ContactLink href={`tel:${mockData.personal.phone}`}>
                      {mockData.personal.phone}
                    </S.ContactLink>
                  </S.ContactDetails>
                </S.ContactItem>

                <S.ContactItem>
                  <S.IconWrapper>
                    <MapPin color="#22c55e" size={24} />
                  </S.IconWrapper>
                  <S.ContactDetails>
                    <S.ContactLabel>Localização</S.ContactLabel>
                    <S.ContactText>{mockData.personal.location}</S.ContactText>
                  </S.ContactDetails>
                </S.ContactItem>
              </S.ContactItems>

              <S.SocialSection>
                <S.SocialTitle>Redes Sociais</S.SocialTitle>
                <S.SocialLinks>
                  <S.SocialLink
                    href={mockData.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={24} />
                  </S.SocialLink>
                  <S.SocialLink
                    href={mockData.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={24} />
                  </S.SocialLink>
                </S.SocialLinks>
              </S.SocialSection>

              <S.AvailabilityCard>
                <S.AvailabilityTitle>Disponibilidade</S.AvailabilityTitle>
                <S.AvailabilityText>
                  Disponível para novos projetos e oportunidades freelance.
                  Respondo em até 24 horas.
                </S.AvailabilityText>
              </S.AvailabilityCard>
            </S.ContactInfo>

            {/* Contact Form */}
            <S.FormSection>
              <S.SectionTitle>Envie uma Mensagem</S.SectionTitle>

              {isSubmitted ? (
                <S.SuccessMessage>
                  <CheckCircle
                    color="#22c55e"
                    size={48}
                    style={{ margin: '0 auto 1rem' }}
                  />
                  <S.SuccessTitle>Mensagem Enviada!</S.SuccessTitle>
                  <S.SuccessText>
                    Obrigado pelo contato. Retornarei em breve!
                  </S.SuccessText>
                </S.SuccessMessage>
              ) : (
                <S.Form onSubmit={methods.handleSubmit(handleSubmit)}>
                  <S.FormGrid>
                    <S.FormGroup>
                      <S.Label htmlFor="name">Nome *</S.Label>
                      <S.Input
                        type="text"
                        id="name"
                        {...methods.register('name')}
                        required
                        placeholder="Seu nome"
                      />
                    </S.FormGroup>

                    <S.FormGroup>
                      <S.Label htmlFor="email">Email *</S.Label>
                      <S.Input
                        type="email"
                        id="email"
                        placeholder="seu@email.com"
                        {...methods.register('email')}
                      />
                    </S.FormGroup>
                  </S.FormGrid>

                  <S.FormGroup>
                    <S.Label htmlFor="subject">Assunto *</S.Label>
                    <S.Input
                      type="text"
                      id="subject"
                      {...methods.register('assubject')}
                      placeholder="Assunto do contato"
                    />
                  </S.FormGroup>

                  <S.FormGroup>
                    <S.Label htmlFor="message">Mensagem *</S.Label>
                    <S.TextArea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Descreva seu projeto ou mensagem..."
                    />
                  </S.FormGroup>

                  <S.SubmitButton type="submit">
                    <Send size={20} />
                    Enviar Mensagem
                  </S.SubmitButton>
                </S.Form>
              )}
            </S.FormSection>
          </S.Grid>
        </S.ContentWrapper>
      </S.Container>
    </S.Section>
  )
}
