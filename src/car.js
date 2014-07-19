// require('locus');

// Phase 1

function Car(make, model, year, color){
  this.make = make;
  this.model = model;
  // do the same for year and color
  this.state = "off";
  this.previousOwners = [];
  this.currentOwner = "manufacturer";
}

Car.prototype.sale = function(newOwner){
	this.previousOwners.push(this.currentOwner);
	this.currentOwner = newOwner;
 };

Car.prototype.paint = function(newColor){
	this.color = newColor;
};


// //Car pickup and drop off

Car.prototype.pickup = function(name) {
	if (this.state==="on") {
		console.log("Driving to pickup " +name);
	}
	else {
		console.log("Car drop off " + name);
	}
	return;
};

var myCar = new Car('Audi', '201', '2008', 'blue'); // Instance of Car
var myOldcar = new Car('Honda', '401', '2004', 'red');
myOldcar.currentOwner = "Joe";


myCar.sale('Sana');
myOldcar.sale('Tia');
myOldcar.paint('pink');
myCar.state('on');


console.log(myCar);
console.log(myOldcar);

module.exports = myCar;


// eval('locus');