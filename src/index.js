function isMAC48Address(n) {
  n = n.replace(/[0-9]/g,0);
  n = n.replace(/[A-F]/g,0);
  if( n == '00-00-00-00-00-00') {
    return true;
  } else {
    return false;
  }
}
console.log(isMAC48Address('G0-00-00-00-00-00'));
  