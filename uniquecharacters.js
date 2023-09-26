function hasUniqueCharacters(string) {
  let checkedLetter = [];

  let onlyUnique = true;

  string.split("").forEach((letter) => {
    checkedLetter.includes(letter)
      ? (onlyUnique = false)
      : checkedLetter.push(letter);
  });

  console.log(onlyUnique);
}

hasUniqueCharacters("String"); // true
hasUniqueCharacters("7String7"); // false
hasUniqueCharacters("*String*"); // false
hasUniqueCharacters("abcdefghijk"); // true
hasUniqueCharacters("abcdefghijkc"); // false
