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

// Task 4: Parameters and Arguments - Product Shipping Cost Calculation
function calculateShippingCost(weight, location, expedited = false) {
    let baseCost = location === "USA" ? 5 + (0.5 * weight) : 10 + (0.7 * weight); // Calculate base shipping cost based on location and weight
    if (expedited) baseCost += 10; // Add expedited shipping cost if applicable
    return `Shipping Cost: $${baseCost.toFixed(2)}`; // Return formatted shipping cost
}

// Task 5: Returning Values - Business Loan Interest Calculation
function calculateLoanInterest(principal, rate, years) {
    let interest = principal * rate * years; // Calculate total interest over the loan period
    return `Total Interest: $${interest.toFixed(2)}`; // Return formatted total interest
}

// Task 6: Higher-Order Functions - Filtering High-Value Transactions
const transactions = [500, 1200, 3000, 800, 2200]; // Define an array of transaction amounts
const filterHighValueTransactions = (transactions, filterFunction) => {
    return transactions.filter(filterFunction); // Use filter function to get transactions above threshold
};

// Task 7: Closures - Budget Tracker
function createBudgetTracker() {
    let balance = 0; // Initialize balance
    return function(amount) {
        balance -= amount; // Subtract amount from balance
        return `Current Balance: -$${Math.abs(balance)}`; // Return formatted current balance
    };
}