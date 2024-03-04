



/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The input string.
 * @returns {string} The capitalized string.
 * @throws {Error} If the input string is undefined or not a string.
 */


const capitalize = (str) => {
    verifyString(str);
    return str.charAt(0).toUpperCase() + str.slice(1);
}
