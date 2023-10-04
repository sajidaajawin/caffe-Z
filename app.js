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

let orderDetailsDiv = document.getElementById("orderDetails");
let orderList = document.getElementById("orderList");

let listItem = document.createElement("li");
let paragraph = document.createElement("p");

paragraph.textContent = `Name: ${userName}, Gender: ${userTitle}, Drink Type: ${drinkType}, Drink Name: ${drinkName}`;

listItem.appendChild(paragraph);
orderList.appendChild(listItem);

orderDetailsDiv.appendChild(orderList);
