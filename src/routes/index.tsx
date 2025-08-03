import { Home } from '@/pages/Home'
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

const currencySchema = z.object({
  coin: z.string().default('bitcoin'),
  currency: z.string().default('czk'),
})

export const Route = createFileRoute('/')({
  component: Home,
  validateSearch: currencySchema,
})
