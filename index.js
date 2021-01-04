//Digital root is the recursive sum of all the digits in a number.
//Given n, take the sum of the digits of n. If that value has more than one digit,
//continue reducing in this way until a single-digit number is produced. 
//The input will be a non-negative integer.

function digital_root(n) {
  const addNumbers = (num) => {
    let arr = num.toString().split("")
    let sum = arr.map(item=>+item).reduce((a,b)=>a+b,0)
    let arrSum = sum.toString().split("")
    return arrSum
  }
  let ansArr = addNumbers(n);
  if(ansArr.length === 1){
    let ansStr = ansArr.join("")
    let ans = +ansStr
    console.log(ans);
    return (ans);
  } else {
    let valStr = ansArr.join("")
    let val = +valStr
   return digital_root(val)
  }
  
}

digital_root(456)