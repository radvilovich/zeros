module.exports = function zeros(expression) {
  // your solution
  let resultFunc = 0;

  let elements = expression.split('*');
  const isDoubleNotOdd = elements.every(element => {
    const isDouble = element.includes("!!");
    const number = parseInt(element, 10);
    const isOdd = (number % 2) === 0;
    return isDouble && !isOdd;
  });

  if(isDoubleNotOdd) {
    let result = 0;
  }  else {
    const zerosList = elements.map((element) => {
    const isDouble = element.includes("!!");
    const number = parseInt(element, 10);
    const isOdd = (number % 2) === 0;
    let result = 0;
  
    if(isDouble) {
      if(isOdd) {
        for(i=2; i <= number; i=i+2) {
          const amountOfZeros = numberOfZeroes(i);
          result += amountOfZeros; 
        }
      } else {
        for(i=1; i <= number; i=i+2) {
          const amountOfZeros = numberOfZeroes(i);
          result += amountOfZeros; 
        }
      }
    } else {
      for(i=1; i <= number; i++) {
        const amountOfZeros = numberOfZeroes(i);
        result += amountOfZeros; 
      }
    }

    return result;
    });

  zerosList.forEach(number => {
    resultFunc = resultFunc + number;
  });

  }

  return resultFunc;
}

function numberOfZeroes(number) {
  const isDivided = (number % 5) === 0;
  if(!isDivided) {
    return 0;
  } else {
    return 1 + numberOfZeroes(number / 5);
  }
}