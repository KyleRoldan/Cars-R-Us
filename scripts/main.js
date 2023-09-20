import { interiorOptions } from "./Interior.js"
import { techOptions } from "./Tech.js"
import { paintOptions } from "./PaintColor.js"
import { wheelOptions } from "./Wheels.js"
import { placeOrderButton } from "./SaveOrder.js"
import { Orders } from "./Orders.js"






const container = document.querySelector(".mainContainer")


const render = async () => {

    const interiorDisplay = await interiorOptions()
    const techDisplay = await techOptions()
    const paintDisplay = await paintOptions()
    const wheelDisplay = await wheelOptions()
    const orderButton = placeOrderButton()
    const orderDisplay = await Orders()




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
}


render()

document.addEventListener("orderSubmitted", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})