const hangman = function (word, remainingGuess) {
  this.word = word.toLowerCase().split('');
  this.remainingGuess = remainingGuess;
}
;