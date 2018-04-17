

function Airport(weather = ["stormy", "sunny", "sunny", "sunny"].random()){
  this.hangar = []
  this.weather = weather
};

function Plane(){

};

Array.prototype.random = function(){
  return this[Math.floor(Math.random() * this.length)]
};



Airport.prototype.land = function(plane) {
  if (this.weather === 'stormy'){
    return 'unable to land plane'
  }
  else{
    this.hangar.push(plane)
  }
};

Airport.prototype.take_off = function(plane) {
  if (this.weather === 'stormy'){
    return 'unable to take off'
  }
  else{
    this.hangar.pop(plane)
  }
};
