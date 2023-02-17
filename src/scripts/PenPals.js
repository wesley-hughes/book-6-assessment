import { LetterForm } from "./LetterForm.js"
import { SentLetters } from "./SentLetters.js"

export const PenPals = () => {
    return `
        <h1>Pen Pals</h1>
        <section class="letterForm">
            ${LetterForm()}
        </section>

        <section class="sentLetters">
            <h2>Sent Letters</h2>
            ${SentLetters()}
        </section>
    `
}