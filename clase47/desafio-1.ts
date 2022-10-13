import {
  red, yellow, green, bgWhite
} from 'https://deno.land/std@0.159.0/fmt/colors.ts'

const args = Deno.args.map(arg => Number(arg))

const getMean = (numbers: number[]): number => {
  return (
    numbers.reduce((sum, number) => sum + number, 0)
    / numbers.length
  )
}

const separator = '***********************'
const numbers = `Números: ${args.join(',')}`
const min = `Mínimo: ${Math.min(...args)}`
const max = `Máximo: ${Math.max(...args)}`
const mean = `Promedio: ${getMean(args)}`

const file = `
${separator}
${numbers}
${min}
${max}
${mean}
${separator}
`

await Deno.writeTextFile('resultados.txt', file)

const output = `
${separator}
${numbers}
${bgWhite(yellow(min))}
${bgWhite(red(max))}
${bgWhite(green(mean))}
${separator}
`

console.log(output)
