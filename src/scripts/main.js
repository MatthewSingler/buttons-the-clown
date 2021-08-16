import { buttonsTheClown } from "./ButtonsTheClown.js"
import { fetchRequests } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = buttonsTheClown()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged", CustomEvent => {
        render()
    }
)
