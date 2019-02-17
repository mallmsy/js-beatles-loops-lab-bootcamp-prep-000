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
  let i = 0;
  while (i <= facts.length) {
    i++;
    excitingFacts.push(facts[i] + '!!!')
    console.log(i)
  }
  return(excitingFacts)
}

function iLoveTheBeatles(num) {
  do {console.log("I love the Beatles!");
  num++
  }  while (num < 15)
  }