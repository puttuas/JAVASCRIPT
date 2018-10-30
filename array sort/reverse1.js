// Create and display an array:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
    // First sort the array
    fruits.sort();
    // Then reverse it:
    fruits.reverse();
    document.getElementById("demo").innerHTML = fruits;
}