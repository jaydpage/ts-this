const iGetMyThisFromContext = () => {
  return this
}

// TODO: example where arrow function are useful for maintaining the context of this
describe('this in an arrow function', () => {
  it('the context of this is passed is passed from the caller', () => {
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
})
