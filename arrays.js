var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array , element) {
  var newArr = [];
  newArr.push(element);
  return newArr;
}
function destructivelyAddElementToBeginningOfArray(array , element) {
  array[0] = element;
  return array;
}