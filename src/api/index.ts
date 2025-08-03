import ky from 'ky'

export const api = ky.create({
  prefixUrl: 'api/api/v3/simple',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `x-cg-pro-api-key: ${import.meta.env.VITE_API_KEY}`,
  },
})
