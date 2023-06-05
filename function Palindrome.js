function Palindrome(string) {
    
    //Stop condition: an empty word or a word containing a single character is a palindrome
    if (string.length <= 1 ) {
      return true;
    }
    
    // if equality we test the rest of the word
    if (UperToCase.string[0] === UperToCase.string[string.length - 1]) {
      
      return Palindrome(string.slice(1, string.length - 1));
    }
    // if difference we stop
    else
    return false;
  }