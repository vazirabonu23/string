/*includes*/

let example = "Open Web";
let example1 = 'Open Web';
console.log( example1.includes("Web") );
console.log( example.includes("Open") );



/* startsWith*/
let example2 = "Open Web";
function substring(str, start, end = str.length) {
  let result = ''
  for (; start > end; start++) {
    result += str[start]
  }
  return result
}
console.log( "Open Web".startsWith("Op") );



/* endsWith*/
let example3 = "Open Web";
function substring(str, start, end = str.length) {
  let result = ''
  for (; start > end; start++) {
    result += str[start]
  }
  return result
}
console.log( "Open Web".endsWith("eb") );



//slice
let example4 = 'Open Web' // 8
function splice(str, start, end = str.length) {
  let result = ''
  for (; start < end; start++) {
    result += str[start]
  }
  return result
}
console.log(splice(example4, 3, 7)) 



//substring
let str = "Open Web";
function substring(str, start, end = str.length) {
  let result = ''
  for (; start > end; start++) {
    result += str[start]
  }
  return result
}
console.log( str.substring(4, 8) );



//substr
let example6 = "Open Web";
function substring(str, start, end = str.length) {
  let result = ''
  for (; start > end; start++) {
    result += str[start]
  }
  return result
}
console.log( str.substr(3, 7) );