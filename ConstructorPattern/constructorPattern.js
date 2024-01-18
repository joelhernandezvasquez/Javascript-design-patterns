

class Employee{
   
    constructor(name,role,salary){
     this.name = name;
     this.role = role;
     this.salary = salary;
   }

   showEmployeeInfo(){
    console.log(`Employee ${this.name} has the role of ${this.role} and he is currently earning ${this.salary} per year`)
   }
}

const developer =  new Employee('Joel Hernandez','Javascript Developer',70000);
developer.showEmployeeInfo(); 