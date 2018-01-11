// Write your code in this file!
function scuberGreetingForFeet(lengthOfRideInFeet){
    if(lengthOfRideInFeet <= 400){
      return "This one is on me!";
    }
  if(lengthOfRideInFeet > 2000 && lengthOfRideInFeet < 2500){
    return "I will gladly take your thirty bucks.";
  }
  if(lengthOfRideInFeet > 2500){
    return "No can do.";
  }
}

function ternaryCheckCity(){
  //condition ? expr1 : expr2
  return NYC ? "Ok, sounds good." : "No go.";
}
