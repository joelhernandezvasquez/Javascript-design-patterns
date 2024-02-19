
import { userFactory } from "./userFactory.js";

const factory = new userFactory();
const adminUser = factory.createUser('Admin User', 'admin');
const moderatorUser = factory.createUser('Moderator User', 'moderator');
const regularUser = factory.createUser('Regular User', 'regular');

adminUser.greet(); // Output: Hello, Admin User!
adminUser.managerUsers()// Output: Admin Admin User can manage users.

 moderatorUser.greet(); // Output: Hello, Moderator User!
 moderatorUser.moderateContent(); // Output: Moderator Moderator User can moderate content.

regularUser.greet(); // Output: Hello, Regular User!
regularUser.viewContent(); //