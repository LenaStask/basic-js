function sortByHeight(arr) {
  let temp;
  for (let i=0; i<arr.length; i++) {
    for (let j= i+1; j< arr.length; j++) {
      if (arr[i] != -1) {
        if (arr[j] != -1 && arr[i] > arr[j]) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp
        } else {
        }
      } else {
        i++;
      }
    }
  }
  return arr;
}
console.log(sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]));
  