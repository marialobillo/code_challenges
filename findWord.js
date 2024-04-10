
const find = (words, note) => {
  const noteStore = {};
  for(let char of note) {
    noteStore[char] = (noteStore[char] ?? 0) + 1;
  }
  
  for (let word of words) {
    const wordStore = {};
      for(let char of word) {
        wordStore[char] = (wordStore[char] ?? 0) + 1;
      }
      let isMatch = 0;
      for (let key in wordStore) {
          if(noteStore.hasOwnProperty(key)) {
              if (noteStore[key] >= wordStore[key]) {
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