 let num  = prompt("Enter a number");

//  if(num % 5 === 0){
//     console.log(num + " is multiple of 5");
//  }else{
//     console.log(num + "i s not multiple of 5");
//  }

if(num <= 100){
    console.log(num + " Students grade is A");
} else if(num <= 80){
    console.log(num + " Students grade is B");
}else if(num <= 60){
    console.log(num + " Students grade is C");
}else if (num <= 50){
    console.log(num + " Students grade is D");
}else if(num <= 40){
    console.log(num + " students grade is E");
}else{
    console.log(num + " students grade is F");
}