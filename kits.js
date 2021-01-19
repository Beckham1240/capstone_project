var kitName1 = document.getElementById("kit1");
var kitName2 = document.getElementById("kit2");
var kitName3 = document.getElementById("kit3");
var kitPrice1 = document.getElementById("price1");
var kitPrice2 = document.getElementById("price2");
var kitPrice3 = document.getElementById("price3");

/*Array of different kit names*/
var nameList = ["I50 Robot Kit", "Rover Motion Kit", "Arduino Kit", "Robotic Arm Kit", "Edison Kit", "Hexapod Robot Kit"];
/*Array of different kit prices*/
var priceList = ["$100", "$204", "$40", "$700", "$50", "$400"];

/*Both functions just change the kit name and prices according to the index*/
function back(){
    kitName1.innerHTML = nameList[0];
    kitName2.innerHTML = nameList[1];
    kitName3.innerHTML = nameList[2];
    kitPrice1.innerHTML = priceList[0];
    kitPrice2.innerHTML = priceList[1];
    kitPrice3.innerHTML = priceList[2];
}

function next(){
    kitName1.innerHTML = nameList[3];
    kitName2.innerHTML = nameList[4];
    kitName3.innerHTML = nameList[5];
    kitPrice1.innerHTML = priceList[3];
    kitPrice2.innerHTML = priceList[4];
    kitPrice3.innerHTML = priceList[5];
}