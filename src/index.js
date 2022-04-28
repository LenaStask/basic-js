class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = direct === undefined ? true : direct;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error ("Incorrect arguments!");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();

    let cipherText = '';
    let kLen = key.length;
    for (let i=0, j=0; i<message.length; i++) {
      const mCode = message.charCodeAt(i) - 65;
      const kCode = key.charCodeAt(j % kLen) - 65;
      if (0 <= mCode && mCode <= 25) {
        cipherText += String.fromCharCode((mCode + kCode) % 26 + 65);
        j++;
      } else {
        cipherText += message[i];
      }
    }

    return this.direct ? cipherText : this.#reverse(cipherText);
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error ("Incorrect arguments!");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();

    let decipherText = '';
    let kLen = key.length;
    for (let i=0, j=0; i<message.length; i++) {
      const mCode = message.charCodeAt(i) - 65;
      const kCode  = key.charCodeAt(j % kLen) - 65;
      if (0 <= mCode && mCode <= 25) {
        if (kCode > mCode) {
          decipherText += String.fromCharCode((mCode - kCode +26) % 26 +65);
          j++;
        } else {
          decipherText += String.fromCharCode((mCode - kCode) % 26 +65);
        j++;
        }
      } else {
        decipherText +=message[i];
      }
    }

    return this.direct ? decipherText : this.#reverse(decipherText);
  }

  #reverse(str) {
    return str.split('').reverse().join('');
  }
}
const directMachine = new VigenereCipheringMachine();

const reverseMachine = new VigenereCipheringMachine(false);



console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));
  