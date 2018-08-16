function getPostData() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => res.json())
}
var source = Rx.Observable.fromEvent(document.body, 'click');

var example = source.concatMap(
    e => Rx.Observable.from(getPostData())
);

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});