///coding challenge 5
/*
var obj={
    bills:[124,48,268,180,42],
    calcTip:function()
    {
        this.tip=[];
        this.final=[];
        for(var i=0;i<this.bills.length;i++)
        {
            var bill=this.bills[i];
            var percentage;
            if(bill<50)
            percentage=.2;
            else if(bill>50&&bill<200)
            percentage=.15;
            else
            percentage=.1;
            this.tip[i]=bill*percentage;
        this.final[i]=bill+(bill*percentage); 
           }
    }
}
obj.calcTip();
console.log(obj);
var obj1={
    bills:[77,375,110,45],
    calcTip:function()
    {
        this.tip=[];
        this.final=[];
        for(var i=0;i<this.bills.length;i++)
        {
            var bill=this.bills[i];
            var percentage;
            if(bill<100)
            percentage=.2;
            else if(bill>100&&bill<300)
            percentage=.10;
            else
            percentage=.25;
            this.tip[i]=bill*percentage;
        this.final[i]=bill+(bill*percentage); 
           }
    }
}

function calcAvg(tip){
    var sum =0;
   for(var i=0;i<tip.length;i++)
   {
        sum=sum+tip[i];
   }
   return sum/tip.length();
} 

obj1.calcTip();
console.log(obj1);
*/

 





