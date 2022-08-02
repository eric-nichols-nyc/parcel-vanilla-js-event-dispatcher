class EventEmitter {
  constructor(){
    this.events = []
  }
}

const dispatcherSingleton = new EventEmitter();

window.dispatcherSingleton = dispatcherSingleton // web

export default dispatcherSingleton // export the singleton