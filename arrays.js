var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array , element) {
  var newArr = [];
  newArr.push(element);
  return newArr;
}
function destructivelyAddElementToBeginningOfArray(array , element) {
  return array[0] = element;
}