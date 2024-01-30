import counterStore from "./SingletonModernOnlyJavascript/CounterSingleton.js";

const btn = document.querySelector('.red-btn');

console.log('this is red button here  <-------');

btn.addEventListener('click',()=>{
    console.log(`Counter is ${counterStore.getCounter()}`);
    counterStore.increment();
    counterStore.increment();
    counterStore.decrement();
    console.log(`Counter now is ${counterStore.getCounter()}`);
})