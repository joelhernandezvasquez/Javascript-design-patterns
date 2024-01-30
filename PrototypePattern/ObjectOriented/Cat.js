
export class Cat{
    constructor(name,breed,age,color){
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.color = color;
    }
     meow = () =>{
      console.log('MEOW');
     }

     sleep = () =>{
      console.log(`${this.name} is sleeping`);
     }
}