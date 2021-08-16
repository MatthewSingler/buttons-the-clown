import { getRequests } from "./dataAccess.js";
import { deleteRequest } from "./dataAccess.js";
export const Requests = () => {

    const requests = getRequests()

    const allEventRequestsInListForm = (request) => {
        return `<li>${request.childName}<button class="request__delete" id="request--${request.id}">
        DENY
        </button>
        </li>`
    }

    let html = `
        <ul>
            ${requests.map(allEventRequestsInListForm).join("")}
        </ul>
    `

    const mainContainer = document.querySelector("#container")

    mainContainer.addEventListener("click", click => {
        if (click.target.id.startsWith("request--")) {
            const [, requestId] = click.target.id.split("--")
            deleteRequest(parseInt(requestId))
        }
    })


    return html
}