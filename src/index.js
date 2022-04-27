function getEmailDomain(email) {
  let domain = '';
 for(let i=0; i<email.length; i++) {
   if(email[i]==='@') {
     domain = email.substring(i+1);
   }
 }
 return domain;
}


console.log(getEmailDomain('prettyandsimple@example.com'));
  