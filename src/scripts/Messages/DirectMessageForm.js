//This module is responsible for generating the HTML representation for the message form.

import { getUsers } from "../Data/DataAccess.js"

//export a function that creates the HTML elements for the message form
//create dropdown for recipient - get users
//don't include current logged in user(optional)
//create input for message body
//add submit, cancel, and close button(optional)
export const MessageEntryForm = () => {
    const recipient = getUsers()
    let html = ""
    html +=
        `
<div> 
    <h3> Direct Messages</h3>
    <section class="recipient_dropdown">
Recipient:
<select name="directMessage" class="message_input">

${recipient.map(recipient => {
            return `<option class="recipients" value="${recipient.id}">${recipient.name} </option>
    `
        }).join("")
        }
</select>
</section>

<section class="messageInput">
<textarea class="messageBody" type="text" placeholder="Message to User"> </textarea>
</section>
<section>
<button class="saveButton" id="saveMessage">Save</button>

<button class="cancelButton" id="cancelMessage">Cancel</button>

</section>
</div>

`
    return html


}
