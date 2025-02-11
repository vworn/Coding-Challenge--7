// Task 1: Function Declaration - Customer Invoice Calculation
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount; // Calculate total with tax and apply discount
    return `Total Invoice: $${total.toFixed(2)}`; // Return formatted total invoice
}
console.log(calculateInvoice(100, 0.08, 5)); // Expected output: "Total Invoice: $103.00"
console.log(calculateInvoice(500, 0.1, 20)); // Expected output: "Total Invoice: $530.00"

// Task 2: Function Expression - Employee Hourly Wage Calculation
const calculateHourlyWage = function(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52); // Calculate hourly wage based on weekly hours and yearly salary
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`; // Return formatted hourly wage
};
console.log(calculateHourlyWage(52000, 40)); // Expected output: "Hourly Wage: $25.00"
console.log(calculateHourlyWage(75000, 35)); // Expected output: "Hourly Wage: $41.21"

// Task 3: Arrow Function - Customer Loyalty Discount
const calculateLoyaltyDiscount = (amount, years) => {
    let discount = years >= 5 ? 0.15 : years >= 3 ? 0.10 : 0.05; // Determine discount percentage based on years
    let discountedPrice = amount * (1 - discount); // Apply discount to the amount
    return `Discounted Price: $${discountedPrice.toFixed(2)}`; // Return formatted discounted price
};
console.log(calculateLoyaltyDiscount(100, 6)); // Expected output: "Discounted Price: $85.00"
console.log(calculateLoyaltyDiscount(200, 2)); // Expected output: "Discounted Price: $190.00"


// Task 4: Parameters and Arguments - Product Shipping Cost Calculation
function calculateShippingCost(weight, location, expedited = false) {
    let baseCost = location === "USA" ? 5 + (0.5 * weight) : 10 + (0.7 * weight); // Calculate base shipping cost based on location and weight
    if (expedited) baseCost += 10; // Add expedited shipping cost if applicable
    return `Shipping Cost: $${baseCost.toFixed(2)}`; // Return formatted shipping cost
}
console.log(calculateShippingCost(10, "USA", true)); // Expected output: "Shipping Cost: $20.00"
console.log(calculateShippingCost(5, "Canada", false)); // Expected output: "Shipping Cost: $13.50"

// Task 5: Returning Values - Business Loan Interest Calculation
function calculateLoanInterest(principal, rate, years) {
    let interest = principal * rate * years; // Calculate total interest over the loan period
    return `Total Interest: $${interest.toFixed(2)}`; // Return formatted total interest
}
console.log(calculateLoanInterest(1000, 0.05, 3)); // Expected output: "Total Interest: $150.00"
console.log(calculateLoanInterest(5000, 0.07, 5)); // Expected output: "Total Interest: $1750.00"

// Task 6: Higher-Order Functions - Filtering High-Value Transactions
const transactions = [500, 1200, 3000, 800, 2200]; // Define an array of transaction amounts
const filterHighValueTransactions = (transactions, filterFunction) => {
    return transactions.filter(filterFunction); // Use filter function to get transactions above threshold
};
console.log(filterHighValueTransactions(transactions, amount => amount > 1000)); // Expected output: [1200, 3000, 2200]

// Task 7: Closures - Budget Tracker
function createBudgetTracker() {
    let balance = 0; // Initialize balance
    return function(amount) {
        balance -= amount; // Subtract amount from balance
        return `Current Balance: -$${Math.abs(balance)}`; // Return formatted current balance
    };
}
const budget = createBudgetTracker(); // Create an instance of the budget tracker
console.log(budget(300)); // Expected output: "Current Balance: -$300"
console.log(budget(200)); // Expected output: "Current Balance: -$500"

// Task 8: Recursion - Business Growth Projection
function calculateGrowth(years, revenue) {
    if (years >= 10) return `Projected Revenue: $${revenue.toFixed(2)}`; // Stop recursion after 10 years
    return calculateGrowth(years + 1, revenue * 1.05); // Recursively calculate 5% growth per year
}
console.log(calculateGrowth(8, 1000)); // Expected output: "Projected Revenue: $1102.50"
console.log(calculateGrowth(5, 5000)); // Expected output: "Projected Revenue: $6381.41"
