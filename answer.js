function describeValue(value){
    return `${typeof value} | ${value ? "truthy" : "falsy"}`;
}
console.log (describeValue("Hello"));
console.log (describeValue(""));





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

console.log(getDayType("friday"));