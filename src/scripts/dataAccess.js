const applicationState = {
    requests: []
}
const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (userEventRequests) => {
                // Store the external state in application state
                applicationState.requests = userEventRequests
            }
        )
}

export const getRequests = () => {
    return applicationState.requests.map(request => ({ ...request }))
}

const mainContainer = document.querySelector("#container")

export const sendRequest = (userEventRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userEventRequest)
    }


    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
    
}
export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}
