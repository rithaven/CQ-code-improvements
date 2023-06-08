const reverseString = (string_) => [...string_].reduce((reversed, char) => char + reversed, '');
reverseString();
