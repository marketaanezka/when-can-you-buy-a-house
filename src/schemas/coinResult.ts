import * as z from 'zod'

export const CryptoPriceSchema = z.record(z.string(), z.record(z.number()))

export type CryptoPriceResult = z.infer<typeof CryptoPriceSchema>
