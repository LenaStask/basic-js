function getDNSStats(domains) {
  let obj = new Object();
  let arr = [];
  for (let i=0; i<domains.length; i++) {
    arr = domains[i].split('.').reverse();
    if(obj[arr[0]]) {
      obj[arr[0]]  += 1;
    } else{
      obj[arr[0]]  = 1;
    }
    if(obj[arr[0]+'.'+arr[1]]){
      obj[arr[0]+'.'+arr[1]] +=1;
    } else{
      obj[arr[0]+'.'+arr[1]] =1;
    } if(arr.length === 3){
      if(obj[arr[0]+'.'+arr[1]+'.'+arr[2]]){
      
        obj[arr[0]+'.'+arr[1]+'.'+arr[2]] +=1;
      } else {
        obj[arr[0]+'.'+arr[1]+'.'+arr[2]] =1;
      }
    }
    
  }
  
  return obj;
}
console.log(getDNSStats(['epam.com', 'info.epam.com']));
  