






export const wheelOptions = async () => {

    const response = await fetch("http://localhost:8088/wheels") 

    const allWheelOptions = await response.json()
    //document.addEventListener("change", handleSizeChoice)//

    let wheelOptionsHTML = `<div>
                    
    <select id="resource4">
    <option value="0">Prompt to select resource...</option>
    ${allWheelOptions.map(wheel => `<option value="${wheel.id}">${wheel.wheels}</option>`).join('')}
    
     </select>
</div>`

return wheelOptionsHTML

////////USING A RADIO ELEMENT INSTEAD/////////////////////////////////////////////////////////////////////
    
    /*let wheelOptionsHTML = `<div></div>`


    const divStringArray = allWheelOptions.map(

            (wheel)=>{
                return `<div><input type="radio" name="size" value="${wheel.id}"/>${wheel.wheels}</div>`
        

            }
    )
    wheelOptionsHTML += divStringArray.join("")

    return wheelOptionsHTML*/


}