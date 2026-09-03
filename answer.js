 
 
//question 1

 function describeValue(value){
    return `${typeof value} | ${value ? "truthy" : "falsy"}`;
}


// console.log (describeValue("Hello"));
// console.log (describeValue(""));





// QUESTION 2 

function getDayType(day){
    switch(day){
        case "friday":
        case"saturday":
         return "weekend"; 


         case "sunday":
            case 'monday':
                return "weekday";
                case "tuesday":
                    case "wendesday":
                        case "thursday":
                            return "working Day";
                            default : 
                            return"invalid day";

    }
}

// console.log(getDayType("friday"));




//question 3
function validateUsername(username){
    if (username.langhth < 4){
        return "too Short";
    } else if (username.includes(" ")){
        return "No spaces allowed";
    }else if (username.toLowerCase().includes("admin")){
        return "Reserved Word";
    }else{
        return "Available";
    }
}

// console.log(validateUsername("admin123"));




//Question 4 


function getCngFare(distance, isNight = false, waitingMinutes = 0){
let fare = 50;
if (distance > 2){
    fare = fare + (distance  -2) * 15;

}
fare = fare + waitingMinutes * 2;
if (isNight){
fare = fare * 1.2;
}

return fare ;
}

// console.log(getCngFare(15, true, 5));