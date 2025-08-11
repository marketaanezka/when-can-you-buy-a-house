import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { CryptoPriceResult } from '@/schemas/coinResult'
import { Region } from '@/schemas/housePricing'
import { BITCOIN, HousePrice, Regions } from '@/utils/const'
import { useSearch } from '@tanstack/react-router'
import { useState } from 'react'

type Props = {
  rates: CryptoPriceResult
}

export const HouseCalculator = ({ rates }: Props) => {
  const { currency } = useSearch({ from: '/' })
  const [region, setRegion] = useState<Region>('Czechia')
  const conversionRate = rates[BITCOIN][currency]

  const housePriceInPrague = HousePrice[region] / conversionRate

  Object.entries(Regions).map((entry) => {
    console.log(entry)
  })

  return (
    <div>
      <span>house price in BTC is {housePriceInPrague}</span>
      <Select onValueChange={(value) => setRegion(value as Region)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Region" />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(Regions).map((entry) => (
            <SelectItem value={entry[0]}>{entry[1]}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
