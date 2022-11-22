// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// tests for isPhoneNumber()
test('15 is not a phone number', () => {
    expect(functions.isPhoneNumber('15')).toBe(false);
});

test('3.14159 is not a phone number', () => {
    expect(functions.isPhoneNumber('3.14159')).toBe(false);
});

test('123-456-7890 is a phone number', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('555-555-5555 is a phone number', () => {
    expect(functions.isPhoneNumber('555-555-5555')).toBe(true);
});

// tests for isEmail()
test('student@ucsd.edu is an email', () => {
    expect(functions.isEmail('student@ucsd.edu')).toBe(true);
});

test('yahoo@gmail.com is an email', () => {
    expect(functions.isEmail('yahoo@gmail.com')).toBe(true);
});

test('@aoldotcom is not an email', () => {
    expect(functions.isEmail('@aoldotcom')).toBe(false);
});

test('not_an_email_at_icloud.com is not an email', () => {
    expect(functions.isEmail('not_an_email_at_icloud.com')).toBe(false);
});

// tests for isStrongPassword()
test('superlongsecurepassword is not a strong password', () => {
    expect(functions.isStrongPassword('superlongsecurepassword')).toBe(false);
});

test('123 is not a strong password', () => {
    expect(functions.isStrongPassword('123')).toBe(false);
});

test('BurgerKing123 is a strong password', () => {
    expect(functions.isStrongPassword('BurgerKing123')).toBe(true);
});

test('pass_word is a strong password', () => {
    expect(functions.isStrongPassword('pass_word')).toBe(true);
});

// tests for isDate()
test('1/23/4567 is a valid date', () => {
    expect(functions.isDate('1/23/4567')).toBe(true);
});

test('1/1/2000 is a valid date', () => {
    expect(functions.isDate('1/1/2000')).toBe(true);
});

test('12/31/99 is not a valid date', () => {
    expect(functions.isDate('12/31/99')).toBe(false);
});

test('2022/2/22 is not a valid date', () => {
    expect(functions.isDate('2022/2/22')).toBe(false);
});

// tests for isHexColor()
test('ABCDEFG is not a hex color', () => {
    expect(functions.isHexColor('ABCDEFG')).toBe(false);
});

test('255, 255, 255 is not a hex color', () => {
    expect(functions.isHexColor('255, 255, 255')).toBe(false);
});

test('#004225 is a hex color', () => {
    expect(functions.isHexColor('#004225')).toBe(true);
});

test('#2A52BE is a hex color', () => {
    expect(functions.isHexColor('#2A52BE')).toBe(true);
});