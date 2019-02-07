/**************
 * variables and data types*/ 
/*var firstName= 'John';
console.log(firstName); 

var lastName ='Smith';
var age=28;
var fullAge=true;
console.log(fullAge);

var job;
console.log(job);
job='teacher';
console.log(job);
*/

/**************
 * variable mutation and type coercion
  */
 /*var firstName='john';
 var age=28;
 //type coercion
 console.log(firstName + ' '+age);
 var job, isMarried;
 job='Teacher';
 isMarried=false;
 console.log(firstName+' is a '+age+' year old '+job+' is he married? '+isMarried);

 //variable mutation
 age='twenty eight';
 job = 'driver';
 alert(firstName+' is a '+age+' year old '+job+' is he married? '+isMarried);

 var lastName=prompt('what is his last name?');
 console.log(firstName+' '+lastName);
  */



 /******************
  * Basic Operator
  */
/* var now,yearJohn,yearMark;
now=2020;
ageJohn=28;
ageMark=33;
//math operator
yearJohn = now-ageJohn;
yearMark=now-ageMark;
 console.log(yearJohn);
console.log(now+2);
console.log(now*2);
console.log(now/10);


//logical operator
var johnOlder=ageJohn>ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'mark is older than john');
var x;
console.log(typeof x);
*/

/************
 * Operator precedence
 */
/*var now = 2018;
var yearJohn = 1989;
var fullAge =18;
//multiple operator
var isFullAge=now - yearJohn >= fullAge;
console.log(isFullAge);

//grouping
var ageJohn = now-yearJohn;
var ageMark=35;
var average=(ageJohn+ageMark)/2;
console.log(average);

//multiple assignments
var x,y;
x=y=(3+5)*4-6;
console.log(x+' '+y);

//More operators
x *=2;
console.log(x);
x+=10;
console.log(x);
*/

//coding challenge 1
/*
var markHeight=prompt("enter mark height in meter");
var markMass=prompt("enter mark mass in meter");
var johnHeight=prompt("enter john height in meter");
var johnMass=prompt("enter john mass in meter");
var markBMI=markMass/(markHeight*markHeight);
var johnBMI=johnMass/(johnHeight*johnHeight);
var compare=markHeight>johnHeight;
console.log("Is Mark's BMI higher than John's? "+ compare);
*/

/* ************
*if /else statement
*/

/*var firstName='John';
var civilStatus='single';

if (civilStatus ==='married')
{
  console.log(firstName+" is married");
}
else{
  console.log(firstName+" is not married");
}
*/


/* ************
* boolean logic
*/
/*var fisrtName ='John';
var age=16;
if(age<13)
{
  console.log(fisrtName+' is a boy' );
}
else if(age<20 &&age>13)
{
  console.log(fisrtName+' is a teenager' ); 
}
else
{
  console.log(fisrtName+' is a man' );  
}*/

/* ************
* The ternary operator and Switch Statements
*/

/*var firstName='John';
var age=19;

//ternary operator
age>=18 ? console.log(firstName+' drinks beer'):console.log(firstName+' drinks juice');

var drinks=age>=18 ? 'beer': 'juice';
console.log(drinks);

//Switch statement
var job='teacher';
switch(job)
{
  case 'teacher':
  console.log(job);
  break;
  case 'driver':
  console.log('driver');
}
*/


/* ************
* Truthy and Falsy values and equality operators
*/

//falsy values : undefined,null,0,'',NaN
//truthy values: not falsy values
/*var height=23;
console.log(height);
if(height||height===0)
{
  console.log('variable is defined');
}
else 
{
  console.log('variable has not been defined');
}

//equality operator does type coercion
if(height =='23')
{
  console.log('the == operator does type coercion');
}
*/

//coding challenge 2

/*var jTeam1=89;
var jTeam2=120;
var jTeam3=103;
var mTeam1=116;
var mTeam2=94;
var mTeam3=123;
var mrTeam1=97;
var mrTeam2=134;
var mrTeam3=105;
var jAvg=(jTeam1+jTeam2+jTeam3)/3;
var mAvg=(mTeam1+mTeam2+mTeam3)/3;
var mrAvg=(mrTeam1+mrTeam2+mrTeam3)/3;
console.log(jAvg+'   '+mAvg+'    '+mrAvg)
if(jAvg>mAvg&&jAvg>mrAvg)
{
  console.log('john team win with avg= '+jAvg);
}
else if(jAvg===mAvg&&jAvg===mrAvg)
{
  console.log('draw');
}
else if(mAvg>mrAvg)
{
  console.log('mike team win with avg= '+mAvg)
}
else{
  console.log('mary team win with avg='+mrAvg);
}
*/



/* ************
* Functions
*/

/*function calculateAge(birthYear)
{
  return 2018-birthYear;
}
var ageJohn=calculateAge(1990);
console.log(ageJohn);


function yearuntilRetirement(year ,firstName)
{
var age =calculateAge(year);
var retirement=65-age;
console.log(firstName +' retires in '+retirement+' years');
}
yearuntilRetirement(1990,'John');
*/



