// js version 1 - setInterval
let index = 0

function gen(n) {
  let intervalId = setInterval(() => {
    console.log(index)
    
    index++
    if(index === n) {
      clearInterval(intervalId)
    }
  }, 1000)
}

// js version 2 - setTimeout
// let timerId = 0
// function generateNumber(n) {
//   clearTimeout(timerId)
//   if(n > 0) {
//     timerId = setTimeout(() => {
//       console.log(index)
//       index++
//       generateNumber(n - 1)
//     }, 1000)
//   }
// }


// rxjs version 1
// function generateRxjs(n) {
//   let eventStream = Rx.Observable.interval(1000)
  
//   eventStream
//     .take(n)
//     .subscribe(console.log)
// }

// rxjs version 2
// function generateRxjs(n) {
//   let eventStream = Rx.Observable.interval(1000)
//   let mouseClick = eventStream.fromEvent(document, 'click')
  
//   eventStream
//     .take(n)
//     .takeUntil(mouseClick)
//     .subscribe({
//       next: (val) => console.log(val),
//       complete: () => console.log('complete')
//     })
// }



// generateNumber(5)
gen(5)
// generateRxjs(5)
