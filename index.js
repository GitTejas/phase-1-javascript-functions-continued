// code your solution here
function saturdayFun(activity = "roller-skate") {
       return `This Saturday, I want to ${activity}!`;
    }
saturdayFun()
// code your solution here
function mondayWork(monday= "go to the office") {
    return `This Monday, I will ${monday}.`
}

// code your solution here
function wrapAdjective(string="*") {
    return function(word="special") {
        return `You are ${string}${word}${string}!`
    }
}
wrapAdjective("%")("a dedicated programmer");