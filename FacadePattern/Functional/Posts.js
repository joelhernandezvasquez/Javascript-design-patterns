// Subsystem or Post Module
export const Post = {
   getPosts:async (userId)=>{
     try{
      const request = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      if(!request.ok){
         throw new Error('Failed while fetching Users posts');
      }
      const response = await request.json();
      return response; 
     }
     catch(error){
      throw new Error(error.message);
     }
    }
   
}