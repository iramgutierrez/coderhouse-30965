const response = await fetch('http://jsonplaceholder.typicode.com/todos/1')
const json = await response.json()

console.log(json)