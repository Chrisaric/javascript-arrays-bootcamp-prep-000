var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
   var arr = array.unshift(element);
   return array
}

function addElementToEndOfArray(array, element) {
   array.push(element);
   return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  var arr = array.push(element);
  return array
}

function accessElementInArray(array, index) {
    return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(0)
  return array
}

function removeElementFromBeginningOfArray(array) {
   return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
   array.pop()
   return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
