import { getAuthors } from "./dataAccess.js";




export const authorSelection = () => {
    const authors = getAuthors()
    let html = ""

    html += `<h4>Choose an Author</h4><select class="resource" id="letterAuthor">
    <option value="0">Choose an Author</option>\n`

    for (const author of authors) {
        html += `<option value="${author.id}"}>${author.name}</option>`
    }
    html += `</select>`
    return html
}

