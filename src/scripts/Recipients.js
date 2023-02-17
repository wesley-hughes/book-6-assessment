import { getRecipients } from "./dataAccess.js"

export const recipientSelection = () => {
    const recipients = getRecipients()
    let html = ""

    html += `<h4>Choose a Recipient</h4>
    <select class="resource" id="letterRecipient">
    <option value="0">Choose a Recipient</option>\n`

    for (const recipient of recipients) {
        html += `<option value="${recipient.id}"}>${recipient.name}</option>`
    }
    html += `</select>`
    return html
}