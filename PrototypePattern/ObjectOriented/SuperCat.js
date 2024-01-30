
import { Cat } from "./Cat.js";

export class SuperCat extends Cat {
    constructor(name,breed,age,color){
     super(name,breed,age,color)
    }

    fly(){
     console.log(`The super Cat ${this.name} fly..`);
    }

    land(){
        console.log(`The super Cat ${this.name} Land`);
    }


}