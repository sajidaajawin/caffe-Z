function GetUserGender() {
    while (true) {
        let userGender = prompt("Please enter user gender (male or female):").toLowerCase();
        if (userGender === "male") {
            alert("Welcome, Mr. " + userName);
            return "Mr.";
        } else if (userGender === "female") {
            alert("Welcome, Ms. " + userName);
            return "Ms.";
        } else {
            alert("Invalid input. Please enter 'male' or 'female'.");
        }
    }
}

let orders = [];

let userName = prompt("Please enter your name:");
let userTitle = GetUserGender();
let drinkType = prompt("Would you like to drink hot or cold drink?");
let drinkName = prompt("Please enter your drink name:");

let orderInfo = {
    userName: userName,
    userGender: userTitle,
    drinkType: drinkType,
    drinkName: drinkName
};

orders.push(orderInfo);

alert("Your " + drinkType + " " + drinkName + " is getting prepared.");

let confirmMessage = "Hello, " + userTitle + " " + userName + "! You ordered a " + drinkType + " " + drinkName + ".";

if (confirm(confirmMessage)) {
    console.log(confirmMessage);
} else {
    console.log("User has canceled his order.");
}

console.log("All orders: ", orders);

for (let i = 0; i < orders.length; i++) {
    console.log("Order " + (i + 1) + ":");
    console.log("Name: " + orders[i].userName);
    console.log("Gender: " + orders[i].userGender);
    console.log("Drink Type: " + orders[i].drinkType);
    console.log("Drink Name: " + orders[i].drinkName);
}
