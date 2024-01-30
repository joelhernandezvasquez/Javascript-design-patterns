

let counter = 0;

const increment = () =>{
    counter++;
}

const decrement =() =>{
    counter--;
}

const getCounter = () =>{
    getCounterMessage();
}

const resetCounter = () =>{
    counter = 0;
}

const getCounterMessage = () =>{
    console.log(`the actual count value is: ${counter}`)
}

 const counterModule = {
    increment:increment(),
    decrement:decrement(),
    getCounter:getCounter(),
    resetCounter:resetCounter()
}

export default counterModule;
