import z from 'zod'

export const ContactSchema = z.object({
  from_name: z.string().min(2, 'Name must be at least 2 characters long'),
  subject: z.string().min(2, 'Subject must be at least 2 characters long'),
  from_email: z.email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
})
export type ContactFormData = z.infer<typeof ContactSchema>
