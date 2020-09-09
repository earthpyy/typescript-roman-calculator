# Roman Calculator

## Problem Description
“As a Roman Bookkeeper, I want to add Roman numbers because doing it manually is too tedious.” Given the Roman numerals, (IVXLCDM which means one, five, ten, fifty, hundred, five hundred and a thousand respectively), create two numbers and add them. As we are in Rome there is no such thing as decimals or int, we need to do this with the strings. An example would be “XIV” + “LX” = “LXXIV”


There are some rules to a Roman number:
- Numerals can be concatenated to form a larger numeral (“XX” + “II” = “XXII”)
- If a lesser numeral is put before a bigger it means the subtraction of the lesser from the bigger (“IV” means four, “CM” means nine hundred)
- If the numeral is I, X or C you can’t have more than three (“II” + “II” = “IV”)
- If the numeral is V, L or D you can’t have more than one (“D” + “D” = “M”)

## Rules
- You cannot change the public interface of this class.
- Name everything (meaningful, searchable, explanatory).
- No mutable state (every single variable is a const and no arrays can be mutated!).
- 2 or fewer function arguments.
- Functions should not take any boolean argument.
- Functional over imperative (no for loops, no let. Use map).
- Encapsulate conditionals in functions.
- Code should be read from top to bottom with function callers and callee being close.


## Deliverables
1. Your team Github repo (not a personal one. We want you to work in teams)
2. Documentation as README (make your Github page look professional!).
3. Code comments (Google how to write good code comments).
4. Make sure that your logic can be automated tested by writing unit tests. Ensure your logic can correct with a *single* command-line command.
5. Refactor your code! After the first go-round, is your code clean? If it's not, learn to refactor your code. How do you feel looking at the code you wrote from a week ago?