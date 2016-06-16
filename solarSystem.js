//make a solar system constructor that can add planets and show the array
var planet = require('./planet').planet;

//ricks solution
// varSolarSystem = function(name){
//   this.name = name;
//   this.planets = [];

//   this.addPlanet =  function(planet){
//     this.planets.push(planet);
//   }
// }


//this is a constructor and it always takes a capital letter
var SolarSystem = function(){
  this.name = "milkyway";
  this.planets = [];

  this.addPlanet = function(planet){
    this.planets.push(planet);
  }

};



module.exports.solarSystem = SolarSystem;