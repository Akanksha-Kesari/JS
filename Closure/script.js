///////////////////
//Closure
//an inner function has always acces to
//the variables and parameters of its outer 
//function,even after the outer function has returned
/*
function retirement(retirementAge)
{
    var a=" years left until retirement";
    return function(yearOfBirth)
    {
      var age=2016-yearOfBirth;
      console.log((retirementAge-age)+  a);
    
}
}
var retirementUS=retirement(66);
retirementUS(1990);
var retirementGermany=retirement(65);
var retirementIceland=retirement(67);
retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);


//retirement(66)(1990);
*/





///////////////////////
//bind, call and apply
var john={
    name:'John',
    age:26,
    job:'teacher',
    presentation: function(style,timeOfDay)
    {
     if (style==='formal')
     {
         console.log('good '+timeOfDay +'ladies and gentleman !')
     }
    }
}