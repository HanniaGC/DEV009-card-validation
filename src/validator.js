const validator = {
  maskify: function (creditCardNumber) {
    const lastFourDigits = creditCardNumber.slice(-4);
    const maskedDigits = "*".repeat(creditCardNumber.length - 4);
    return maskedDigits + lastFourDigits;
  },

  isValid: function (creditCardNumber) {
    const trimmedNumber = creditCardNumber.replace(/\s|-/g, "");

    let sum = 0;
    let isSecondDigit = false;

    for (let i = trimmedNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(trimmedNumber.charAt(i), 10);

      if (isSecondDigit) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      isSecondDigit = !isSecondDigit;
    }

    return sum % 10 === 0;
  },

};

export default validator;
