// everything is ok

__dirname

const xName = name

const promiseFn = () => {
  return Promise.resolve(1)
}

describe('something', () => {
  before(() => {

  })
  promiseFn()
  promiseFn().catch()
  promiseFn().catch(() => {})
})
