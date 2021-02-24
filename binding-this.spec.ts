function carDescription() {
  return `${this.fuelType} ${this.bodyType}`
}

describe('binding the context of this', () => {
  it('creates a new function with values from this', () => {
    // Arrange
    const petrolHatchback = carDescription.bind({
      fuelType: 'petrol',
      bodyType: 'hatch back',
    })
    // Act
    const result = petrolHatchback()
    // Assert
    expect(result).toEqual('petrol hatch back')
  })

  it('function can be bound multiple times', () => {
    // Arrange
    const petrolCar = carDescription.bind({
      fuelType: 'petrol',
      bodyType: 'hatch back',
    })

    const dieselPickup = carDescription.bind({
      fuelType: 'diesel',
      bodyType: 'pickup',
    })
    // Act
    const result1 = petrolCar()
    const result2 = dieselPickup()
    // Assert
    expect(result1).toEqual('petrol hatch back')
    expect(result2).toEqual('diesel pickup')
  })

  it('bound function can not be re bound', () => {
    // Arrange
    const electricTruck = carDescription.bind({
      fuelType: 'electric',
      bodyType: 'truck',
    })

    const twoStrokeMotorbike = electricTruck.bind({
      fuelType: 'two stroke',
      bodyType: 'motor bike',
    })
    // Act
    const result1 = electricTruck()
    const result2 = twoStrokeMotorbike()
    // Assert
    expect(result1).toEqual('electric truck')
    expect(result2).toEqual('electric truck')
  })
})
