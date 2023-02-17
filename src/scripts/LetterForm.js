import { sendLetter } from "./dataAccess.js"
import { authorSelection } from "./Authors.js"
import { recipientSelection } from "./Recipients.js"
import { topicSelection } from "./Topics.js"
import { bodyInput } from "./Bodies.js"


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendLetter") {
        // Get what the user typed into the form fields
        const userAuthor = parseInt(document.querySelector("#letterAuthor").value)
        const userRecipient = parseInt(document.querySelector("#letterRecipient").value)
        const userTopics = document.querySelectorAll("input[type='checkbox']:checked")
        let userTopicsArray = []
        userTopics.forEach((topic) => {
            userTopicsArray.push(parseInt(topic.value))
        })
        const userTopic = userTopicsArray
        const userBody = document.querySelector("#letterBody").value
        const userDate = new Date().toLocaleDateString()


        const dataToSendToAPI = {
            author: userAuthor,
            recipient: userRecipient,
            topics: userTopic,
            body: userBody,
            date: userDate
        }

        // Send the data to the API for permanent storage
        sendLetter(dataToSendToAPI)
    }
})

export const LetterForm = () => {
    let html = `
        <div class="field">
            ${authorSelection()}
        </div>
        <div class="field">
            ${bodyInput()}
        </div>
        <div class="field">
        ${topicSelection()}
    </div>
        <div class="field">
        ${recipientSelection()}
    </div>
        <button class="button" id="sendLetter">Send Letter</button>
    `

    return html
}