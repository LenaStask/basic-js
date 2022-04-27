function getMatrixElementsSum(matrix) {
  let sum=0;
  for (let i=0; i<matrix.length; i++){
    for (let j=0; j<matrix[i].length; j++) {
        if (i===0) {
          sum+=matrix[i][j];
        } else{
          if ( matrix[i-1][j] != 0) {
            sum+=matrix[i][j];
          }
          
        }
    }
  }
  return sum;
}

console.log(getMatrixElementsSum([
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
]));
  