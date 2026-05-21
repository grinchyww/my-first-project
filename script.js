function calculateCost() {

let transport = document.getElementById("transport").value;
let hotel = document.getElementById("hotel").value;
let food = document.getElementById("food").value;
let other = document.getElementById("other").value;

let total =
Number(transport) +
Number(hotel) +
Number(food) +
Number(other);

document.getElementById("result").innerText =
"Total Trip Cost: " + total + " BDT";

}


function searchDestination() {

let place =
document.getElementById("destinationInput")
.value
.toLowerCase();

let result = "";

if(place=="cox's bazar"){
result="Tourist Spots: Sea Beach, Himchori, Inani Beach";
}

else if(place=="sylhet"){
result="Tourist Spots: Ratargul, Jaflong";
}

else if(place=="bandarban"){
result="Tourist Spots: Nilgiri, Boga Lake";
}

else{
result="Destination not found";
}

document.getElementById("destinationResult")
.innerText=result;

}


function getWeather() {

let city =
document.getElementById("weatherInput").value;

let apiKey = "570932f6a6c814fbdc66db78e983c037";

fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
)

.then(response=>response.json())

.then(data=>{

if(data.cod!=200){

document.getElementById("weatherResult")
.innerText="City not found";

return;
}

document.getElementById("weatherResult")
.innerText=

"Temperature: "
+ data.main.temp
+ "°C | "
+ data.weather[0].description;

})

.catch(()=>{

document.getElementById("weatherResult")
.innerText="Unable to load weather";

});

}


function saveTrip(){

let place =
document.getElementById("tripPlace").value;

let budget =
document.getElementById("tripBudget").value;

if(place=="" || budget==""){

alert("Please fill all fields");

return;

}

let li=document.createElement("li");

li.innerText=
place + " - Budget: " + budget + " BDT";

document.getElementById("tripList")
.appendChild(li);

document.getElementById("tripPlace").value="";
document.getElementById("tripBudget").value="";

}


function toggleMode(){

document.body.classList.toggle("dark-mode");

}



let images=[

"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",

"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",

"https://images.unsplash.com/photo-1501785888041-af3ef285b470"

];

let index=0;


setInterval(function(){

let img=document.getElementById("slideImage");

if(img){

index++;

if(index>=images.length){

index=0;

}

img.src=images[index];

}

},3000);
