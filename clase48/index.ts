import {
  red, green, bgYellow, bgWhite, bold, // colors
  parse // datetime
} from './deps.ts'

console.log(bgYellow(bold(red('Hello Deno!'))))
console.log(bgWhite(bold(green('Hello Deno!'))))

const myDate = parse('11-10-2022', 'dd-mm-yyyy')

console.log(myDate)