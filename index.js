
function theBeatlesPlay(musicians, instruments) {
  var newBeatlesPlay = []
  const i = 0
  for(let i = 0; i < musicians.length; i++) {
  newBeatlesPlay.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return(newBeatlesPlay);
}


function johnLennonFacts(facts) {
 var excitingFacts = []
  let i = 0; i++;
  while (facts > 0) {
excitingFacts.push(facts[i] + '!!!')
}
return(excitingFacts)
}


function iLoveTheBeatles(num) {
  do {console.log("I love the Beatles!");
  num++
  }  while (num < 15)
  }