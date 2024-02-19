
// Subsystem or User Module
export const Users = {
    getUserInfo:async(userId)=>{
     try{
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      if(!response.ok){
        throw new Error('Failed when fethching users');
      }
      const data = await response.json();
      return data
     }
     catch(error){
       console.log(error);
     }
    }
}