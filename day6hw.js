
//Q1)adding 1+1 
var a = 1
var a = 1;{
	console.log(a+b)
}
//Q2)making hot chocolate basically
var a = "hot"
var b = "chocolate";{
	console.log(a+b)
}

//Q3)logging myArray at index 0 an 2 to return cooking and xsumi
var myArr = ["cooking","coding","xsumi"];{
	console.log(myArr[0];myArr[2])
}

//or (just learned I could do it both ways is all I was showing)

var myArr = ["cooking","coding","xsumi"];{
	console.log(myArr[0]);
	console.log(myArr[2]);
}
//Q4)prompt asks question and if less than or greater than gives an answer based on that
var mitch = prompt("give me a number, now MITCH!!")
if(mitch < 100){alert("that's less than 100, you stoopid MITCH")}
else if(mitch > 100){alert( mitch + " is more than 100 MITCH!!!")}
else{alert("try again MITCH!!!")}
// question 4.) because I put an else statement it ran an else. 
//if I hadn't put an else statement it would've returned nothing. 

//just teasing my girlfriend ;)
var xsumi = prompt("is xsumi annoying right now?")
if (xsumi === "yes"){alert("yes she is incredibly annoying right meow")}
else if(xsumi === "no"){alert("why you always lyin?")}
else{alert("what are you smokin pay attention to the question stoopid!!")}

// Q5)if my prompt sameAs === hello Im told to have a mellow day maaaan if anything else it returns where are your manners 
var sameAs = prompt("hello")
if(sameAs === "hello"){alert("have a mellow day")}
else{alert("where are you from?, do they not have manners there?")}	

//Q6) declaring a function called sayMyName and logging the parameter (name) so when calling the function sayMyName and whatever name you input it returns that name
var entry = prompt("say my name mitch")

function sayMyName(name){
	console.log(name)
} 
sayMyName(entry)





//Q7) function name has no argument(or parameter) console.log or return will return the value assigned
function name(){
   //console.log ("ok")
 
   return "ok"
 }
 name()

// here calling my function door if the argument (number) is 1 id win a juicy hot dawg if 2 a pony if 3 an infamous fidget spinner!!yay 
function door(number){
   if(number===1){
     console.log("you win a sabrett hot dawg")
   }
   else if(number===2){
     console.log("congrats you win a pony!")
     }
     else if(number===3){
       console.log("you win a fidget, they're all the rave kids!")
     }
 }




