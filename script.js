// Variable declaration
let Mercury = {name: "Mercury", inner: true, diameter: 3031.9, color: "#696969"};
let Venus = {name: "Venus", inner: true, diameter: 7520.8, color: "#b89165"};
let Earth = {name: "Earth", inner: true, diameter: 7917.5, color: "#5a5b86"};
let Mars = {name: "Mars", inner: true, diameter: 4212.3, color: "#df8c4e"};
let Jupiter = {name: "Jupiter", inner: false, diameter: 86881, color: "#f6a049"};
let Saturn = {name: "Saturn", inner: false, diameter: 72367, color: "#dcd3a1"};
let Uranus = {name: "Uranus", inner: false, diameter: 31518, color: "#b4d9df"};
let Neptune = {name: "Neptune", inner: false, diameter: 30599, color: "#456eff"};

// Array containing planet objects
let planets = [
    Mercury,
    Venus,
    Earth,
    Mars,
    Jupiter,
    Saturn,
    Uranus,
    Neptune
];

planets.forEach(p => console.log(p.name))

//Calculate the average diameter of all planets
function averageDiameter(){
    let count = 0;
    let total = 0;
    planets.forEach(p => {
        total += p.diameter;
        count++;
        console.log(total);
        console.log(count);
    });
    
   return (total / count);
}


let planetsDiameter = averageDiameter();
console.log(planetsDiameter);

let index = 0;

let countNode = document.querySelector("#counter");
countNode.innerText = index;

//Functions that increment and decrement index value respectively
function incrementIndex(){
    if(index < planets.length - 1){
        index++;
        console.log(index);
        countNode.innerText = index;
        updatePlanetDisplay();
    }
}

function decrementIndex(){
    if (index > 0){
        index--;
        console.log(index);
        countNode.innerText = index;
        updatePlanetDisplay();
    }
}

let nameNode = document.querySelector("#planetName");
let innerNode = document.querySelector("#inner");
let planetNode = document.querySelector(".planet");

//Updates the respective values to match the appropriate planet
function updatePlanetDisplay(){
    let size = planets[index].diameter / 100
    if(planets[index].inner === true){
        innerNode.innerText = "Inner Planet";
    }
    else{
        innerNode.innerText = "Outer Planet";
    }
    planetNode.style.width = `${size}px`;
    planetNode.style.height = `${size}px`;
    planetNode.style.backgroundColor = planets[index].color;
    nameDisplay = planets[index].name;
    nameNode.innerText = nameDisplay;
}
window.onload = function(){
    updatePlanetDisplay();
}
