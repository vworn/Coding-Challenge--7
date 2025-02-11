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
