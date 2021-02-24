export class Person {
  updatedDate: Date
  previousValue: string

  constructor(private idNumber: string) {}

  get identityNumber() {
    return this.idNumber
  }
  get priorValue() {
    return this.previousValue
  }

  updateIdentityNumber(idNumber: string) {
    this.storeAuditData()
    this.idNumber = idNumber
  }

  private storeAuditData() {
    this.updatedDate = new Date()
    this.previousValue = this.idNumber
  }
}

describe('this in a class', () => {
  it('can be used to refer to fields on the class', () => {
    // Arrange
    const idNumber = '1234567890'
    // Act
    const person = new Person(idNumber)
    // Assert
    expect(person.identityNumber).toEqual(idNumber)
  })

  it('can be used to refer to functions on the class', () => {
    // Arrange
    const idNumber1 = '1234567890'
    const idNumber2 = '456'
    const person = new Person(idNumber1)
    // Act
    person.updateIdentityNumber(idNumber2)
    // Assert
    expect(person.identityNumber).toEqual(idNumber2)
    expect(person.previousValue).toEqual(idNumber1)
  })
})
