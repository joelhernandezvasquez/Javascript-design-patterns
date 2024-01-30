
let counter = 0;

const counterStore = {
    increment:() =>{
        counter++;
    },
    decrement:() =>{
        counter--;
    },
    getCounter:() =>{
        return counter;
    }
}
Object.freeze(counterStore);
export default counterStore;