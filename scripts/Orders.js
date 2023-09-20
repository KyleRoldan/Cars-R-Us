



export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=paintColor&_expand=wheel&_expand=interior")
    const ordersSubmitted = await fetchResponse.json()

    let orderOptionsHTML = `<ul></ul>`


    const orderStringArray = ordersSubmitted.map(

            (order) => {
               
                const orderPrice = order.paintColor.price + order.wheel.price + order.interior.price
                
                
                return `<ul id =${order.id}>Order # ${order.id} cost $ ${orderPrice} </ul>`
        

            }
    )

    
    orderOptionsHTML += orderStringArray.join("")

    return orderOptionsHTML
}
///////////////////OPTIONAL ADD ON /////////////////////////////////////////////
/*orderPrice.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})*/




