// Task 1: Function Declaration - Customer Invoice Calculation
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount; // Calculate total with tax and apply discount
    return `Total Invoice: $${total.toFixed(2)}`; // Return formatted total invoice
}

// Task 2: Function Expression - Employee Hourly Wage Calculation
const calculateHourlyWage = function(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52); // Calculate hourly wage based on weekly hours and yearly salary
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`; // Return formatted hourly wage
};

// Task 3: Arrow Function - Customer Loyalty Discount
const calculateLoyaltyDiscount = (amount, years) => {
    let discount = years >= 5 ? 0.15 : years >= 3 ? 0.10 : 0.05; // Determine discount percentage based on years
    let discountedPrice = amount * (1 - discount); // Apply discount to the amount
    return `Discounted Price: $${discountedPrice.toFixed(2)}`; // Return formatted discounted price
};
