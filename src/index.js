function renameFiles(names) {
  let k=1;
  for (let i=0; i<names.length; i++) {
    for (let j=i+1; j<names.length; j++) {
      if (names[i]===names[j]) {
        if (names[j].includes('(') && names[j].includes(')')) {
          k = names[j].substring(names[j].length-2,names[j].length-1);
          k = Number.parseInt(k);
          names[j]=names[j]+`(${k})`;
        } else {
          names[j]=names[j]+`(${k})`;
          k++;
        }
      }
    }
  }
  return names;
}
console.log(renameFiles([]));
  