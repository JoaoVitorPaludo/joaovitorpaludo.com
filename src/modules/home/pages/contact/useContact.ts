import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { ContactFormData, ContactSchema } from './schema'
import { useTheme } from '@emotion/react'
import emailjs from '@emailjs/browser'
import { env } from '../../../../config/env'
export const useContact = () => {
  const theme = useTheme()

  const methods = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
  })

  async function handleSubmit(data: ContactFormData) {
    try {
      await emailjs.send(
        env.VITE_EMAILJS_SERVICE_ID,
        env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        env.VITE_EMAILJS_PUBLIC_KEY,
      )
      methods.reset()
    } catch (error) {
      console.error('Error sending email:', error)
    }
  }

  return { methods, handleSubmit, theme }
}
