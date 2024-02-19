// Subsystem or Comments Module
export const Comments = {
    getUserComments:async() =>{
      try{
        const request = await fetch('https://jsonplaceholder.typicode.com/comments');
        if(!request.ok){
            throw new Error('Failed while fetching comments');
        }

        return await request.json();
      } 
      catch(error){
         throw new Error(error.message);
      } 
    }
}