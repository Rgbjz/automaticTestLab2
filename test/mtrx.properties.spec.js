import { expect } from 'chai'

describe('Mtrx — властивості', () => {
  it('rows і cols відображають розмір матриці', () => {
    const m = new Mtrx(3, 4)
    expect(m.rows).to.equal(3)
    expect(m.cols).to.equal(4)
  })

  it('det повертає визначник для квадратних матриць', () => {
    const m = new Mtrx([
      [1, 2],
      [3, 4]
    ])
    expect(m.det).to.equal(-2)
  })

  it('det повертає NaN для не квадратних матриць', () => {
    const m = new Mtrx(2, 3)
    expect(m.det).to.be.NaN
  })
})
