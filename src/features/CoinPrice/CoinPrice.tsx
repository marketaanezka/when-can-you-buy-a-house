import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { useSearch } from '@tanstack/react-router'
import { Label } from '@/components/ui/label'
import { BITCOIN } from '@/utils/const'
import { CryptoPriceResult } from '@/schemas/coinResult'

const SATS_IN_BTC = 100000000

type Props = {
  rates: CryptoPriceResult
}

export const CoinPrice = ({ rates }: Props) => {
  const { currency } = useSearch({ from: '/' })
  const [amount, setAmount] = useState(1)

  const conversionRate = rates[BITCOIN][currency]

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
