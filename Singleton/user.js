import singletonUserStore from "./SingletonObjectOriented/UserSingleton.js";

console.log('user store singletion in usage');

console.log('Adding 3 users');
singletonUserStore.addUser({id:1,name:'Joel Hernandez'});
singletonUserStore.addUser({id:2,name:'Joel Santos'});
singletonUserStore.addUser({id:3,name:'Joel Vasquez'});

console.log(singletonUserStore.getUsers());

console.log('Removing 1 users');

singletonUserStore.removeUser(3);

console.log('Showing remaining users');

console.log(singletonUserStore.getUsers());





