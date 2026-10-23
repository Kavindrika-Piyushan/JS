// console.log("why var cause to unexpected errors when use loops")


// const checkUser = new Promise((resolve,reject)=>{
//        const userExist = false;
//      if(userExist){
//         resolve("User Found");
//        }
//       else{
//          reject("User not found");
//         }

// })


// checkUser.then((result)=>{
//      console.log(result);
// })
// .catch((error)=>{
//  console.log(error);
// });






// fetch("https://jsonplaceholder.typicode.com/users/1")
// .then((response)=>{
//    console.log("response ::::: ",response);
// })
// .catch((error)=>{
//  console.log("error :::::", error);
// });



// const tryApiCalling = async ()=> {
//     try{
//       const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    
//     console.log("Response :::::", response);
    
// }
//  catch(error){
//     console.log("Error :::::", error)
// };
// }


// tryApiCalling();


// Assyncronous code execution order

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

function clickMe(){
    document.getElementById("btn1").innerHTML = "I have changed";

}



function change(){document.getElementById("btn2").addEventListener("click",changebtn2WithAddEventListener);}
function changebtn2WithAddEventListener(){
    console.log("I have changed with addEventListener");
    document.getElementById("btn2").innerHTML = "I have changed with addEventListener";
}
change();

// This is for checking git reset --soft HEAD~1


// This to check ruleset in the github to prevent merge to main branch without PR and review