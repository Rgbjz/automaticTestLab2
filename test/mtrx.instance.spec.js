import { expect } from 'chai'

describe('Mtrx — методи екземпляра', () => {
  let m

  beforeEach(() => {
    m = new Mtrx([
      [1, 2],
      [3, 4]
    ])
  })

  it('повертає значення елемента за індексами (get)', () => {
    expect(m.get(0, 1)).to.equal(2)
    expect(m.get(1, 0)).to.equal(3)
  })

  it('змінює значення елемента за індексами (set)', () => {
    m.set(1, 1, 10)
    expect(m.get(1, 1)).to.equal(10)
  })

  it('додає або видаляє рядки (changeRows)', () => {})

  it('додає або видаляє стовпці (changeCols)', () => {})

  it('повертає транспоновану матрицю (T)', () => {})
})
