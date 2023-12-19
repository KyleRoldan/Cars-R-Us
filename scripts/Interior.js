





export const interiorOptions = async () => {

    const response = await fetch("http://localhost:5094/interiors") 

    const allInteriorOptions = await response.json()
    
    let interiorOptionsHTML = `<div>
                    
    <select id="resource3">
    <option value="0">Prompt to select resource...</option>
    ${allInteriorOptions.map(interior => `<option value="${interior.id}">${interior.material}</option>`).join('')}
    
    </select>

</div>`

return interiorOptionsHTML
}