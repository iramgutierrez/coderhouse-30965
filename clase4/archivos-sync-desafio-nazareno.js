try {
  const datos = fs.readFileSync("fyh.txt", "utf-8");
  console.log(datos, Date());
} catch (error) {
  console.error("El archivo no se ha encontrado");
}