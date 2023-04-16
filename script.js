
// Using iteration, write a function fibs which takes a number 
// and returns an array containing that many numbers 
// from the fibonacci sequence. Using an example input of 8, 
// this method should return the array [0, 1, 1, 2, 3, 5, 8, 13].

function fibs(num) {
  let fibArray = [];
  
  for (let i = 0; i < num; i++) {
    if (i < 2) {
      fibArray.push(i);
    } else {
      fibArray.push(fibArray[i - 2] + fibArray[i - 1])
    }
  }

  return fibArray;
}

console.log(fibs(8));

// Now write another method fibsRec which solves the same 
// problem recursively. This can be done in just a couple of 
// lines (or 1 if you’re crazy, but don’t consider either of 
// these lengths a requirement… just get it done).

function fibsRec(num, fibArray=[0, 1, -1]) {
  if (num < 2) {
    const firstCall = fibArray[2] === -1;
    return firstCall ? fibArray.slice(0, num) : fibArray;
  }
  
  const firstNum = fibsRec(num - 1, fibArray)[num - 2];
  const secondNum = fibsRec(num - 1, fibArray)[num - 1];
  fibArray[num] = firstNum + secondNum;
  return fibArray.slice(0, fibArray.length - 1);
}

console.log(fibsRec(8))


// Try with the Auxiliary function from the ualberta reading

function fibsProp(num) {
  if (num < 1) {
    return {first: 1, second: 0, fibArray: []}
  }
  
  const firstNum = fibsProp(num - 1);
  firstNum.fibArray.push(firstNum.second);
  const secondNum = {};

  secondNum.first = firstNum.first + firstNum.second;
  secondNum.second = firstNum.first;
  secondNum.fibArray = firstNum.fibArray;

  return secondNum;
}

console.log(fibsProp(8).fibArray)