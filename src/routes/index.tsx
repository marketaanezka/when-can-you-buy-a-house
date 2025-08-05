import { Layout } from '@/components/Layout'
import { CoinPrice } from '@/features/CoinPrice/CoinPrice'
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

const currencySchema = z.object({
  currency: z.string().default('czk'),
})

const Home = () => {
  return (
    <Layout>
      <CoinPrice />
    </Layout>
  )
}

export const Route = createFileRoute('/')({
  component: Home,
  validateSearch: currencySchema,
})
