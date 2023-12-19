export const Orders = async () => {
    try {

    const fetchResponse = await fetch("http://localhost:5094/orders")
    const ordersSubmitted = await fetchResponse.json()

    let orderOptionsHTML = `<ul></ul>`

console.log(ordersSubmitted)
    const orderStringArray = ordersSubmitted.map(

            (order) => {
               
                const orderPrice = order.totalCost
                const buttonText = order.completed ? "Completed" : "Complete";
    return `<ul id=${order.id}>Order # ${order.id} cost $ ${orderPrice} <input type="button" class="complete-btn" data-order-id="${order.id}" value="${buttonText}">
    </ul>`
        

            }
    )

    
    orderOptionsHTML += orderStringArray.join("")

    return orderOptionsHTML
} catch (error) {
    console.error("Error fetching orders:", error);
    return "<p>Error fetching orders</p>";
}
}
///////////////////OPTIONAL ADD ON /////////////////////////////////////////////
/*orderPrice.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})*/

// ... (existing code)

export const completeOrder = async (orderId) => {
    try {
        const response = await fetch(`http://localhost:5094/orders/${orderId}/fulfill`, {
            method: "POST",
        });

        if (response.ok) {
            console.log(`Order ${orderId} marked as complete.`);
            document.dispatchEvent(new CustomEvent("orderCompleted"));
        } else {
            console.error(`Failed to mark order ${orderId} as complete.`);
        }
    } catch (error) {
        console.error("Error marking order as complete:", error);
    }
};
