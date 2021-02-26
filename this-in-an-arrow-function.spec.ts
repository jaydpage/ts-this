const iGetMyThisFromContext = () => {
  return this
}

describe('this in an arrow function', () => {
  it('the context of this is passed from the caller', () => {
    // Arrange
    // Act
    const result = iGetMyThisFromContext()
    // Assert
    expect(result).toEqual(this)
  })

  it('values on the caller this are accessible', () => {
    // Arrange
    const value = 'bar'
    this.foo = value
    // Act
    const result = iGetMyThisFromContext()
    // Assert
    expect(result.foo).toEqual(value)
  })

  it('maintains the same context of this versus a standard function which has a new context of this', () => {
    // Arrange
    this.payload = { id: '123' }

    const getPayload = function () {
      return this.payload
    }

    const getActualPayload = () => {
      return this.payload
    }
    // Act
    const payload = getPayload()
    const actualPayload = getActualPayload()
    // Assert
    expect(payload).toBeUndefined()
    expect(actualPayload).toEqual(this.payload)
  })
})
