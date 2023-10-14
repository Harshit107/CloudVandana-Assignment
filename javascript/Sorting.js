function sortArray(arr) {
  return arr.sort((a, b) => b - a);
}

const arr = [5, 2, 8, 1, 4];
console.log("Given Array :", arr);
console.log("Sorted array in descending order:", sortArray(arr));
