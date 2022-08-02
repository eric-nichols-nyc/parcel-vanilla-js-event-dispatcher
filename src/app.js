import dispatcherSingleton from "./EventEmitter";
import HomeButton from "./HomeButton";
console.log(dispatcherSingleton)

const main = document.getElementById("main-container");
main.innerHTML = HomeButton.render();
