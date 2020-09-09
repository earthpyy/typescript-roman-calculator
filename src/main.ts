import {ROMAN_NUMBERS} from './main.constant';

function convertRomanToNumber(romanDigit: string): number {
    return ROMAN_NUMBERS[romanDigit];
}

export function calculate(romanNumber: string): number {
    let result = 0;

    for (let i = 0; i < romanNumber.length; i++) {
        // getting current digit value
        const digit = romanNumber[i];
        let value = convertRomanToNumber(digit);

        // getting next digit value to determine substract notation
        const nextDigit = romanNumber[i+1];
        const nextValue = i < romanNumber.length ? convertRomanToNumber(nextDigit) : null;

        // substract if next value is bigger than current value
        if (nextValue && nextValue > value) {
            value = nextValue - value;
            i++;
        }

        // save to result
        result += value;
    }

    return result;
}
