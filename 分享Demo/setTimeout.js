// url: https://jsbin.com/faqowow/edit?html,js,console

// rxjs version

Rx.Observable.interval(1000)
  .take(5)
  .subscribe(console.log)

// js version
let timerId = 0
let index = 0
function generateNumber(n) {
  clearTimeout(timerId)
  if(n > 0) {
    timerId = setTimeout(() => {
      console.log(index)
      index++
      generateNumber(n - 1)
    }, 1000)
  }
  
}

generateNumber(5)