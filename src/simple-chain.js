const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  str : '',
  getLength() {
    let arr = this.str.split('~~');
    return arr.length;
  },
  addLink(value) {
    if (value === undefined) {
      if (this.str === ''){
        this.str +=`( )`;
      } else {
        this.str +=`~~( )`;
      }
    } else {
      if (this.str === ''){
        this.str +=`( ${value} )`;
      } else {
        this.str +=`~~( ${value} )`;
      }
    }
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number'){
      this.str = '';
      throw new Error ("You can't remove incorrect link!");
    } else {
      let arr=[];
      if (this.str != ''){
        arr = this.str.split('~~');
        if (position<1 || position>arr.length) {
          this.str = '';
          throw new Error ("You can't remove incorrect link!");
        } else {
          for (let i=position-1; i<arr.length-1; i++) {
            arr[i]=arr[i+1];
          }
          arr.length = arr.length-1;
          this.str = arr.join('~~');
        } 
      }
      return this;
    }
    
  },
  reverseChain() {
    this.str = this.str.split('~~').reverse().join('~~');
    return this;
  },
  finishChain() {
    let newStr = this.str;
    this.str = '';
    return newStr;
  }
};

module.exports = {
  chainMaker
};
