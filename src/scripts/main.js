import { fetchAuthors, fetchRecipients, fetchTopics, fetchSentLetters } from "./dataAccess.js"
import { PenPals } from "./PenPals.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

const render = () => {
    fetchSentLetters()
        .then(() => fetchAuthors())
        .then(() => fetchRecipients())
        .then(() => fetchTopics())
        .then(
            () => {
                mainContainer.innerHTML = PenPals()
            }
        )
}

render()