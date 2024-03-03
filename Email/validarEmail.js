
//Una funcion
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};



//Otra funcion

function validarEmail(email) {
  const expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return expresionRegular.test(email);
}




//************************************************
//Otra funcion cin jest para la verificacion:
//************************************************


/**
 * Validates an email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - Returns true if the email address is valid, otherwise false.
 */



const verifyString = (str) => {
    if(str === undefined) throw new Error('Undefined string');
    if(str === '') throw new Error('Empty string');
    if(typeof str !== 'string') throw new Error('Not a string');
}



const validateEmail = (email) => {
    verifyString(email);
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return regex.test(email);   
  }


module.exports = {validateEmail, verifyString};

//*********************************************************




const { verifyString, validateEmail } = require('./app');

describe('verifyString', () => {
  it('should throw an error if the string is undefined', () => {
    expect(() => {
      verifyString(undefined);
    }).toThrow('Undefined string');
  });

  it('should throw an error if the string is empty', () => {
    expect(() => {
      verifyString('');
    }).toThrow('Empty string');
  });

  it('should throw an error if the input is not a string', () => {
    expect(() => {
      verifyString(123);
    }).toThrow('Not a string');
  });

  // Add more test cases if needed
});

describe('validateEmail', () => {
  it('should return true for a valid email address', () => {
    expect(validateEmail('test@example.com')).toBe(true);
  });

  it('should return false for an invalid email address', () => {
    expect(validateEmail('invalid_email')).toBe(false);
  });
  it('should return false for an invalid email address', () => {
    expect(validateEmail('invalid_email@')).toBe(false);
  });
  it('should return false for an invalid email address', () => {
    expect(validateEmail('invalid_email@v')).toBe(false);
  });
  it('should return false for an invalid email address', () => {
    expect(validateEmail('@com')).toBe(false);
  });
  it('should return false for an invalid email address', () => {
    expect(validateEmail('66@com')).toBe(false);
  });

  it('should throw an error for an undefined email', () => {
    expect(() => validateEmail(undefined)).toThrow('Undefined string');
  });

  it('should throw an error for an empty email', () => {
    expect(() => validateEmail('')).toThrow('Empty string');
  });

  it('should throw an error for a non-string email', () => {
    expect(() => validateEmail(123)).toThrow('Not a string');
  });


});

