document.write("<h3 style='color:blue;'>Javascript Rules!</h3>");
document.write("<hr>");
document.write("<span style='background-color:aqua;'>hoselu</span>");
document.write("<hr>");
//VARIABLES $ STRINGS
var phrase="keep moving forward";
document.write(phrase.length);
document.write(phrase.toUpperCase());
document.write("<br>");
phrase="hoselu";
document.write(phrase.charAt(3));
document.write("<br>");
phrase="brian ";
document.write(phrase.substring(0,3));
document.write("<br>");
var age="23";
var gpa="5.9";
var isMale="true";
document.write(age,gpa, isMale);
document.write("<br>");
var cool = "You are great";
document.write(cool.substring(cool.indexOf("a"), cool.length));
document.write("<br>");
document.write(cool.endsWith("greato"));
document.write("<br>");
document.write(phrase + cool);
document.write("<br>");
//MATHS
document.write(3);
var number=2
document.write("<br>");
document.write(Math.abs(number));
document.write("<br>");
document.write(Math.max(number, 6));
document.write("<br>");
document.write(Math.round(number));
document.write("<br>");
document.write(Math.pow(number, 3));
document.write("<br>");
document.write(Math.random() *10);
document.write("<br>");
document.write(Math.round(Math.random() *10));
//GETTING USER INPUTS
var name=window.prompt("What is your name?");
var age=window.prompt("How old are you?")
document.write("Hey " + name + ", how are you today? do you like being " + age + " years old?");
//BASIC CALCULATOR
var num1=window.prompt("Enter first number: ");
var num2=window.prompt("Enter second number: ");
num1=parseFloat(num1);
num2=parseFloat(num2);
document.write(num1 + num2);
//ARRAYS
var fruits=["Apples", "Oranges", "Bananas", "Peaches"];
fruits[2]="Mangoes"
document.write(fruits[2]);
document.write("<br>");
document.write(fruits.length);
document.write("<br>");
var habits = "good, bad, neutral";
habits=habits.split(",");
document.write(habits);
//FUNCTIONS
function sayHi(name, age){
    document.write("<h1>Hello " + name + "</h1>");
    document.write("<p>You are " + age + "<p>");
}
sayHi("Brian", 24);
sayHi("Naomi", 12);
sayHi("Steve", 25);

document.write("<br>")

function addition(num1, num2){
    return num1 + num2;
}
document.write( addition(4, 5));

//ACCESSING HTML ELEMENTS
var header=document.getElementById("header");
header.innerHTML="BRIAN HOSELU";  //changing what is inside the header
header.style.color="orange";  //styling
header.style.backgroundColor="aqua";
//EVENT LISTENERS OR TRIGGER EVENTS
function handleClick(element){
   element.innerHTML="CLICKED"
   element.style="background-color:blue;"
}

var image=document.getElementById("image");
image.addEventListener("mouseover", function(){
    this.style="box-shadow:2px 2px 2px grey";
    this.width="150"
});

image.addEventListener("mouseout", function(){
    this.width="130"
});

//BUILDING A MESSAGING APP
var messages=document.getElementById("messages");
var textbox=document.getElementById("textbox");
var button=document.getElementById("button");

button.addEventListener("click", function(){
    var newMessage=document.createElement("li");
    newMessage.innerHTML=textbox.value;
    messages.appendChild(newMessage);
    textbox.value="";
});

//IF STATEMENTS
var isMale= false;
var isTall= false;
if(isMale && isTall){   //you use also the || or operator(one conditions has to be true)
    document.write("You are a tall male");
} else if( isMale&& !isTall){  // ! stands for not condition
    document.write("You are a short male");
} else if( !isMale && isTall){
    document.write("You are not male but tall");
} else {
    document.write("You are not male and not tall")
}
document.write("<br>");
// COMPARISONS USING IF STATEMENTS
function max(num1, num2, num3){
    if(num1>=num2 && num1>=num3){
        return num1;
    } else if(num2>=num1 && num2>=num3){
        return num2;
    } else {
        return num3;
    }
}
document.write(max(30, 10, 5)); 

