var cost ;
function flowerPrice() {
var flower = prompt("What flower do you like"); 

switch (flower)
{
  case "rose" : 
    cost = " costs 210";
     break;
  case "daisy" : 
     cost = " costs 150";
     break;
  case "orchild" : 
     cost = " costs 30";
     break;
  default : 
     cost = "There is no such flower in our shop";
     break;
     
     
}
}
flowerPrice();
document.write(cost);