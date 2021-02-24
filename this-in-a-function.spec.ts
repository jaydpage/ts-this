export function undefinedThis() {
  return this
}

export function canNotBeAssigned() {
  this.foo = 'stuff'
}

describe('this in a function in strict mode', () => {
  it('is undefined by default', () => {
    // Arrange
    // Act
    const result = undefinedThis()
    // Assert
    expect(result).toBeUndefined()
  })

  it('can not be assigned at runtime', () => {
    // Arrange
    // Act
    try {
      canNotBeAssigned()
    } catch (e) {
      // Assert
      expect(e).toEqual(new TypeError(`Cannot set property 'foo' of undefined`))
    }
  })
})
