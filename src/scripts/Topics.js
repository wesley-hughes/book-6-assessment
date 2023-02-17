import { getTopics } from "./dataAccess.js"


export const topicSelection = () => {
    const topics = getTopics()
    let html = ""

    html += `<h4>Choose a Topic</h4>`
    html += `<ul class="topicsList">`
    for (const topic of topics) {
        html += `<li><input type="checkbox" class="resource" id="letterTopic" value="${topic.id}"/>`
        html += `${topic.name} </li>`
    }
    html += `</ul>`
    return html
}