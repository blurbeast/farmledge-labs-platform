import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  formatWeight,
  formatBags,
  formatCommodity,
} from '../../src/utils/formatters.js'

// ============================================================================
// formatWeight Tests
// ============================================================================

test('formatWeight: formats large numbers with thousands separator', () => {
  const result = formatWeight(4000)
  assert.equal(result, '4,000 kg')
})

test('formatWeight: formats small numbers without comma', () => {
  const result = formatWeight(500)
  assert.equal(result, '500 kg')
})

// ============================================================================
// formatBags Tests
// ============================================================================

test('formatBags: formats multiple bags with correct grammar', () => {
  const result = formatBags(40, 100)
  assert.equal(result, '40 × 100kg bags')
})

test('formatBags: uses singular "bag" for single bag', () => {
  const result = formatBags(1, 50)
  assert.equal(result, '1 × 50kg bag')
})

// ============================================================================
// formatCommodity Tests
// ============================================================================

test('formatCommodity: capitalizes simple commodity names', () => {
  const result = formatCommodity('maize')
  assert.equal(result, 'Maize')
})

test('formatCommodity: handles underscore-separated variants with reversal', () => {
  const result = formatCommodity('MAIZE_WHITE')
  assert.equal(result, 'White Maize')
})
