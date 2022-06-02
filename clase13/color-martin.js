class RGB{
  static getRandom(){
      return Math.ceil(Math.random() * 255)
  }
  static getRGB(){
      const red = RGB.getRandom()
      const green = RGB.getRandom()
      const blue = RGB.getRandom()
      return `(${red}, ${green}, ${blue})`
  }
}

;(()=>{
  let color = RGB.getRGB()
  console.log({color})
})()