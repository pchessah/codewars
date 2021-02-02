function toWeirdCase(string){
  function convert(word){
    let wordArr = word.split("")
    
    let ans = wordArr.map((item, index) => {
      if(index%2 ==0){
        return item.toUpperCase()
      } else {
        return item.toLowerCase()
      }
    })
    return ans.join("")
  }
  let stringArr = string.split(" ")
  let ansArr = []
  for(let i=0; i<stringArr.length; i++){
    ansArr = [...ansArr, convert(stringArr[i])]
  }
  return(ansArr.join(" "));

  //TODO
}

toWeirdCase('This')
toWeirdCase( "Weird string case" )