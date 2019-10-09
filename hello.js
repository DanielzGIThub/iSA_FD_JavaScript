var myArray = new Array();

myArray[0] = 7;
myArray[1] = "text";
myArray[3] = true;

console.log(myArray);
console.log(myArray.length);
console.log(typeof(myArray[2]));

var flat = new Object();

flat.numberOfRooms = 4;
flat.furnitures = "sofa";
flat.location = function(){console.log("Pomeranian")};

document.write(flat.numberOfRooms);
document.write(flat.furnitures);
flat.location();

var flat2 = {

    numberOfRooms: 5,
    furnitures: "chairs",
    location: function(code, city){console.log("Poland " + " " + code + " " + city)},
    test: function(){console.log(this)},
    infoOnLocation: function(){console.log(this.location())}

};

console.log(flat2.furnitures);
flat2.location("83-000", "Gdansk");
flat2.test();
flat2.infoOnLocation();