// // let Name = "John";     // Variable that can be reassigned
// // const age = 30;        // Constant variable that cannot be reassigned
// // var isStudent = true;  // Older way to declare variables, function-scoped


// // console.log(Name);
// // console.log(age);
// // console.log(isStudent);

// // // Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like pizza. 
// // // Use appropriate variable declarations (let, const, or var). Try logging it using console.log
// // let color = "Pink";
// // let height = 169;
// // let DoYouLikePizza = false;

// // console.log(color);
// // console.log(height);

// // let users = ["harkirat", "atul", "nakul"];
// // console.log(users[2]);


// // function greet(name){
// //     return "Hello, "+name;
// // }

// // let ans = greet("Harkirat");
// // console.log(ans);


// function sum_1ToN( a, b){
//     let sum = 0;
//     let x = a;
//     for(let i=a; i<=b; i++){
//         sum += i;
//     }
//     return sum;
// }

// // console.log(sum_1ToN(12,13));


// let users = ["Atul", "Aashi", "Kapil", "Nakul", "Shubham", "Rashi"]



// let user1 = {
//     Name: "Atul",
//     Age: 25,
//     Gender: "male"
// }

// // console.log(user1.Name);
// // console.log(user1["Name"]);
// // console.log(user1["Age"]);
// // console.log(user1["Gender"]);

// function greet(user){
//     if(user.Gender == "male"){
//         console.log("Hi, Mr. "+user.Name+" your age is: "+user.Age);
//     }
//     else{
//         console.log("Hi, Mrs. "+user.Name+" your age is: "+user.Age);
//     }

//     if(user.Age>=18){
//         console.log("You are eligible to vote.");
//     }
//     else{
//         console.log("You are not eligible to vote.");
//     }
// }

// greet(user1);




// let Users = [{
//     Name: "Atul", 
//     Age: 25,
//     Gender: "male"
// }, {
//     Name: "Harkirat",
//     Age: 29,
//     Gender: "male"
// }, {
//     Name: "Parth",
//     Age: 11,
//     Gender: "male"
// }, {
//     Name: "Shruti",
//     Age: 34,
//     Gender: "female"
// }];


// function legalAgeMembers(Users){
//     let legalAgeUsers = Users.filter(user => user.Age >= 18 && user.Gender === "male");
    
//     return legalAgeUsers;
// }

// console.log(legalAgeMembers(Users));



let nums = [3,2,2,3];
let _val = 3;

let removeElement = function(nums, _val) {
    console.log("This function is running");
    let k = 0;
    
    let start=0;
    let end = nums.length;

    while(start<end){
        if(nums[start] === 2 && nums[end] != 2){
            console.log(nums[start]+ " " + nums[end]);
            let temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
        }
        else if(nums[start] != 2 && nums[end] == 2){
            start++;
            end--;
        }
        else if(nums[start] !=2 && nums[end]!=2){
            start++;
        }
        else if(nums[start] == 2 && nums[end]==2){
            end--;
        }
    }
    k = start+1;
    return k;
};