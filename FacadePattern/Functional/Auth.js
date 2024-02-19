// Subsystem or Auth Module

export const Auth = {
    login:(username,password)=>{
      console.log(`Logging in ${username} with password ${password}`);
      if(username ===1 && password ==='1222'){
        console.log('Login Sucessfull');
        return true;
      }
    
    },
    logout:()=>{
     console.log('Logging out');
    }
}