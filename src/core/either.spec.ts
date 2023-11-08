import { Either, error, success } from './either'

describe('Either', () => {
  function doSomething(shouldSuccess: boolean): Either<string, number> {
    if (shouldSuccess) {
      return success(10)
    } else {
      return error('error')
    }
  }

  // it('success result', () => {
  //   const success = success('success')

  //   expect(success.value).toEqual('success')
  // })

  // it('error result', () => {
  //   const error = error('error')

  //   expect(error.value).toEqual('error')
  // })

  it('success result', () => {
    const result = doSomething(true)

    expect(result.isSuccess()).toBe(true)
    expect(result.isError()).toBe(false)
  })

  it('error result', () => {
    const result = doSomething(false)

    expect(result.isError()).toBe(true)
    expect(result.isSuccess()).toBe(false)
  })
})
