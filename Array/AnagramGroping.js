





//Create a function that takes an array of strings and return an array of arrays contains strings that are anagrams of each other.

//Example
//input: ['bat', 'tar', 'cat', 'rat', 'mat', 'tam']
//output: [['bat'], ['tar', 'rat'], ['cat'], ['mat', 'tam']]


/**
 * Groups anagrams together from an array of words.
 *
 * @param {string[]} arr - The array of words to group anagrams from.
 * @returns {string[][]} - An array of arrays, where each inner array contains a group of anagrams.
 */

const anagrams = (arr) => {
    let result = [];
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].split('').sort().join('');
        if (obj[word]) {
        obj[word].push(arr[i]);
        } else {
        obj[word] = [arr[i]];
        }
    }
    for (let key in obj) {
        result.push(obj[key]);
    }
    return result;
}

module.exports = { anagrams };

//How to use:
console.log(anagrams(['bat','rat']));
//output: [['bat'], ['tar', 'rat'], ['cat'], ['mat', 'tam']]


