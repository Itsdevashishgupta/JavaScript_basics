var age=10
if(age>=65){
    console.log("You get your income from your pension")
}
else if(age<65 && age>=18){
    console.log("Each month you get a salary")
}
else if(age<18){
    console.log("You get allowance")
}
else{
    console.log("The value of the age variable is not numerical")
}

var day="Sunday"
switch(day){
    case "Monday":
        console.log("Do somthing")
        break;
    case "Tuesday":
        console.log("Do somthing")
        break;
    
    case "Wednesday":
        console.log("Do somthing")
        break;
    
    case "Thursday":
        console.log("Do somthing")
        break;
    
    case "Friday":
        console.log("Do somthing")
        break;
    
    case "Saturday":
        console.log("Do somthing")
        break;
    
    case "Sunday":
        console.log("Do somthing")
        break;
    default:
        console.log("There is no such day")
    }