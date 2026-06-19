import { Router } from 'express'

export const lenderRouter = Router()

lenderRouter.get('/farmers/:farmer_id/collateral', (req, res) => {
  res.status(200).json({ success: true, data: 'STUB — GET /api/v1/lender/farmers/:farmer_id/collateral' })
})

lenderRouter.get('/tokens/:token_id/verify', (req, res) => {
  res.status(200).json({ success: true, data: 'STUB — GET /api/v1/lender/tokens/:token_id/verify' })
})

lenderRouter.post('/tokens/:token_id/lock', (req, res) => {
  res.status(200).json({ success: true, data: 'STUB — POST /api/v1/lender/tokens/:token_id/lock' })
})
