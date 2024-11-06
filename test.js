const removeFromArray = function (array, num) {
  let result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] == num) {
      array.splice(i, 1);
    } else {
      result.push(array[i]);
    }
  }
  return result;
};

console.log(removeFromArray([1, 2, 3, 4], 3));
