import { UserInfoFacade } from "./Facade.js";

 const data  = await UserInfoFacade.getUserData(1,'1222');
 console.log(data);