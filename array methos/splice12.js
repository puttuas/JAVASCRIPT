var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = "Original Array:<br>" + fruits;
function myFunction() {
    fruits.splice(2, 0, "Lemon", "Kiwi");
    document.getElementById("demo2").innerHTML = "New Array:<br>" + fruits;
}