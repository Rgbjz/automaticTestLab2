import { expect } from 'chai'
import Mtrx from 'mtrx'

describe('Mtrx — статичні методи', () => {
  it('Mtrx.zeros(n, m) створює матрицю з нулів', () => {
    const m = Mtrx.zeros(2, 3)
    expect(m).to.be.instanceOf(Mtrx)
    expect(m).to.deep.equal(
      new Mtrx([
        [0, 0, 0],
        [0, 0, 0]
      ])
    )
  })

  it('Mtrx.ones(n, m) створює матрицю з одиниць', () => {
    const m = Mtrx.ones(2, 2)
    expect(m[0][0]).to.equal(1)
    expect(m[1][1]).to.equal(1)
  })

  it('Mtrx.eye(n) створює одиничну матрицю', () => {
    const m = Mtrx.eye(3)
    expect(m[0][0]).to.equal(1)
    expect(m[0][1]).to.equal(0)
    expect(m[2][2]).to.equal(1)
  })

  it('Mtrx.diag([...]) створює діагональну матрицю', () => {
    const m = Mtrx.diag([2, 4, 6])
    expect(m[0][0]).to.equal(2)
    expect(m[1][1]).to.equal(4)
    expect(m[2][2]).to.equal(6)
  })
})
