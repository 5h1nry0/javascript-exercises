const reverseString = function(text) {
    let newArray = []
    const splitString = text.split("");
    for (const char of splitString) {
      newArray.unshift(char)
    };
    let newString = newArray.join('');
    return newString
};

// Do not edit below this line
module.exports = reverseString;
