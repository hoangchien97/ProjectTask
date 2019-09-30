import axios from 'axios'

const API_URL = process.env.API_URL || 'http://localhost:3000/api/v1'

export const HTTP = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  }
})