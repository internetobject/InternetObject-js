import 'jest'
import InternetObject from '../../src'
import Tokenizer from '../../src/parser/tokenizer'
import { print } from '../../src/utils/index'
import ASTParser from '../../src/parser/ast-parser'

describe('Internet Object', () => {
  it('Structure', () => {
    const io = new InternetObject(String.raw`
      name, age, gender
      ---
      Spiderman, 25, M
      `)
    expect(io.data).toBeDefined()
    expect(io.header).toBeDefined()
    expect(io.schema).toBeDefined()
  })

  it('Types', () => {
    expect(new InternetObject('').data).toBe('')
    expect(new InternetObject('N').data).toBeNull()
    expect(new InternetObject('10').data).toBe(10)
  })
})
