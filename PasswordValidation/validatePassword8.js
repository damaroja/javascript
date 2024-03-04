






/**
 * Validates a password based on specific criteria.
 * @param {string} password - The password to be validated.
 * @returns {boolean} - Returns true if the password is valid, false otherwise.
 */


//create a validatepassword function that takes in a password and returns true if the password is valid and false if it is not valid
// A valid password is at least 8 characters long and contains at least one number
// A valid password is at least one lowercase letter
// A valid password is at least one uppercase letter


/**
 * Verifies if a given string is valid.
 * @param {string} str - The string to be verified.
 * @throws {Error} If the string is undefined, empty or not a string.
 */


const verifyString = (str) => {
    if(str === undefined) throw new Error('Undefined string');
    if(str === '') throw new Error('Empty string');
    if(typeof str !== 'string') throw new Error('Not a string');
}


const validatePassword = (password) => {
    verifyString(password);
    const isLenghtValid = password.length >= 8;
    const hasNumber = /\d/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    return isLenghtValid && hasNumber && hasLowerCase && hasUpperCase;
}

module.exports = { validatePassword, verifyString };




//---------------------------------------------------


const { validatePassword, verifyString } = require("./app");

describe("validatePassword", () => {
  test("Valid password", () => {
    expect(validatePassword("Abcdefg1")).toBe(true);
  });

  test("Invalid password - less than 8 characters", () => {
    expect(validatePassword("Abc123")).toBe(false);
  });

  test("Invalid password - no numbers", () => {
    expect(validatePassword("Abcdefgh")).toBe(false);
  });

  test("Invalid password - no lowercase letters", () => {
    expect(validatePassword("ABCDEFG1")).toBe(false);
  });

  test("Invalid password - no uppercase letters", () => {
    expect(validatePassword("abcdefg1")).toBe(false);
  });

  test("Invalid password - no lowercase and uppercase letters", () => {
    expect(validatePassword("12345678")).toBe(false);
  });

  test("introducing undefined password", () => {
    expect(() => {
      validatePassword();
    }).toThrow("Undefined string");
  });
  test("introducing empty password", () => {
    expect(() => {
      validatePassword("");
    }).toThrow("Empty string");
  });
  test("introducing non-string password", () => {
    expect(() => {
      validatePassword(123);
    }).toThrow("Not a string");
  });
  test("introducing empty array password", () => {
    expect(() => {
      validatePassword([]);
    }).toThrow("Not a string");
  });
  test("introducing empty object password", () => {
    expect(() => {
      validatePassword({});
    }).toThrow("Not a string");
  });
});

describe("verifyString", () => {
  test("verifyString should throw an error for undefined string", () => {
    expect(() => {
      verifyString(undefined);
    }).toThrow("Undefined string");
  });

  test("verifyString should throw an error for empty string", () => {
    expect(() => {
      verifyString("");
    }).toThrow("Empty string");
  });

  test("verifyString should throw an error for non-string input", () => {
    expect(() => {
      verifyString(123);
    }).toThrow("Not a string");
  });
});
