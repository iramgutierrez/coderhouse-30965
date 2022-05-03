const random = () => Math.round(Math.random()*19) + 1
const array =[]
for (let i = 0; i < 10000; i++) {
    array.push(random())
}
const numeros = {}
array.forEach((val)=>{if(numeros[val] == undefined){
    numeros[val]=1
}else{
    numeros[val] =numeros[val] + 1
}})
console.log({numeros});