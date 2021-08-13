import { Requests } from "./requests.js";
import { eventForm } from "./EventForm.js";

export const buttonsTheClown = () => {
    return `
    <h1>Buttons The Clown and Lollipop</h1>
    <section class="eventForm">
    <h2>Event Form</h2>
    ${eventForm()}
    </section>

    <section class="eventRequests">
        <h2>Service Requests</h2>
        ${Requests()}
    </section>
`
}