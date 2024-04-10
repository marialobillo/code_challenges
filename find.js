
const find = (words, note) => {
  const noteStore = {};
  for(let char of note) {
      if (noteStore[char]) {
          noteStore[char] += 1;
      }
      else {
          noteStore[char] = 1;
      }
  }
  const wordsStore = {};
  for (let word of words) {
      wordsStore[word] = {};
      for(let char of word) {
          if (wordsStore[word][char]) {
              wordsStore[word][char] += 1;
          } else {
              wordsStore[word][char] = 1;
          }
      }
      let isMatch = 0;
      for (let key in wordsStore[word]) {
          if(noteStore.hasOwnProperty(key)) {
              if (noteStore[key] >= wordsStore[word][key]) {
                  isMatch++;
              }
          }
          if(isMatch == word.length) {
            return word
          }
      }
  }
  return '-';

}

words = ["baby", "referee", "cat", "dada", "dog", "bird", "ax", "baz"]
note1 = 'ctay'
const result = find(words, note1)
console.log(result) // cat