/* ************
* Function Statement and Expressions
*/
//function declaration
//function whatDoYouDO(job,firstName){}

//function expression
/*var whatDoYouDo=function(job,firstName)
{
switch(job)
{
  case 'teacher':
     return firstName + ' teacher';
  case 'driver':
  return firstName + ' driver';
  case 'designer':
  return firstName + ' designer';
  default:
  return firstName + ' something else';
}
}
console.log(whatDoYouDo('teacher','john'));
*/

/* ************
* Arrays
*/

//initialize new array
/*var names=['john','mark','jane'];
var years=new Array(1990,1969,1948);


console.log(names);
console.log(names[2]);
console.log(names.length);

//Mutate array data
names[1]='ben';
//names[5]='abc';
names[names.length]='mary';
console.log(names);
console.log(names);
*/


//different data types
/*var john=['john','Smith',1990,'teacher',false];

john.push('blue');//add at the end
john.unshift('Mr.');//add at the beginning
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));
console.log(john.indexOf(23));//if element is not present 
var isDesigner=john.indexOf('designer')===-1 ? 'john is not a designer' : 'john is a designer';
console.log(isDesigner);
*/


//coding challenge 3
/*var restaurant=[124,48,268];
var tip=new Array();
function calculateTip(amount)
{
if(amount<50)
return amount*.2;
else if(amount>=50&&amount>=200)
{
  return amount*.5;
}
else 
{
  return amount*.1;
}
}

tip.push(calculateTip(restaurant[0]));
tip.push(calculateTip(restaurant[1]));
tip.push(calculateTip(restaurant[2]));
console.log(tip);
var both=[tip[0]+restaurant[0],
            tip[1]+restaurant[1],
            tip[2]+restaurant[2]];
//console.log(tip[0]+restaurant[0]);
//console.log(tip[1]+restaurant[1]);
//console.log(tip[2]+restaurant[2]);
console.log(both);
*/


/***********
 * Objects and properties
 */
//object literal
/*var john ={
  firstName:'John',
  lastName:'Smith',
  birthYear:1990,
  family:['Jane','Mark','Bob','Emily'],
  job:'teacher',
  isMarried:false
};
console.log(john.firstName);
console.log(john['lastName']);
var x='birthYear';
console.log(john[x]);

john.job= 'designer';
john['isMarried']=true;
console.log(john);

//new object syntax
var jane=new Object();
jane.firstName='JAne';
jane.birthYear=1999;
jane['lastName']='Smith';
console.log(jane);
*/

/***********
 * Objects and methods
 */

/*var john ={
  firstName:'John',
  lastName:'Smith',
  birthYear:1990,
  family:['Jane','Mark','Bob','Emily'],
  job:'teacher',
  isMarried:false ,
  calcAge:function()
  {
    this.age= 2018-this.birthYear;
  }
};
john.calcAge();
console.log(john);
*/



//coding challenge 4

/*var john={
  name: 'john',
  height:1.30,
  mass:54,
  bmi:function(){
    return this.mass/(this.height*this.height);
  }
};
var mike={
  name: 'mike',
  height:1.20,
  mass:50,
  bmi:function(){
    return this.mass/(this.height*this.height);
  }
};
console.log(john.bmi());
console.log(mike.bmi());
if(john.bmi()>mike.bmi())
{
  console.log(john.name+' has highest bmi : '+john.bmi());
}
else if(john.bmi()===mike.bmi())
{
  console.log(john.name+' and '+mike.name +' has equal bmi : '+john.bmi());

}
else
{
  console.log(mike.name+' has highest bmi : '+mike.bmi());
 
}
*/

/**
 * loops and iteration
 */
//for loop
/*for(var i=0;i< 10;i++)
{
  console.log(i);
}

var john=['john','smith','designer',1990];
for(var i=0;i<john.length;i++)
{
console.log(john[i]);
}

//while loop
var i=0;
while(i<john.length)
{
console.log(john[i]);
i++;
}


//continue and break statements
var john=['john','smith',1990,'designer',false,'blue'];
for(var i=0;i<john.length;i++)
{
  if(typeof(john[i])!== 'string')
  continue;
 console.log(john[i]);
}
for(var i=0;i<john.length;i++)
{
  if(typeof(john[i])!== 'string')
  break;
 console.log(john[i]);
}
*/

//coding challenge 5
var obj={
  bill:[124,48,268,180,42],
  calcTip:function(){
    this.tip=[];
    this.final=[];
   for(var i=0;this.bill.length;i++)
   {
     var percentage;
     var bills=this.bill[i];
     if(bills<50)
     {
      percentage=.2;
     }
     else if(bills>=50 && bills<200)
     {
      percentage=.15;
     }
     else{
        percentage=.10;
     }
     this.tip[i]=bills*percentage;
     this.final[i]=bills+bills*percentage;
  }
}
}
obj.calcTip();
console.log(obj);
































