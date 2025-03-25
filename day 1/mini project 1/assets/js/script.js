// 1. Order details stored in an object
let order = {
    restaurantName: "Food Hub",
    orderNumber: 101,
    foodItems: ["Pizza", "Burger", "Pasta"], 
    totalPrice: 500, 
    isDelivered: false 
};

// 2. Function to display order summary
function displayOrder() {
    console.log("Order Summary:");
    console.log("Restaurant:", order.restaurantName);
    console.log("Order Number:", order.orderNumber);
    console.log("Food Items:", order.foodItems);
    console.log("Total Price: ₹" + order.totalPrice);
    console.log("Delivered:", order.isDelivered ? "Yes" : "No");
}

// 3. Function to update delivery status
function updateDeliveryStatus() {
    order.isDelivered = true;
    console.log("Delivery Status Updated: Order Delivered ");
}

// 4. Function to update food items (manual array)
function updateFoodItems() {
    order.foodItems = ["Sandwich", "Fries", "Coke"]; 
    console.log("Food Items Updated:", order.foodItems);
}
