
let instance;
let userData = [];

class UserStore{

    constructor(){
        if(instance){
          throw error('Error: it can only be one instance of UserStore');
        }

        instance = this;
    }

    addUser(user) {
     userData = [...userData,user];
    }

    removeUser(userId){
        userData =  userData.filter((user)=> user.id!==userId)
    }
    getUsers(){
        return userData;
    }
}

const singletonUserStore = Object.freeze(new UserStore());
export default singletonUserStore;