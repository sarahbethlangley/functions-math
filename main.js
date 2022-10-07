const add = (valueOne, valueTwo) => {
const sum = valueOne + valueTwo
return sum
}

const multiplyByTwo = (sumOne) => {
    const multipliedSum = sumOne * 2
    return multipliedSum
}

const answer = add(2,2)
console.log(answer)

const nextAnswer = multiplyByTwo(2)
console.log(nextAnswer)
