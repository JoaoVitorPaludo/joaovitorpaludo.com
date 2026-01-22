import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  VITE_EMAILJS_SERVICE_ID: z.string(),
  VITE_EMAILJS_TEMPLATE_ID: z.string(),
  VITE_EMAILJS_PUBLIC_KEY: z.string(),
})

const rawEnv = {
  NODE_ENV: import.meta.env.MODE,
  VITE_EMAILJS_SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  VITE_EMAILJS_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  VITE_EMAILJS_PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

export const env = envSchema.parse(rawEnv)
