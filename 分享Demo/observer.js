class Event {
    constructor() {
        // 存储事件的数据结构
        this._cache = {};
    }

    // 绑定
    on(type, callback) {
        if (!this._cache.hasOwnProperty(type)) {
            this._cache[type] = []
        }
        this._cache[type].push(callback)
        return this
    }

    // 触发
    trigger(type, data) {
        let fns = this._cache[type];
        if (Array.isArray(fns)) {
            fns.forEach((fn) => {
                fn(data);
            });
        }
        return this;
    }

    // 解绑
    off(type, callback) {
        let fns = this._cache[type];
        if (Array.isArray(fns)) {
            if (callback) {
                let index = fns.indexOf(callback);
                if (index !== -1) {
                    fns.splice(index, 1);
                }
            } else {
                //全部清空
                fns.length = 0;
            }
        }
    }
}

// 测试用例
const event = new Event();

event.on('test', (a) => {
    console.log(a);
});

event.trigger('test', 'hello world');

event.off('test');
event.trigger('test', 'hello world')