var name = prompt("Enter your name:");
var gender = prompt("Enter your gender (male/female):").toLowerCase();
var title = "";

if (gender === "male") {
    title = "Mr";
} else if (gender === "female") {
    title = "Ms";
} else {
    alert("Welcome, " + name + "!");
}

var drinkType = prompt("Do you want a hot or cold drink?").toLowerCase();
var drinkName = prompt("Enter the name of your drink:");

if (name && (gender === "male" || gender === "female") && (drinkType === "hot" || drinkType === "cold") && drinkName) {
    alert("Welcome, " + title + " " + name + "!");
    alert("Your " + drinkType + " " + drinkName + " is getting prepared!");

    var orderDetails = "Name: " + name + "\nDrink: " + drinkType + " " + drinkName;
    console.log(orderDetails);
} else {
    alert("Please fill out all the information correctly.");
}
