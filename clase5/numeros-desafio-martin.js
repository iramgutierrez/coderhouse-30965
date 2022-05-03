const random_20 = () => {
  return Math.ceil( Math.random() * 20 )
}
let obj_random = {}
for (let index = 0; index < 10000; index++) {
  const random_number = random_20()
  if(obj_random[random_number] !== undefined && obj_random[random_number] !== null)
      obj_random[random_number] ++
  else obj_random[random_number] = 1
}
console.log({obj_random})