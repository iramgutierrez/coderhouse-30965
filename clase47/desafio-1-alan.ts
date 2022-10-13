type NumbersObj = {
  numbers?: string;
  min?: number;
  max?: number;
  avg?: number;
};

const obj: NumbersObj = {};
const args = Deno.args.map((el) => parseInt(el));

obj.numbers = args.join(" ");

obj.min = Math.min(...args);
obj.max = Math.max(...args);
obj.avg = args.reduce((a, b) => a + b, 0) / args.length;

console.log(obj);