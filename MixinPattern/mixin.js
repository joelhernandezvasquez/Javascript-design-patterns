
class Employee {
    constructor(name,position,salary){
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

}
// here is the mixin

const setEmployeeFunctionality = {
    setSalary:(salary) =>{
        return salary * 1000;
    },
    setPosition:(position) =>{
        return `${position} at IPG Company`;
    }
}
// assign it here
Object.assign(Employee.prototype,setEmployeeFunctionality);

export default Employee




