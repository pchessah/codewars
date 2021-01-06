//Given a non-negative integer, 3 for example, return a string with a murmur:
//"1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// @ts-ignore
String.prototype.toJadenCase = function () {
  let arr = this.split(" ")
  for(let i=0; i<arr.length; i++){
    
  }

  let ans= arr.map(item => item[0].toUpperCase()+item.substr(1)).join(" ");
  console.log(ans);
      
  //...
};

var str = "How can mirrors be real if our eyes aren't real";
// @ts-ignore
str.toJadenCase()