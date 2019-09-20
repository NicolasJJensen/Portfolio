export var sleep = ms => new Promise(r => setTimeout(r, ms))

export var repeat = (ms, func, ...args) => {
  var count = 0
  return new Promise(
    resolve => {
      const interval = setInterval(() => {
        func(resolve, interval, ...args, count)
        count++
      }, ms)
    }
  )
}

export var easing = (x) => {
  return (x*x) / ( (x*x) + ((1-x) * (1-x)) )
}