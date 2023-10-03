function GetUserGender() {
    while (true) {
        let userGender = prompt("Please enter user gender (male or female):").toLowerCase();
        if (userGender === "male") {
            return "Mr.";
        } else if (userGender === "female") {
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

let orderList = document.getElementById("orderList");
let orderDetails = document.getElementById("orderDetails");

let listItem = document.createElement("li");
listItem.textContent = `Name: ${userName}, Gender: ${userTitle}, Drink Type: ${drinkType}, Drink Name: ${drinkName}`;

orderListItem.appendChild(li2);
li2.textContent = "Gender: " + orderInfo.userGender;
orderListItem.appendChild(li3);
li3.textContent = "Age: " + orderInfo.userGender;
orderListItem.appendChild(li4);

document.getElementById("orderDetails").appendChild(paragraph);
document.getElementById("orderDetails").appendChild(orderListItem);





