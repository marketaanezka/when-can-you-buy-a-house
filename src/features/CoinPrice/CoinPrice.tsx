import { useCoinPrice } from '@/hooks/useCoinPrice'
import { BITCOIN, Currencies } from '@/utils/const'
import { useSearch } from '@tanstack/react-router'

export const CoinPrice = () => {
  const searchParameters = useSearch({ from: '/' })

  console.log({ searchParameters })
  const currencies = Currencies.join(',')
  const { data, error } = useCoinPrice(
    searchParameters.coin,
    searchParameters.currency,
  )

  console.log('data', data)
  console.log('error', error)

  return <div>RENDERED</div>
}
