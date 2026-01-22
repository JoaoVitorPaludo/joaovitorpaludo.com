import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { ContactFormData, ContactSchema } from './schema'
export const useContact = () => {
  const methods = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
  })

  async function handleSubmit(data: ContactFormData) {
    console.log('Form submitted:', data)
  }

  return { methods, handleSubmit }
}
