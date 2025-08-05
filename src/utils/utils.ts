export const formatNumberToString = (num: number, currency: string): string => {
  return new Intl.NumberFormat('cs-CZ', {
    style: 'currency',
    currency,
  }).format(num)
}
