import { rest } from 'msw'
import { data } from '../types/data'

export const handlers = [
  //gets full board
  rest.get('/api/boards', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(data)
    )
  })
]