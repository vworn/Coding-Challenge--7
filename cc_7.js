// Task 1: Function Declaration - Customer Invoice Calculation
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount; // Calculate total with tax and apply discount
    return `Total Invoice: $${total.toFixed(2)}`; // Return formatted total invoice
}
