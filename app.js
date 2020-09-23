//Declaring different variables and using the Document Object Model to retrieve essential elements of the HTML that are needed such as the two search boxes, the two buttons the lis, etc.
let number = document.getElementById("inputnum");
let name = document.getElementById("name");
let letters = /^[a-zA-Z\s]+$/;
let lis = Array.from(document.querySelectorAll("li"));
let pokeNames = Array.from(document.querySelectorAll("h4"));
let spanNums = Array.from(document.querySelectorAll("span"));
let button1 = document.getElementById("bttn1");
let button2 = document.getElementById("bttn2");
let tracker = 0;
let newSearch = document.createElement("div");
newSearch.id = "newDiv";

//Adding an Event Listener to the Number Search Button to validate the required criteria.
button1.addEventListener('click', function(event){
    if (isNaN(number.value) || number.value < 1 || number.value > 20) {
        number.value = "";
        alert("Input Not Valid. Please enter a number between 1 and 20.");
        Event.stop(event);
       }
       //If the number does follow the given criteria (being between 1 and 20), the for loop will try to find a match with the span tag, it will alert the users of all of the matches (with a max of 5) and show only those matches since all of the other li elements will have their style display set to none.

       for(let i=0; i<spanNums.length; i++){
       
        if(spanNums[i].textContent.indexOf(parseInt(number.value))!=-1 && tracker<5){
            tracker++;
            console.log("Tracker is " + tracker);
            
         lis[i].style.display = "block"
         alert("Pokemon: " + lis[i].textContent);

        }
        else{
         lis[i].style.display = "none"
        }
     }
       number.value = "";
});

//Adding an Event Listener to the Name Search Button to validate the required criteria.
button2.addEventListener('click', function(event){
    if(name.value.length <= 20 && name.value.match(letters)){
        console.log("You typed " +  name.value);
    }
    else if(name.value == ""){
        alert("Input is not valid. Please enter character A-Z or a-z only.");
        Event.stop(event);
    }
    else if(name.value.length>20){
        name.value = "";
        alert("Please enter a name shorter than 20 characters.");
        Event.stop(event);
    }
    else{
        name.value = "";
        alert("Input is not valid. Please enter character A-Z or a-z only.");
       Event.stop(event);
        
    }
    //If the name does follow the given criteria (only letters A-Z or a-z and being shorter than 20 characters), the for loop will try to find a match with the h4 tag which hold the names of all the Pokemon and it will alert the users of all of the matches (with a max of 5 again) and show only those matches since all of the other li elements will have their style display set to none.

    for(let i=0; i<pokeNames.length; i++ ){
        if(pokeNames[i].textContent.toLowerCase().indexOf(name.value.toLowerCase())!=-1 && tracker<5){
            tracker++;
          lis[i].style.display = "block"
          alert("Pokemon: " + lis[i].textContent);
        }
        else{
             lis[i].style.display = "none";
         }
    }

    name.value = "";
});


//This keyup eventlistener will cause the respective button to be clicked thus performing the same function as the button. Since the keycode is 13 which corresponds to the "Enter" key, this will only happen when the enter key is pressed on any of the two searchboxes. 

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
