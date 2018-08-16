const video = document.getElementById('video');
const anchor = document.getElementById('anchor');

const scroll = Rx.Observable.fromEvent(document, 'scroll');
const mouseDown = Rx.Observable.fromEvent(video, 'mousedown')
const mouseUp = Rx.Observable.fromEvent(document, 'mouseup')
const mouseMove = Rx.Observable.fromEvent(document, 'mousemove')
const mouseOut = Rx.Observable.fromEvent(document, 'mouseout')

const validValue = (value, max, min) => {
    return Math.min(Math.max(value, min), max)
}

// control class video-fixed
scroll
    .map(() => anchor.getBoundingClientRect().bottom < 0)
    .subscribe(bool => {
        if (bool) {
            video.classList.add('video-fixed');
        } else {
            video.classList.remove('video-fixed');
        }
    })

// work flow
mouseDown
    .filter(() => video.classList.contains('video-fixed')) 
    .map(() => mouseMove.takeUntil(mouseUp).takeUntil(mouseOut)) // mouse up/out -> stop the stream
    .concatAll() // 串行连接源
    .withLatestFrom(mouseDown, (move, down) => {
        return {
            x: validValue(move.clientX - down.offsetX, window.innerWidth - 320, 0),
            y: validValue(move.clientY - down.offsetY, window.innerHeight - 180, 0)
        }
    })
    .subscribe(pos => {
        video.style.top = pos.y + 'px';
        video.style.left = pos.x + 'px';
    })