//Given a non-negative integer, 3 for example, return a string with a murmur:
//"1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


var countSheep = function (num){
  const str = ` sheep...`;
  let ans = 1+str
  for(let i = 2; i<num+1; i++){
    ans = `${ans}${i}${str}`
  }

  return ans
  //your code here
}