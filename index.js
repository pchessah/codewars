var summation = function (num) {
  let sum = 0
  for(let i = 0; i <num+1; i++){
    sum = sum + i    
  }
  return sum
  // Code here
}

//SUM ALL NUMBERS TO NUM


function enough(cap, on, wait) {
  if((cap - on)>=wait){
    return 0
  } else {
    return Math.abs((cap-on)-wait)
  }
  // your code here
}

//CHECK CAPACITY OF PEOPLE IN THE BUS


function booleanToString(b){
  if(b === true){
    return "true"
  } else {
    return  "false"
  }
  //your code here
}

//BOOLEAN CHECKER

function sumMix(x){
  return x.map(a => +a).reduce((a, b) => a + b);
}

//CONVERT ALL ITEMS TO NUMBERS THEN DO SUM IN ARRAY