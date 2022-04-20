/*let i = 0

function foo () {
  i = 1
  let j = 2

  if (true) {
    console.log(i)
    console.log(j)
  }
}

foo() */

/*function foo2 () {
  let i = 0
  if (true) {
    let i = 1
    console.log(i)
  }
  console.log(i)
}

foo2() */

/*function foo3 () {
  if (true) {
    let i = 1
  }

  console.log(i)
}

foo3() */

/*const a = 'hola'

a = 'adios' */

const user = {
  name: 'Iram'
}
user.lastname = 'Gutierrez'
delete user.name

console.log(user)