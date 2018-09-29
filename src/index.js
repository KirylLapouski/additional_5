let sameTypeBracket = (bracketsConfig)=>(opening,closing)=>{
  return bracketsConfig.some(value=> {
    if(value[0] === opening && value[1] === closing)
      return true
  })
}

module.exports = function check(str, bracketsConfig) {
  let openingBrackets = [], closingBrackets = [];
  bracketsConfig.forEach(pair=>{ openingBrackets.push(pair[0]); closingBrackets.push(pair[1])})

  return magic(str.split(''),openingBrackets,closingBrackets,sameTypeBracket(bracketsConfig))
}


function magic(array,openingBrackets,closingBrackets,compareBrackets){
  let stack = []
  let res = !array.some(value => {
    stack.push(value)
    if(closingBrackets.indexOf(value)!==-1 && compareBrackets(stack[stack.length-2], value)){
      stack.pop()
      stack.pop()
    }else if(openingBrackets.indexOf(value)===-1){
      return true
    }
  })

  return res && !stack.length
}
