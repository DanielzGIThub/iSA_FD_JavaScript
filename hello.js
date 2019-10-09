var Flat = function(numberOfRooms, furnitures) {

    this.numberOfRooms = numberOfRooms;
    this.furnitures = furnitures;
    this.location = function(code, city){console.log("Poland " + " " + code + " " + city)};
    this.test = function(){console.log(this)};
    this.infoOnLocation = function(){console.log(this.location())};

};

var myFlat1 = new Flat(4, "sofa");
var myFlat2 = new Flat(5, "chairs");
var myFlat3 = new Flat(2, "table");


myFlat2.location("83-000", "Pruszcz");
myFlat2.infoOnLocation();
console.log(myFlat2.furnitures);