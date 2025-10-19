import { expect } from 'chai'
import Mtrx from 'mtrx'

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

  it('додає або видаляє рядки (changeRows)', () => {
    const initialRows = m.length
    m.changeRows(1, 9)
    expect(m.length).to.equal(initialRows + 1)
    expect(m[m.length - 1][0]).to.equal(9)
    expect(m[m.length - 1][1]).to.equal(9)

    m.changeRows(-1)
    expect(m.length).to.equal(initialRows)
  })

  it('додає або видаляє стовпці (changeCols)', () => {
    const initialCols = m[0].length
    m.changeCols(1, 7)
    expect(m[0].length).to.equal(initialCols + 1)
    expect(m[0][m[0].length - 1]).to.equal(7)
    expect(m[1][m[1].length - 1]).to.equal(7)

    m.changeCols(-1)
    expect(m[0].length).to.equal(initialCols)
  })

  it('повертає транспоновану матрицю (T)', () => {
    const t = m.T()
    expect(t[0][1]).to.equal(3)
    expect(t[1][0]).to.equal(2)
  })
})
