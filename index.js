// Your code here

function saturdayFun( activity = "roller-skate"){
  return(`This Saturday, I want to ${activity}!`);
}
saturdayFun();
saturdayFun("bathe my dog");


function mondayWork( act = "go to the office"){
  return(`This Monday, I will ${act}.`);
}
mondayWork();
mondayWork("work from home");

function wrapAdjective( symbol = "*"){
  return function(adjective="special"){
    return(`You are ${symbol}${adjective}${symbol}!`);
  };
}
wrapAdjective("a hard worker");
wrapAdjective("||")("a dedicated programmer");

let encouragingPromptFunction = wrapAdjective("||");
wrapAdjective("%")("a dedicated programmer");


 let Calculator = {add : function(x,y){return x+y;} ,
                   subtract: function(x,y){return x-y;} ,
                   multiply: function(x,y){return x*y;} ,
                   divide : function(x,y){return x/y;}
                   };
                   Calculator.add(1,3);
                   calculator.subtract(1,3);
                   calculator.divide(10,5);
                   calculator.multiply(1,3);
        
function actionApplyer(int , arr){
  let n = int
  
  for (let i=0; i<arr.length; i++)
   {n = arr[i](n)}
   return n
}




                   

