function createDreamTeam( members ) {
    if (members==[]) {
      return '';
    }
    if (Array.isArray(members)) {
      let arrayOfLetters = []
      for (let i=0; i<members.length; i++) {
        console.log(members[i][0]);
        if (typeof members[i] === 'string') {
            members[i]=members[i].replace(/\s/g, '');
            
          arrayOfLetters.push(members[i][0].toLowerCase());
        }  
      }
      
      return arrayOfLetters.sort().join('').toUpperCase();
    } else {return false;}  
    
  }

  let members = [
    ['David Abram'],
    ['Robin Attfield'],
    'Thomas Berry',
    ['Paul R.Ehrlich'],
    'donna Haraway',
    ' BrIaN_gOodWiN  ',
    {
      0: 'Serenella Iovino'
    },
    'Erazim Kohak',
    '  val_plumwood',
  ];
  console.log(createDreamTeam(members));
  