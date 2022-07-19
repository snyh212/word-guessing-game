const Letter = require("./Letter");

class Word {
  constructor(randomWord) {
    const letterList = "abcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < randomWord.length; i++) {
        if (letterList.includes(randomWord[i])) {
            randomWord[i] = "_";
        }
    }
  }
}

module.exports = Word;
