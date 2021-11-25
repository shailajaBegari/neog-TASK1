
var readline=require("readline-sync");
const chalk = require('chalk');

var username=readline.question(chalk.bold.bgRedBright("WHATS YOUR NAME:"))
var score=0
console.log(chalk.bold.redBright(" WELLCOME TO  NEOG CAMP  "+chalk.bgCyanBright(username)))
function check(question,answer,options){
  console.log(chalk.bold.yellow(question))
  for(var i=0;i<options.length;i++){
  console.log(chalk.bold.cyanBright(i+1,options[i]))
}
  var useranswer=readline.questionInt(chalk.bold.magentaBright("Select your options:"))
  if (useranswer===currentquestion.answer){
    console.log(chalk.bold.green("you are right**"))
    console.log(chalk.bold.green("***CONGRATS***"))
    score++
  }
  else{
    console.log(chalk.bold.redBright("you are wrong"))
  }
    console.log(chalk.bold.redBright(" your currentscore "+score))
    console.log(chalk.yellow("**************"))
  }

  var questionBank=[
    {question:"Grand Central Terminal, Park Avenue, New York is the world",
    options:["largest railway station","highest railway station","longest railway station","None of the above"],
    answer:1
    
  },
  {
    question:" Who is the Father of our Nation?",
    options:["Nehrugi","Mahatma Gandhi","Ramanujan","All of the above"],
    answer:2
  },
  {
    question:" Who was the first President of India?",
    options:["Ambedkar","Gandhigi","Dr. Rajendra Prasad","None"],
    answer:3

  },{
      question:" Which is the most sensitive organ in our body?",
      options:["Mouth","Ear","Eyes","Skin"],
      answer:4
  },
  {
      question:" Who invented Computer?",
      options:["Charles Babbage","Thamasedision","Gelilio","None of these"],
      answer:1
  }
]
for (var i=0;i<questionBank.length;i++){
var currentquestion=questionBank[i]
check(currentquestion.question,currentquestion.answer,currentquestion.options)

}
var scorebank=[
  {name:"Shailaja",score:2
},{
  name:"Rani",score:3

}]
for (var i=0;i<scorebank.length;i++){
console.log(chalk.bold.cyan(scorebank[i].name,scorebank[i].score))
}
console.log(chalk.bold.magentaBright("If your get  high score send me a screenshot"))



