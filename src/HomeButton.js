import dispatcherSingleton from "./EventEmitter";
console.log(dispatcherSingleton)

const HomeButton = {
  render: () => {
    return `<button> Hello There</button>`
  }
}

export default HomeButton;