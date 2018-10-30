var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = myArrayMax(points);

function myArraymin(arr) {
    return Math.max.apply(null, arr);
}