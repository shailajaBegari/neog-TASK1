console.log("shailaja")
const readlinesyc=require("readline-sync")
const name=readlinesyc.question("Enter the name::")
console.log(name)

var wellcome="WELL COME"+" "+name
console.log(wellcome)


const question="AM I OLDER THAN 25?::"
const AMIOLDERTHAN25="yes"

const userage=readlinesyc.question(question)
var score=0
if (userage===AMIOLDERTHAN25){
    console.log("Ye your Right")
    score++
    console.log("Score is ",score)
}else{
    console.log("YOUR WRONG")
    score--
    console.log("Score is ",score)
}
console.log("****************************")

const question1="AM FROM CITY OF BANGLLORE?::"
const iscity="no"
const usercity=readlinesyc.question(question1)

if (usercity===iscity){
    console.log("Ye your Right")
    score++
    console.log("Score is ",score)
}else{
    console.log("YOUR WRONG")
    score--
    console.log("Score is ",score)
}

console.log("**********************************")
const readlinesyc=require("readline-sync")
var score=0
function  play(question,answer){
    const userage=readlinesyc.question(question)

if (userage===answer){
        console.log("Ye your Right")
        score++
        console.log("Score is ",score)
    }else{
        console.log("YOUR WRONG")
        score--
        console.log("Score is ",score)
    }
}
play("AM I OLDER THAN 25?::","yes")
console.log("****************************")
play("AM FROM CITY OF BANGLLORE?::","no")
console.log("****************************")









