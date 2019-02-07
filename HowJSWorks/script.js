/////////////////////////////////////
//lecture : hoisting

//functions
/*calcAge(1990);
function calcAge(year)
{
    console.log(2018-year);
}
//calcAge(1990);



//function expression
//retirement (1990);

var retirement=function(year)
{
    console.log(65-(2016-year));
}
retirement(1990);



//variables 
console.log(age);
var age=23;
//console.log(age);

function foo(){
    var age=65;
    console.log(age);
}
foo();
console.log(age);
*/

//////////////////////////////////////
//Lecture Scoping 

/*var a='hello';
first();

function first(){
    var b='hi';
    second();

    function second(){
        var c='hey';
        console.log(a+b+c);
        third();
    
    }
}
function third()
{    d='abc';
    console.log(a+d);
}
*/


//////////////////////
//this keyword
//console.log(this); //window object
/*
calcAge(1985);
function calcAge(year){
    console.log(2018-year);
    console.log(this);
}
var john={
    name :'john',
    birth:1990,
    
    calcAge:function(){
        console.log(this);
        console.log(2016-this.birth);
  */               
/*
        function inner()
        {
            console.log(this);
        }
        inner();
        *//*
    }
}
john.calcAge();
var mike={
    name:'mike',
    birth:1984,
};
mike.calcAge=john.calcAge;
mike.calcAge();
*/

























