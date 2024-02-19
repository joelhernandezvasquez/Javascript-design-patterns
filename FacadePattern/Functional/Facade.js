import { Users } from "./Users.js";
import { Post } from "./Posts.js";
import { Comments } from "./Comments.js";
import { Auth } from "./Auth.js";

// console.log(await Users.getUsersList(1)); 
// console.log(await Post.getPosts(1));
// console.log(await Comments.getUserComments());


// So creating a facade for the client that will authenticate the Users, will obtain user info, will pull all post and comments to that user 
// connecting 4 modules togther in only one function making it easy for the client to use instead of having to call 4 different modules to obtain the info


/*
1 - need to authenticate the user
2- need to pull user Info
3 - pull posts
4 pull comments 
5 return all the data maybe in one object.
*/
export const UserInfoFacade = {
    getUserData:async(userId,password) =>{
        if(Auth.login(userId,password)){
          const user = await Users.getUserInfo(userId);
          const [posts,comments] = await Promise.all([Post.getPosts(user.id),Comments.getUserComments(user.id)]);
         
          return{
            user,
            posts,
            comments
          }

        }  
    }
}