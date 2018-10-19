var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array , element) {
  var newArr = [...array, element];
  return newArr;
}
function destructivelyAddElementToBeginningOfArray(array , element) {
  array.unshift(element);
  return array;
}
function addElementToEndOfArray(array , element) {
  var newArr = [[...array, element];
}
function destructivelyAddElementToEndOfArray(array , element) {
  array.push(element);
  return array;
}