test('should be 2+2 = 4', () => {
    expect(2 + 3).toBe(5);
});

test('should be similar string', () => {
    expect('hola').not.toMatch('Hola')
});

test('should be truthy', () => {
    expect(1 === 1).toBeTruthy();
});

test('should be exist the Foo element', () => {
    const theArray = ['one', 'two', 'Foo'];
    expect(theArray).toContain('Foo');
});

const palindrome = (word) => word.split('').reverse().join('');

test('should be aloh', () => {
    expect(palindrome('hola')).toBe('aloh')
});