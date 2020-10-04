//Declaring different variables and using the Document Object Model to retrieve essential elements of the HTML that are needed such as the two search boxes, the two buttons the lis, etc.
let numberBox = document.getElementById("inputnum");
let name = document.getElementById("name");
let letters = /^[a-zA-Z\s]+$/;
let lis = Array.from(document.querySelectorAll("li"));
let pokeNames = Array.from(document.querySelectorAll("h4"));
let spanNums = Array.from(document.querySelectorAll("span"));
let button1 = document.getElementById("bttn1");
let button2 = document.getElementById("bttn2");
let tracker = 0;
let images = Array.from(document.getElementsByTagName("img"));
let pokemonList = document.getElementById("pokemonList");


//Adding an Event Listener to the Number Search Button to validate the required criteria.
button1.addEventListener('click', function(event){
    if (isNaN(numberBox.value) || numberBox.value < 1 || numberBox.value > 20) {
        numberBox.value = "";
        alert("Input Not Valid. Please enter a number between 1 and 20.");
        Event.stop(event);
       }
       //If the number does follow the given criteria (being between 1 and 20), the for loop will try to find a match with the span tag, it will alert the users of all of the matches (with a max of 5) and show only those matches since all of the other li elements will have their style display set to none.

       for(let i=0; i<spanNums.length; i++){
       
        if(spanNums[i].textContent.indexOf(parseInt(numberBox.value))!=-1 && tracker<5){
            tracker++;
            console.log("Tracker is " + tracker);
            
         lis[i].style.display = "block"
         alert("Pokemon: " + lis[i].textContent);

        }
        else{
         lis[i].style.display = "none"
        }
     }
       numberBox.value = "";
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

numberBox.addEventListener("keyup", function(event) {
    if(event.keyCode === 13){
   document.getElementById("bttn1").click();
}
  });

  name.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
   document.getElementById("bttn2").click();
    }
});

//This function is used to display the pokemon div that match the number box criteria.

function displayNumberDiv(number, arr){

    //The "input" event will run every time the user changes the value of the number input box 
    numberBox.addEventListener("input", function(e){   
    
        let num = this.value;
    //This will call the "closeDiv" funtion and remove any elements in the div that don't match the criteria.
        closeDiv();                    
    
        if (!num) { return false;}
        let newSearch = document.createElement("div");   //Creating the new div.
        newSearch.id = "newDiv";                        //Giving it an id for the styling.
    
        for(let i=0; i<arr.length; i++){   

        /*If any digit of the number input matches the Pokemon's number, then an list will be created 
        and the images and stats of the correposnding pokemon will be appended to the new div.
        They will be appended and inserted before the first pokemon of the orignal unordered list of pokemon  */ 

            if (arr[i].textContent.indexOf(num)!=-1) {   
                let pokemonStats = document.createElement("li");
                pokemonStats.id = "pokemonStats";
                pokemonStats.appendChild(document.createTextNode(lis[i].textContent));
                let pokemonImages = (images[i].cloneNode(lis[i].childNodes[1].firstChild.nextSibling));
                newSearch.appendChild(pokemonImages);
                newSearch.appendChild(pokemonStats);
                pokemonList.insertBefore(newSearch, pokemonList.childNodes[0]);
            }
           
        }
     })
    
    };

    function displayNameDiv(name, arr){

        name.addEventListener("keyup", function(e){
        
            let val = this.value;
           closeDiv();
        
            if (!val) { return false;}
            let newSearch = document.createElement("div");
            newSearch.id = "newDiv";

            for(let i=0; i<arr.length; i++){

        /*If any characters of the name input matches the Pokemon's first character, then an list will be created 
        and the images and stats of the correposnding pokemon will be appended to the new div.
        They will be appended and inserted before the first pokemon of the orignal unordered list of pokemon  */ 
    
                    if(arr[i].toUpperCase().indexOf(val.toUpperCase())!=-1){
                    
                    let pokemonStats = document.createElement("li");
                    pokemonStats.id = "pokemonStats";
                    pokemonStats.appendChild(document.createTextNode(lis[i].textContent));
                    let pokemonImages = (images[i].cloneNode(lis[i].childNodes[1].firstChild.nextSibling));
                    newSearch.appendChild(pokemonImages);
                    newSearch.appendChild(pokemonStats);
                    pokemonList.insertBefore(newSearch, pokemonList.childNodes[0]);
                   
                }
            }
        })
        
        };

        /*This function will remove the elements (via the .removeChild method) appended to the div if either the name search does not match or the number search does not match.*/
        function closeDiv(elmnt) {
            var x = document.getElementById("newDiv");
              if (elmnt != x && (elmnt != name || elmnt!=numberBox)) {
                x.parentNode.removeChild(x);
              }
          };
        

    let pokemonNames = ["Bulbasaur", "Ivysaur", "Venasaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate"]; 
    
    //Invoking the function to display the div based on name and number search.
    displayNameDiv(document.getElementById("name"), pokemonNames);
    displayNumberDiv(document.getElementById("number"), spanNums);

    