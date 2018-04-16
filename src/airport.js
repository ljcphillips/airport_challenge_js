var Airport = function (){};

Airport.prototype.hangar = []

Array.prototype.random = function(){
  return this[Math.floor(Math.random() * this.length)]
};

var weather = Airport.prototype.weather = ["stormy", "sunny", "sunny", "sunny"].random();




Airport.prototype.land = function(plane, weather = this.weather) {
  if (weather === 'stormy'){
    return 'unable to land plane'
  }
  else{
    this.hangar.push(plane)
  }
};

Airport.prototype.take_off = function(plane, weather = this.weather) {
  if (weather === 'stormy'){
    return 'unable to take off'
  }
  else{
    this.hangar.pop(plane)
  }
};






var Plane = function (){};
