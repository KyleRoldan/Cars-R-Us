import { interiorOptions } from "./Interior.js"
import { techOptions } from "./Tech.js"
import { paintOptions } from "./PaintColor.js"
import { wheelOptions } from "./Wheels.js"
import { placeOrderButton } from "./SaveOrder.js"
import { Orders } from "./Orders.js"
import { completeOrder } from "./Orders.js"







const container = document.querySelector(".mainContainer")


const render = async () => {

   
    const techDisplay = await techOptions()
    const paintDisplay = await paintOptions()
    const wheelDisplay = await wheelOptions()
    const orderButton = placeOrderButton()
    const orderDisplay = await Orders()
 const interiorDisplay = await interiorOptions()



    container.innerHTML = `<h1>Cars-R-US</h1>

    <div class="choices">
        <div class="choices__paints options">
            <h2>Paint Color</h2>
            ${paintDisplay}
           
        </div>

        <div class="choices__interior options">
            <h2>Interior</h2>
            ${interiorDisplay}
           
        </div>

        <div class="choices__wheels options">
            <h2>Wheels</h2>
            ${wheelDisplay}
            
        </div>
        <div class="choices__Tech options">
            <h2>Technology</h2>
            ${techDisplay}
            
        </div>

        <div class="orderbtn">
            ${orderButton}
   

    </div>

    

        <div class="customOrders">
            <h2>Custom Orders</h2>
            ${orderDisplay}
       

    </div>

`

document.addEventListener("click", async (event) => {
    const { name, id } = event.target;
    if (name === "complete") {
        await completeOrder(id);
        render(); // Update the UI after completing the order
    }
})

}


render()



// Function to mark an order as complete using POST
// const markOrderAsComplete = async (orderId) => {
//     const markCompleteOptions = {
//         method: "POST", // Use POST method for marking an order as complete
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ orderId }), // Adjust the payload as needed by your API
//     };

//     await fetch("http://localhost:5094/orders/complete", markCompleteOptions);
// };
document.addEventListener("click", async (event) => {
    if (event.target.classList.contains("complete-btn")) {
        const orderId = event.target.getAttribute("data-order-id");
        await completeOrder(orderId);
        console.log("Order marked as complete:", orderId);
        render(); // Update the UI after marking the order as complete
    }
});
