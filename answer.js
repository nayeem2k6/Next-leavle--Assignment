 
 
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


//Question 5 
const  getChaseVerdict =(target, scored, ballsLeft) =>{
    const runsNeeded = target -  scored;

    if (runsNeeded <= 0){
        return "Won";

    }
    if(ballsLeft <= 0){
        return "Lost";
    }


    const requiredRate = (runsNeeded / ballsLeft) * 6;

    let verdict;
    if (requiredRate <= 6){
        verdict = "comfortable";
    } else if (requiredRate <= 12){
        verdict = "Tough";
    } else{
        verdict = " Almost Impossible";
    }
    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};

console.log(getChaseVerdict (150,100,30));