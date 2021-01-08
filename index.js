function sumArray(array) {
  if(array == null){
    return 0
  }
  if(array.length<2){
    return 0
  } else {
    let highestValue = Math.max(...array)
    let lowestValue = Math.min(...array)
    let arrayWithoutHighAndLow = array.filter(item =>{
      return item !== highestValue && item !== lowestValue
    });
    let ans = arrayWithoutHighAndLow.reduce((a,b)=>a+b,0)
    return ans;
  }
}


sumArray([ 6, 2, 1, 8, 10 ])

//still not working