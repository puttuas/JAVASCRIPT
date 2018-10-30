var marks;
function test(i) {
    
    
    var i = prompt ("enter number");
     
    if (i < 550) {
      marks = "raju marks is better then visu";
    } 
    else {
         marks  ="visu marks is lower then raju";
    }
    
    
   document.getElementById("demo").innerHTML = marks;

}