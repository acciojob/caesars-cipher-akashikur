// Your Script here.

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  let decodedArr = []; // Your Result goes here
	const start = 'A'.charCodeAt();
  const end = 'Z'.charCodeAt();

  // Function to decode a single character
  function decodeChar(char) {
    // Get the character code
    const charCode = char.charCodeAt();

    // Check if the character is an uppercase letter
    if (charCode >= start && charCode <= end) {
      // Apply the ROT13 shift
      let decodedCharCode = charCode - 13;

      // Handle wraparound if the shift goes below 'A'
      if (decodedCharCode < start) {
        decodedCharCode = end - (start - decodedCharCode) + 1;
      }

      // Convert the character code back to a character
      return String.fromCharCode(decodedCharCode);
    }

    // Return non-alphabetic characters as they are
    return char;
  // Only change code below this line

  return; //return decodedArr
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

// Do not change this line
window.rot13 = rot13;
