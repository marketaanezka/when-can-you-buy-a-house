import * as z from 'zod'

export const regions = [
  'Czechia',
  'Prague',
  'Brno',
  'Liberec',
  'Plzen',
  'CeskeBudejovice',
  'Pardubice',
  'HradecKralove',
  'Olomouc',
  'Zlin',
  'KarlovyVary',
  'Jihlava',
  'UstiNadLabem',
  'Ostrava',
] as const

export const RegionSchema = z.enum(regions)

export type Region = z.infer<typeof RegionSchema>
