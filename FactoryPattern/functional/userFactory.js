// Clases for the factory
import Admin from './admin.js';
import Moderator from './moderator.js';
import RegularUser from './regularUser.js';

export class userFactory {
  createUser = (name,role) =>{
    switch (role) {
        case 'admin':
          return new Admin(name);
        case 'moderator':
          return new Moderator(name);
        default:
          return new RegularUser(name);
      }
  }
  
}