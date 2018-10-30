var marks;
function test(i) {
    
    
    var i = prompt ("enter number");
     
    if (i < 550) {
      marks = "rajumarks is better then sruthi";
    } 
    
    else if (i = 550) {
         marks  ="sruthi marks is equal to  raju marks";
         
    }
    else  {
    marks = "sruthi marks is better  then rani ";
    
    }
    
   document.getElementById("demo").innerHTML = marks;

}