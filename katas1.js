
function oneThroughTwenty() {
  let result = [] 
  for(let i = 1; i <= 20; i++){ 
     result.push(i)
  }
  return result
}
console.log(oneThroughTwenty())


function evensToTwenty() {
  let result = []
  for (let i = 1; i <= 20; i++){
    if(i % 2 === 0){
      result.push(i)
    }
  }
  return result
}

console.log(evensToTwenty())

function oddsToTwenty() {
  let result = []
  for (let i = 1; i <= 20; i++){
    if(i % 2 !== 0){
      result.push(i)
    }
  }
  return result
}

console.log(oddsToTwenty())

function multiplesOfFive() {
 let result = []
 for( let i = 1; i <= 100; i++){
   if(i % 5 === 0){
     result.push(i)
   }
 }
 return result
}

console.log(multiplesOfFive())

function squareNumbers() {
  let result = []
  for(let i = 1;  i*i <= 100; i++){
    result.push(i*i)
  }
  return result
    
}

console.log(squareNumbers())

function countingBackwards() {
  let result = []
  for (let i = 20; i > 0; i--){
    result.push(i)
  }
  return result
}
console.log(countingBackwards())

function evenNumbersBackwards() {
  let result = []
  for(let i = 20; i > 0; i--){
    if(i % 2 === 0){
      result.push(i)
    }
  }
  return result
}

console.log(evenNumbersBackwards())

function oddNumbersBackwards() {
  let result = []
  for(let i = 20; i > 0; i--){
    if(i % 2 !== 0){
      result.push(i)
    }
  }
  return result
}

console.log(oddNumbersBackwards())

function multiplesOfFiveBackwards() {
  let result = []
  for(let i = 100; i > 0; i--){
    if(i % 5 === 0){
      result.push(i)
    }
  }
  return result
}

console.log(multiplesOfFiveBackwards())

function squareNumbersBackwards() {
  let result = []
  for(let i = 100; i > 0; i--){
    if(i*i <= 100){
    result.push(i * i)
    }
  }
  return result
}

console.log(squareNumbersBackwards())