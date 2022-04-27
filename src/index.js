function calculateDepth(arr) {
let depth = 1;
for(let elem of arr) {
    if (Array.isArray(elem)) {
       const d = calculateDepth(elem)+1;
       if(depth<d) {
        depth = d;
    }
    }  
}
return depth;
}


let arr =[1, 2, 3, [8, [2]], 4, 5];
console.log(calculateDepth(arr));
  