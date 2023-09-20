const transientState = {

    "paintColorId": 0,
    "interiorId": 0,
    "techId": 0,
    "wheelId":0
   

}
// Functions to modify each property of paint transient state
export const setPaint= (chosenPaint) => {
    transientState.paintColorId = chosenPaint
    console.log(transientState)
}

// Functions to modify each property of interior transient state
export const setInterior = (chosenInterior) => {
    transientState.interiorId = chosenInterior
    console.log(transientState)
}

// Functions to modify each property of tech transient state
export const setTech = (chosenTech) => {
    transientState.techId = chosenTech
    console.log(transientState)
}

// Functions to modify each property of wheel transient state
export const setWheels = (chosenWheels) => {
    transientState.wheelId = chosenWheels
    console.log(transientState)
}

// Function to convert transient state to permanent state
export const permanentState = async () => {
    /*
        Add the required keys to the object below that are
        needed for a POST operation.
    */
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)



    }
    

    // Send the transient state to your API
    const response = await fetch("http://localhost:8088/Orders", postOptions)
    const customEvent = new CustomEvent("orderSubmitted")
    document.dispatchEvent(customEvent)

}
