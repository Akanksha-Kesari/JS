//function constructor 
/*
var john={
    name:'john',
    yearOfBirth:1990,
    job:'teacher'
};
 //person is function constructor
var Person  = function (name,yearOfBirth,job)
{
   this.name=name;
   this.yearOfBirth=yearOfBirth;
   this.job=job;
   this.calcAge
}

Person.prototype.calcAge =function(){
    console.log(2016-this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';


//when we use new operator a empty object is created
//then constructor function i.e. person is called
// int he end the empty object is assinged to john
var john =new Person('John',1990,'teacher');

var jane=new Person('Jane',1969,'designer');
var mark=new Person('Mark',1948,'retired');
john.calcAge();
jane.calcAge();
mark.calcAge();
console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/



//Object.create
/*
var personProto = {
    claculateAge:function(){
        console.log(2016-yearOfBirth);
    }
};
var john=Object.create(personProto);
john.name='john';
john.yearOfBirth=1990;
john.job='teacher';

var jane=Object.create(personProto,{
    name:{ value:'Jane'},
    yearOfBirth:{value:1969},
    job:{value:'Designer'}
})
*/


//Primitives vs objects

//Primitives
/*var a=23;
var b=a;
a=46;
console.log(a+' '+ b);*/



//Objects
/*
var obj1={
    name:'john',
    age:26
};
var obj2=obj1;
obj1.age=30;
console.log(obj1.age); //30
console.log(obj2.age);  //30

//Functions
var age =27;
var obj={
    name:'johnas',
    city:'sjkfb'
};

function change(a,b){
    a=30;
    b.city='indore';
}
change(age,obj);
console.log(age);
console.log(obj.city);
*/


//////////////////////////////
//Passing function as arguments

/*var years=[1990,1965,1937,1986,1957];

function arrayCalc(arr,fn){
    var arrRes=[];
    for(var i=0;i<arr.length;i++)
    {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;

}

//callback function
function calcAge(el)
{
    return 2016-el;
}

function isFullAge(el)
{
    return el>=18;
}

function maxHeartRate(el)
{
    if(el>=18 && el<=81)
    {
    return Math.round(206.9-(0.67*el));
    }
    else{return -1;}
}

var ages=arrayCalc(years,calcAge);
var fullAge=arrayCalc(ages,isFullAge);
console.log(ages);
console.log(fullAge);
var rates =arrayCalc(ages,maxHeartRate);
console.log(rates);
*/

//////////////////////////////
//Function returning function
/*
function interviewQuestion(job)
{
    if(job ==='designer')
    {
        return function(name){
            console.log(name+' abcd ?');
        }
    }
    else if(job ==='teacher')
    {
        return function(name){
            console.log(name+' subject ?');
        }
    }else{
        return function(name){
            console.log("hello "+name);
        }
    }
}

var teacherQuestion=interviewQuestion('teacher');
teacherQuestion('john');
var designerQuestion=interviewQuestion('designer');
designerQuestion('mark');
//another way to call innner function
 interviewQuestion('teacher') ('jane');
 */

//Immediately Invoked Function Expressions (llFE)
/*function game(){
    var score=Math.random()*10;
    console.log(score>=5);
}
game();
*/

//this function behave as expression 
( function(){
    var score=Math.random()*10;
    console.log(score>=5); 
}
)();
//score can access outside (Data privacy)
//console.log(score);
( function(goodluck){
    var score=Math.random()*10;
    console.log(score>=5 - goodluck); 
}
)(5);
