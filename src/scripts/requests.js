import { getRequests } from "./dataAccess.js";
export const Requests = () => {

    const requests = getRequests()

    const allEventRequestsInListForm = (request) => {
        return `<li>${request.childName}, ${request.eventDate}</li>`
    }

    let html = `
        <ul>
            ${requests.map(allEventRequestsInListForm).join("")}
        </ul>
    `

    return html
}