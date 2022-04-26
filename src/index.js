function getSeason(date) {
    let season = '';
    let month;
    if (Object.getOwnPropertyNames(date).length == 0 && date != null) {
      if (date instanceof Date) {
        month = date.getMonth();
        if (month > 1 && month < 5) {
          return 'spring';
        }
        else if (month > 4 && month < 8) {
          return 'summer';
        }
        else if (month > 7 && month < 11) {
          return 'autumn';
        } else {
          return 'winter';
        }
      } else {
        throw new Error("Invalid date!");
      }
    } else {
      throw new Error("Invalid date!");
    }
    
  }

  let date = new Date(1456, 0, 2, 1, 50, 9, 238);
  console.log(getSeason());
  