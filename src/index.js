function getSumOfDigits(n) {
  let arr = n.toString().split('');
  let sum = 0;
  while(arr.length > 1) {
    sum=0;
    for( let i=0; i<arr.length; i++) {
      sum+=Number.parseInt(arr[i]);
    }
    arr = sum.toString().split('');
  }
  return arr;
}
console.log(getSumOfDigits(91));
  