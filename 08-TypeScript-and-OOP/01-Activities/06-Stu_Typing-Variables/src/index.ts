let firstName: string;

firstName  = "tim";

let lastName: string;

lastName  = "johnson";

let fullName: string;

fullName  = firstName + " " + lastName;

let age: number;

age  = 22;

let jobTitle: string;

jobTitle  = "senior software engineer";

let salary: number;

salary  = 125000;

let remoteStatus: boolean;

remoteStatus = true; 

// * It's done when the employee information is logged to the console in a formatted template, 
//   listing the employee's name, age, job title, and salary.

// * It's done when if the employee's remote status is set to true, the sentence "EMPLOYEE_NAME 
//   is working remotely today" is displayed. Otherwise, display "EMPLOYEE_NAME is working from the office today."

    if(remoteStatus){
        console.log(fullName + " is working remotly today")
    }else{
        console.log(fullName + " is working from the office today.")
    }

// * It's done when I run the application; the employee's job title is changed, the salary is increased by `10000`,
//   and the employee information is displayed with the changes.


