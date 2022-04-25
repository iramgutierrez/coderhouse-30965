const x = 'declarada en el scope global'

function exampleFunction() {
  // x solo se puede utilizar en exampleFunction
  console.log(x)
}

exampleFunction()

console.log(x) // ReferenceError: x is not defined