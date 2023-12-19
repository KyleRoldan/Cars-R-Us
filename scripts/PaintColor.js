import { setInterior, setPaint, setTech, setWheels } from "./TransientState.js"



const changeHandler = (changeEvent) => {
    if (changeEvent.target.id === "resource" ) {
       const chosenOption = changeEvent.target.value
       setTech(parseInt(chosenOption))
    } else if (changeEvent.target.id === "resource2") {
        const chosenOption = changeEvent.target.value
       setPaint(parseInt(chosenOption))
    } else if (changeEvent.target.id === "resource3") {
        const chosenOption = changeEvent.target.value
       setInterior(parseInt(chosenOption))
    } else if (changeEvent.target.id === "resource4") {
        const chosenOption = changeEvent.target.value
       setWheels(parseInt(chosenOption))
    } 

    
 }



export const paintOptions = async () => {

    const response = await fetch("http://localhost:5094/paintColors") 

    const allPaintOptions = await response.json()
    document.addEventListener("change", changeHandler )
   
   

    let paintOptionsHTML = `<div>
                    
    <select id="resource2">
    <option value="0">Prompt to select resource...</option>
    ${allPaintOptions.map(paint => `<option value="${paint.id}">${paint.color}</option>`).join('')}
    
    </select>

</div>`

return paintOptionsHTML
}