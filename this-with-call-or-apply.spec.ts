const sound = {
  make: function (name: string, punctuation: string) {
    return `${name} emotes with a ${this.level} ${this.sound}${punctuation}`
  },
}

describe('this with call', () => {
  it('alows specifying the context of this and passsing in arguments', () => {
    // Arrange
    const softLaugh = {
      level: 'soft',
      sound: 'laugh',
    }
    // Act
    const result = sound.make.call(softLaugh, 'Jayd', '.')
    // Assert
    expect(result).toEqual('Jayd emotes with a soft laugh.')
  })
})

describe('this with apply', () => {
  it('allows specifying the conext of this and passing in arguments', () => {
    // Arrange
    const loudGiggle = {
      level: 'loud',
      sound: 'giggle',
    }
    // Act
    const result = sound.make.apply(loudGiggle, ['Sally', '!'])
    // Assert
    expect(result).toEqual('Sally emotes with a loud giggle!')
  })
})
