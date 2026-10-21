// // Practicing for string literal union types
// type Status = "loading" | "success" | "error";

// let currentStatus: Status = "loading";
// console.log("Status is now at",currentStatus,"...")
// const updateStatus = function (statusChanger: ()=>void){
//   setTimeout(statusChanger,2000);
// }

// function statusChanger() { 
//     console.clear();
//     console.log("Status changed to success","...");
//   updateStatus(statusChangerError);
// }

// function statusChangerError(){
//   console.clear();
//   console.log("Status changed to Error","...");
// }

// updateStatus(statusChanger);

// // unknown type vs any type practice 

// let a: unknown = "hello";

// console.log(a.toUpperCase()); // HELLO
// console.log(a.toFixed());     // Runtime error!

// interface practice (define the shape of the object)

interface User {
    name : string;
    id : number;
};

const user: User ={
    name : "John",
    id :1
};

console.log(user);


