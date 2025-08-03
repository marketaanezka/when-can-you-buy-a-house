export const movieKeys = {
  searchResult: ['movies'] as const,
  movieDetail: (id: number) => ['movie', id] as const,
} as const

export const coinPriceKeys = {
  priceResult: ['coinPrice'] as const,
} as const
