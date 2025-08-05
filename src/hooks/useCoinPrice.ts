import { useQuery } from '@tanstack/react-query'

import { api } from '@/api/index'
import { coinPriceKeys } from '@/api/queryKeys'
import { CryptoPriceSchema } from '@/schemas/coinResult'

const getCoinPrice = async (coin: string, currency: string) => {
  const response = await api.get(
    `price?ids=${coin}&vs_currencies=${currency}&include_last_updated_at=true`,
  )
  // const response = await api.get(`coins/list`)
  const data = await response.json()

  return CryptoPriceSchema.parse(data)
}

export const useCoinPrice = (coin: string, currency: string) => {
  return useQuery({
    queryKey: [coinPriceKeys],
    queryFn: () => getCoinPrice(coin, currency),
  })
}
