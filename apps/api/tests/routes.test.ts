import { test, before, after } from 'node:test'
import assert from 'node:assert/strict'
import type { Server } from 'node:http'
import app from '../src/app.js'

let server: Server
let baseUrl: string

before(async () => {
  await new Promise<void>((resolve) => {
    server = app.listen(0, () => resolve())
  })
  const addr = server.address()
  if (addr === null || typeof addr === 'string') {
    throw new Error('Expected a TCP address from app.listen(0)')
  }
  baseUrl = `http://127.0.0.1:${addr.port}`
})

after(async () => {
  await new Promise<void>((resolve) => server.close(() => resolve()))
})

test('POST /api/v1/deposits returns 200 stub response', async () => {
  const res = await fetch(`${baseUrl}/api/v1/deposits`, { method: 'POST' })
  assert.equal(res.status, 200)
  const body = await res.json()
  assert.deepEqual(body, { success: true, data: 'STUB — POST /api/v1/deposits' })
})

test('POST /api/v1/exits/test-token returns 200 stub response', async () => {
  const res = await fetch(`${baseUrl}/api/v1/exits/test-token`, { method: 'POST' })
  assert.equal(res.status, 200)
  const body = await res.json()
  assert.deepEqual(body, { success: true, data: 'STUB — POST /api/v1/exits/:token_id' })
})

test('GET /api/v1/warehouse/test-warehouse/inventory returns 200 stub response', async () => {
  const res = await fetch(`${baseUrl}/api/v1/warehouse/test-warehouse/inventory`)
  assert.equal(res.status, 200)
  const body = await res.json()
  assert.deepEqual(body, { success: true, data: 'STUB — GET /api/v1/warehouse/:warehouse_id/inventory' })
})

test('GET /api/v1/farmers/test-farmer/tokens returns 200 stub response', async () => {
  const res = await fetch(`${baseUrl}/api/v1/farmers/test-farmer/tokens`)
  assert.equal(res.status, 200)
  const body = await res.json()
  assert.deepEqual(body, { success: true, data: 'STUB — GET /api/v1/farmers/:farmer_id/tokens' })
})

test('GET /api/v1/farmers/test-farmer/history returns 200 stub response', async () => {
  const res = await fetch(`${baseUrl}/api/v1/farmers/test-farmer/history`)
  assert.equal(res.status, 200)
  const body = await res.json()
  assert.deepEqual(body, { success: true, data: 'STUB — GET /api/v1/farmers/:farmer_id/history' })
})

test('POST /api/v1/transfers returns 200 stub response', async () => {
  const res = await fetch(`${baseUrl}/api/v1/transfers`, { method: 'POST' })
  assert.equal(res.status, 200)
  const body = await res.json()
  assert.deepEqual(body, { success: true, data: 'STUB — POST /api/v1/transfers' })
})

test('GET /api/v1/certificates/test-token returns 200 stub response', async () => {
  const res = await fetch(`${baseUrl}/api/v1/certificates/test-token`)
  assert.equal(res.status, 200)
  const body = await res.json()
  assert.deepEqual(body, { success: true, data: 'STUB — GET /api/v1/certificates/:token_id' })
})

test('GET /api/v1/lender/farmers/test-farmer/collateral returns 200 stub response', async () => {
  const res = await fetch(`${baseUrl}/api/v1/lender/farmers/test-farmer/collateral`)
  assert.equal(res.status, 200)
  const body = await res.json()
  assert.deepEqual(body, { success: true, data: 'STUB — GET /api/v1/lender/farmers/:farmer_id/collateral' })
})

test('GET /api/v1/lender/tokens/test-token/verify returns 200 stub response', async () => {
  const res = await fetch(`${baseUrl}/api/v1/lender/tokens/test-token/verify`)
  assert.equal(res.status, 200)
  const body = await res.json()
  assert.deepEqual(body, { success: true, data: 'STUB — GET /api/v1/lender/tokens/:token_id/verify' })
})

test('POST /api/v1/lender/tokens/test-token/lock returns 200 stub response', async () => {
  const res = await fetch(`${baseUrl}/api/v1/lender/tokens/test-token/lock`, { method: 'POST' })
  assert.equal(res.status, 200)
  const body = await res.json()
  assert.deepEqual(body, { success: true, data: 'STUB — POST /api/v1/lender/tokens/:token_id/lock' })
})
