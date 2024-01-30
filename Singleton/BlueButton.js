import counterStore from "./SingletonModernOnlyJavascript/CounterSingleton.js";

const btn = document.querySelector('.blue-btn');

console.log('this is blue button here  <-------');

btn.addEventListener('click',()=>{
    console.log(`Counter is ${counterStore.getCounter()}`);
    counterStore.increment();
    counterStore.increment();
    counterStore.decrement();
    console.log(`Counter now is ${counterStore.getCounter()}`);
})