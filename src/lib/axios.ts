import axios from 'axios'

export const api = axios.create({
  // apenas /api pois o backend da aplicação e o front estão na mesma URL
  baseURL: '/api',
})
