import { Layout } from '@/components/Layout'
import { CoinPrice } from '@/features/CoinPrice/CoinPrice'
import { HouseCalculator } from '@/features/HouseCalculator/HouseCalculator'
import { useCoinPrice } from '@/hooks/useCoinPrice'
import { BITCOIN, Currencies } from '@/utils/const'
import { createFileRoute } from '@tanstack/react-router'
import { LoaderCircleIcon } from 'lucide-react'
import { z } from 'zod'

const currencySchema = z.object({
  currency: z.string().default('czk'),
})

const Home = () => {
  const { data, isPending, isError, error } = useCoinPrice(
    BITCOIN,
    Currencies.join(','),
  )

  if (isPending) return <LoaderCircleIcon />

  if (isError) return <div>{error.message}</div>

  return (
    <Layout>
      <CoinPrice rates={data} />
      <HouseCalculator rates={data} />
    </Layout>
  )
}

export const Route = createFileRoute('/')({
  component: Home,
  validateSearch: currencySchema,
})