//SWITCH STATEMENTS
function getDayName(dayNum){
    var day;
    switch(dayNum){
        case 0:
            day="Sunday";
            break;
        case 1:
            day="Monday";
            break;
        case 2:
            day="Teusday";
            break;
        case 3:
            day="Wednesday";
            break;
        case 4:
            day="Thursday";
            break;
        case 5:
            day="Friday";
            break;
        case 6:
            day="Saturday";    
        default:
            day="Day doesn't exists " + dayNum + " isn't a valid number";  //what will be excuted if the number printed isnt valid               
    }
    return day;
}
document.write(getDayName(27)); 

//OBJECTS
var person={
    name:"Hoselu",
    age:24,
    IsMale:true,
    Occupation:"Data Analyst",
    gpa:3.9,
    printName: function(){     //You can use functions inside the Object
        document.write("<h1>" + this.name + "</h1>");
    }
};
person.printName();

//REAL WORLD OBJECTS
var myMovie={
    title:"Mechanic Resurection",
    releaseYear:"2016",
    duration:2.0,
    actors:[
        {
            name:"Jason Statham",
            birthday: new Date("July 26, 1967"),
            hometown:"Shirebrook, United Kingdom"
        },
        {
            name:"Jessica Alba",
            birthday: new Date("April 28, 1981"),
            hometown:"Pomona, United Kingdom"
        },
    ]
}
document.write(myMovie.actors[1].name);
document.write("<br>");
document.write(myMovie.actors[1].birthday);

//WHILE LOOPS
var i = 1;
while(i <= 10){
    document.write(i + "<br>");
    i++;
}

var i =11;
do{
    document.write(i + "<br>");
    i++;
}while(i<=10)

//BUILDING A PASSWORD CHECKER
var password="Hoselu";
var response;
var entryCount=0;
var entryLimit=3;
var error=false;

while(response !=password && !error){
    if(entryCount < entryLimit){
        response=window.prompt("Enter Password");
        entryCount++;
    }else{
        error=true;
    }
}
if(error){
    alert("Too Many Entries!");
}else{
    alert("Success");
}

//FOR LOOPS
for(var i=0; i<10; i++){
    document.write(i + "<br>")
}
document.write("<br>")

var friends=["Jimmy", "Steve" , "Kevin"];
for(var i = 0; i < friends.length; i++){
    document.write(friends[i] + "<br>")
}

//BUILDING A MULTIPLE CHOICE QUIZ

var questions = [
    {
          prompt: "What color are apples?\n (a) Red/Green\n (b) Purple\n (c) Orange",
          answer: "a"
    },
    {
         prompt: "What color are Bananas?\n (a) Teal\n (b) Magenta\n (c) Yellow",
         answer: "c"
    },
    {
         prompt: "What color are strawberries?\n (a) Yellow\n (b) Red\n (c) Blue",
         answer: "b"
    }
];
var score = 0;

for(var i = 0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
         score++;
         alert("Correct!");
    } else {
         alert("WRONG!");
    }
}
alert("you got " + score + "/" + questions.length);

//NESTED LOOPS AND 2D ARRAYS

//2D ARRAYS
 var numberGrid =[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0]
 ];
document.write(numberGrid[1][1]); //accessing elements

 //NESTED LOOPS
for(var i = 0; i < numberGrid.length; i++){
     for(var j = 0; j < numberGrid[i].length; j++){
          document.write(numberGrid[i][j]);
     }
     document.write("<br>");
}

//FOR EACH LOOP
var books=[
    {
        title:"Atomic Habits",
        Author:"James Clear",
        pages:282
    },
    {
        title:"Mindset",
        Author:"Dr Dweck",
        pages:200
    }
]
var friends=["Oxar", "Kevin", "Brian"];


books.forEach(function(book){
    document.write(book.Author + "<br>")
    document.write(book.title + "<br>")
    document.write(book.pages + "<br><br>")
})

//TIMING    that is setTimeOUt and setInterval
function sayHi(){
    alert("Hey");
}*/

//WEB STORAGE
var textbox=document.getElementById("textbox");
var button=document.getElementById("btn");

button.addEventListener("click", function(){
    localStorage.name=textbox.value;
});
document.write(localStorage.name);






