
const getPort = (): number => Number(Deno.env.get('PORT')) || 8080

const PORT = getPort()

console.log(Deno.env)
console.log(PORT)