



export const techOptions = async () => {

const response = await fetch("http://localhost:5094/technology")

    const allTechOptions = await response.json()
   

    let techOptionsHTML = `<div>
                    
    <select id="resource">
    <option value="0">Prompt to select resource...</option>
    ${allTechOptions.map(tech => `<option value="${tech.id}">${tech.package}</option>`).join('')}
    
     </select>
</div>`

return techOptionsHTML


}
    
   

