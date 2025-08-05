import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { useCoinPrice } from '@/hooks/useCoinPrice'
import { useSearch } from '@tanstack/react-router'
import { LoaderCircleIcon } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { BITCOIN } from '@/utils/const'

const SATS_IN_BTC = 100000000

export const CoinPrice = () => {
  const { currency } = useSearch({ from: '/' })
  const [amount, setAmount] = useState(1)

  const { data, isPending, isError, error } = useCoinPrice(BITCOIN, currency)

  if (isPending) return <LoaderCircleIcon />

  if (isError) return <div>{error.message}</div>

  const conversionRate = data[BITCOIN][currency]

  return (
    <>
      <div>{`Price of ${BITCOIN} is ${conversionRate} in ${currency}`}</div>
      <br />
      <Label htmlFor="bitcoin">Bitcoin</Label>
      <Input
        type="number"
        id="bitcoin"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
      />
      <br />
      <Label htmlFor="satoshi">Satoshi</Label>
      <Input
        type="number"
        id="satoshi"
        value={amount * SATS_IN_BTC}
        onChange={(e) => setAmount(parseFloat(e.target.value) / SATS_IN_BTC)}
      />
      <Label htmlFor={currency}>{currency}</Label>
      <br />
      <Input
        type="number"
        id={currency}
        value={amount * conversionRate}
        onChange={(e) => setAmount(parseFloat(e.target.value) / conversionRate)}
      />
    </>
  )
}
