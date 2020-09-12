let number = document.getElementById("inputnum");
let button1 = document.getElementById("bttn1");


button1.addEventListener('click', function(){
    if (isNaN(number.value) || number.value < 1 || number.value > 20) {
        alert("Input Not Valid. Please enter a number between 1 and 20.");
       }
       number.value = "";
});