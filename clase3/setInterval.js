const logger = () => {
  return setInterval(() => {
    console.log('Logueando...')
  }, 1000)
}

const interval = logger()

setTimeout(() => {
  clearInterval(interval)
}, 10000)