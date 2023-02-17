import { getSentLetters, getAuthors, getRecipients, getTopics } from "./dataAccess.js"

const convertSentLetterToListElement = (sentLetter) => {
    const authors = getAuthors()
    const recipients = getRecipients()
    const topics = getTopics()
    let html = ""
    html += `<article class="letter">`
    for (const recipient of recipients) {
        if (sentLetter.recipient === recipient.id) {
            html += `<p>Dear ${recipient.name},</p>`
        }
    }
    html += `<p>${sentLetter.body}</p>`
    for (const author of authors) {
        if (sentLetter.author === author.id) {
            html += `<p>Sincerely, ${author.name}</p>`
        }
    }
    html += `<p class="dateParagraph">Sent on: ${sentLetter.date}</p>`
    html += `<article class="topics">`
    html += ` ${topics.map((topic) => {
        for (const topicId in sentLetter.topics) {
            if (sentLetter.topics.includes(topic.id)) {
                return `<div>${topic.name}</div>`
            }
        }
    }).join("")
        }`
    html += `</article></article>`
    return html
}




export const SentLetters = () => {
    const sentLetters = getSentLetters()

    let html = `<article>`
    let listItems = sentLetters.map(convertSentLetterToListElement)
    html += listItems.join("")
    html += `</article>`
    return html
}