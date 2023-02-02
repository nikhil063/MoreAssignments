//Program to calculate the factorial of a number
let num = prompt("Enter a number: ")
let fact=1;
let i;
for(i = num; i>0; i--){
fact=fact*i;
}
if(fact == 0 || fact == 1){
     console.log(`Factorial is 1`)
}
else{
    console.log(`Factorial of ${num} is ${fact}`)
}