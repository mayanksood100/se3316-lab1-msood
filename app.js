let number = document.getElementById("inputnum");
let name = document.getElementById("name");
let letters = /^[a-zA-Z\s]+$/;
let lis = Array.from(document.querySelectorAll("li"));
let pokeNames = Array.from(document.querySelectorAll("h4"));
let spanNums = Array.from(document.querySelectorAll("span"));
let button1 = document.getElementById("bttn1");
let button2 = document.getElementById("bttn2");


button1.addEventListener('click', function(event){
    if (isNaN(number.value) || number.value < 1 || number.value > 20) {
        alert("Input Not Valid. Please enter a number between 1 and 20.");
        Event.stop(event);
       }
       for(let i=0; i<spanNums.length; i++){
        if(spanNums[i].textContent.indexOf(number.value)!=-1){
         lis[i].style.display = "block"
         alert("Pokemon: " + lis[i].textContent);
        }
        else{
         lis[i].style.display = "none"
        }
     }
       number.value = "";
});

button2.addEventListener('click', function(event){
    if(name.value.length <= 20 && name.value.match(letters)){
        console.log("You typed " +  name.value);
    }
    else if(name.value == ""){
        alert("Input is not valid. Please enter character A-Z or a-z only and shorter than 20 characters.");
        Event.stop(event);
    }
    else{
        alert("Input is not valid. Please enter character A-Z or a-z only and shorter than 20 characters.");
       Event.stop(event);
        
    }

    for(let i=0; i<pokeNames.length; i++ ){
        if(pokeNames[i].textContent.toLowerCase().indexOf(name.value.toLowerCase())!=-1){
          lis[i].style.display = "block"
          alert("Pokemon: " + lis[i].textContent);
        }
        else{
             lis[i].style.display = "none";
         }
    }

    name.value = "";
});

number.addEventListener("keyup", function(event) {
    if(event.keyCode === 13){
   document.getElementById("bttn1").click();
}
  });

  name.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
   document.getElementById("bttn2").click();
    }
});
