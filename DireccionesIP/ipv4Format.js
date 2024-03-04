


/**
 * Checks if the given input string is a valid IPv4 address.
 *
 * @param {string} inputString - The input string to be checked.
 * @returns {boolean} - Returns true if the input string is a valid IPv4 address, otherwise returns false.
 * @throws {Error} - Throws an error if the input string is empty, null, or undefined.
 */

//funcion que comprueba si la direccion es ipv4

function isIPv4Address(inputString) {
    if(inputString.trim() === '') throw new Error('La cadena no puede estar vacia');
    if(inputString === null) throw new Error('La cadena no puede ser nula');
    if(inputString === undefined) throw new Error('La cadena no puede ser indefinida');
    let arr = inputString.split('.');
    if (arr.length !== 4) return false;
    arr.every((el) => el >= 0 && el <= 255 && el !== '' && !isNaN(el))
    return true;
}


