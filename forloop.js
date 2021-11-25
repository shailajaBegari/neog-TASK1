// for (i=0;i<=5;i++){
//     console.log(i,"My name is shailu")
// }

//question is sum of the numbers//


// var sum=0;
// const readlinesyc=require("readline-sync")
// for(i=1;i<=5;i++){
//     var user=readlinesyc.questionInt("enter the numbers:")
//     sum=sum+user
// }
// console.log("sum is:",sum);

//star pattern//

const readlinesyc=require("readline-sync")
var user=readlinesyc.questionInt("enter the numbers:")
var string="";
for(i=1;i<=user;i++){
    for(j=1;j<=i;j++){
        string=string+"*"
    }
    string=string+"\n"
}
console.log(string);