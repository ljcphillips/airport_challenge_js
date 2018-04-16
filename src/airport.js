var Airport = function (){};

Airport.prototype.hangar = []

Airport.prototype.land = function(plane) {
  this.hangar.push(plane)
};

var Plane = function (){};
