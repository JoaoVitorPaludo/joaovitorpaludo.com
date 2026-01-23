export const contact = {
  title: 'Get in Touch',
  description:
    "Let's work together! Contact me to discuss projects, opportunities or just to have a chat.",
  info: {
    title: 'Contact Information',
    email: {
      label: 'Email',
    },
    phone: {
      label: 'Phone',
    },
    location: {
      label: 'Location',
    },
  },
  social: {
    title: 'Social Media',
  },
  availability: {
    title: 'Availability',
    text: 'Available for new projects and freelance opportunities. I respond within 24 hours.',
  },
  form: {
    title: 'Send a Message',
    fields: {
      name: {
        label: 'Name',
        placeholder: 'Your name',
      },
      email: {
        label: 'Email',
        placeholder: 'your@email.com',
      },
      subject: {
        label: 'Subject',
        placeholder: 'Contact subject',
      },
      message: {
        label: 'Message',
        placeholder: 'Describe your project or message...',
      },
    },
    submit: 'Send Message',
    sending: 'Sending...',
  },
  success: {
    title: 'Message Sent!',
    text: 'Thank you for your contact. I will get back to you soon!',
  },
  personal: {
    email: 'joaovpaludo@gmail.com',
    phone: '+55 (54) 99962-8219',
    location: 'Paraí, RS, Brazil',
    github: 'https://github.com/joaovitorpaludo',
    linkedin: 'https://www.linkedin.com/in/jo%C3%A3ovitorpaludo/',
  },
} as const
