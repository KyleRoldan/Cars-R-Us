import {permanentState} from "./TransientState.js"

const saveOrder = (clickEvent) => {

    if (clickEvent.target.id === "saveOrder") {

        permanentState()

    }


}

export const placeOrderButton = () => {
    document.addEventListener("click", saveOrder)

    return `
            <button class ="btn" id ="saveOrder">Place order with current option choices</button>
            
            `
}


