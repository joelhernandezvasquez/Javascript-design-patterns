import { User } from "./user.js";

class Moderator extends User{
    constructor(name){
        super(name)
    }

    moderateContent = () =>{
        console.log(`Moderator ${Moderator.name} can moderate content.`);
    }
}


export default Moderator;
