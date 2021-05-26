describe('Primitive Values', () => {
  it('should test jest assertions with primitive values', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10);

    expect(number).not.toBeNull();
    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();

    expect(number).toBeGreaterThan(9);
    expect(number).toBeGreaterThanOrEqual(10);
    expect(number).toBeLessThan(11);
    expect(number).toBeLessThanOrEqual(10);

    expect(number).toBeCloseTo(10.001);

    expect(number).toHaveProperty('toString');
  });
});

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const number = 10;
    const person = { name: 'Joao', age: 21 };
    const anotherPerson = { ...person };

    // expect(person).toBe(anotherPerson); // test with Primitive Values
    expect(person).toEqual(anotherPerson); // test with Objects

    expect(anotherPerson).toHaveProperty('age', 21);
    expect(anotherPerson).not.toHaveProperty('firstname');

    expect(person.name).toBe('Joao');
  });
});
