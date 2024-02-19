import { User } from "./user.js";

class RegularUser extends User{
    constructor(name){
        super(name);
    }
    viewContent = () =>{
        console.log(`Regular user ${RegularUser.name} can view content.`);
    }
}
export default RegularUser;
