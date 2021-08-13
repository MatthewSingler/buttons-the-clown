import { sendRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userParentName = document.querySelector("input[name='eventParentName']").value
        const userChildName = document.querySelector("input[name='eventChildName']").value
        const userNumberInAttendance = document.querySelector("input[name='eventNumberInAttendance']").value
        const userAddress = document.querySelector("input[name='eventAddress']").value
        const userEventDate = document.querySelector("input[name='eventDate']").value
        const userEventDuration = document.querySelector("input[name='eventDuration']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            numberInAttendance: userNumberInAttendance,
            address: userAddress,
            eventDate: userEventDate,
            eventDuration: userEventDuration
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})




export const eventForm = () => {
    let html = `
    
        <div class="field">
            <label class="label" for="eventParentName">Parent Name</label>
            <input type="text" name="eventParentName" class="input" />
        </div>
         <div class="field">
            <label class="label" for="eventChildName">Child Name</label>
            <input type="text" name="eventChildName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="eventNumberInAttendance">Number Attending</label>
            <input type="text" name="eventNumberInAttendance" class="input" />
        </div>
        <div class="field">
            <label class="label" for="eventAddress">Address</label>
            <input type="text" name="eventAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="eventDate">Date Needed</label>
            <input type="date" name="eventDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="eventDuration">Event Duration</label>
            <input type="number" name="eventDuration" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
        
        `


    return html
}
