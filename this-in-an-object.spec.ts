const item = {
  id: '123',
  name: 'shirt',
  colour: 'blue',
  price: 10,
  amount: 3,
  description: function () {
    return `${this.amount} ${this.colour} ${this.name}(s) @ ${this.price} USD`
  },
}

describe('this in an object', () => {
  it('can reference property values from within the object', () => {
    // Arrange
    // Act
    const result = item.description()
    // Assert
    expect(result).toEqual('3 blue shirt(s) @ 10 USD')
  })
})
