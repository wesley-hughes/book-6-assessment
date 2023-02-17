const applicationState = {
    sentLetters: []
}

const API = "http://localhost:8088"

export const fetchSentLetters = () => {
    return fetch(`${API}/sentLetters`)
        .then(response => response.json())
        .then(
            (lettersSent) => {
                applicationState.sentLetters = lettersSent
            }
        )
}

export const getSentLetters = () => {
    return applicationState.sentLetters.map(sentLetter => ({ ...sentLetter }))
}

export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.authors = data
            }
        )
}

export const getAuthors = () => {
    return applicationState.authors.map(author => ({ ...author }))
}


export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.topics = data
            }
        )
}

export const getTopics = () => {
    return applicationState.topics.map(topic => ({ ...topic }))
}


export const fetchRecipients = () => {
    return fetch(`${API}/recipients`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.recipients = data
            }
        )
}
export const getRecipients = () => {
    return applicationState.recipients.map(recipient => ({ ...recipient }))
}





export const sendLetter = (userLetterSent) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userLetterSent)
    }


    return fetch(`${API}/sentLetters`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            document.querySelector("#container").dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const changeRequest = (objectId, object) => {
    const fetchOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(object)
    }

    return fetch(`${API}/requests/${objectId}`, fetchOptions)
    .then(response => response.json())
    .then (() => {
        document.querySelector("#container").dispatchEvent(new CustomEvent("stateChanged"))
    })
}