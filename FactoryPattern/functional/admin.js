import { User } from "./user.js";


class Admin extends User{
    constructor(name){
        super(name);
    }
    
    managerUsers = () =>{
        console.log(`Admin ${this.name} can manage users.`);
    }
}





export default Admin;
