
// clase Base 
export class User  {

  constructor(name){
    this.name = name;
  }

  greet = ()=>{
    console.log(`Hello, ${this.name}`)
  }
}