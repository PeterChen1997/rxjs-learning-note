// 雨
// 创建一个来自于 DOM 事件的 Observable

const scroll = Rx.Observable.fromEvent(document, 'scroll');
const mouseDown = Rx.Observable.fromEvent(video, 'mousedown')
const mouseUp = Rx.Observable.fromEvent(document, 'mouseup')
const mouseMove = Rx.Observable.fromEvent(document, 'mousemove')
const mouseOut = Rx.Observable.fromEvent(document, 'mouseout')

// 产生的波纹 Observer处理事件：打印...
scroll.subscribe(() => console.log('scroll'))
mouseUp.subscribe(() => console.log('mouseUp'))
mouseOut.subscribe(() => console.log('mouseOut'))

// https://jsbin.com/cequvaj/1/edit?html,js,console,output