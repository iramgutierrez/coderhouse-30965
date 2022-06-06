type TimeObject = {
  fyh: string,
  timestamp: number
}

export const getTime = (): TimeObject => {
  return {
    fyh: new Date().toLocaleString(),
    timestamp: Date.now()
  }
}