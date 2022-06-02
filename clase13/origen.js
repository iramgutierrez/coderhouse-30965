const lista = [2, 3, 5, 7]

lista.map(x => x*x).forEach(x => console.log({ x }))

let a = 0// false, null, undefined, '', 0
let b = 5

// a ??= b

console.log({ a })

const user = undefined

const nameS = user?.name

console.log(nameS)