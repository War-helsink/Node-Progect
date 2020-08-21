const EventEmitter = require('events');

// const emitter = new EventEmitter();
// emitter.on( 'anything', (data) => {
//     console.log(data); 
// });
// emitter.emit('anything', { a: 1 });
// emitter.emit('anything', { a: 1 });
// emitter.emit('anything', { a: 1 });

class Dispatcher extends EventEmitter{
    subscribe(eventsName, cb) {
        console.log("Subscribe...");
        this.on(eventsName, cb);
    }
    dispatcher(eventsName, data) {
        console.log("Dispatcher...");
        this.emit(eventsName, data);
    }
}

const dis = new Dispatcher()

dis.subscribe('aa', (data) => {
    console.log(data);
});
dis.dispatcher('aa', {aa:22});