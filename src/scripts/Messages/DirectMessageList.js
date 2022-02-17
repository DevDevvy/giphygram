import { getMessages, getUsers, getMessages } from "../Data/DataAccess.js"


//create HTML for one delivered message with "From (sender)" and message body
const aMessage = () => {

    let html = "<section class='aMessage'>"
    const foundUserId = parseInt(localStorage.getItem("gg_user"))
    const foundUser = userState.find(
        (user) => {
            return foundUserId === user.id
        }
    )
    const foundName = foundUser
    const users = getUsers()
    const messages = getMessages()
    let messageBody = {}
    const messagesArray = messages.map((message) => {
        const senderUser = users.find((user) => user.id === message.userId)
        if (message.recipientId === foundName) {
            messageBody = message.text
        }

        return `
        <div class="senderInfo">
        From: ${senderUser.name}
        </div>
        <div class="sentMessageBody">
        ${messageBody}
        </div>
       
        `
    }).join("")
    html += PostArray
    html += "</section>"
    return html

}

//Generates HTML for the entire message inbox
export const messageInbox = () => {
    return `
    <div class="messageInbox">
      <section class="deliveredMessages">
      ${getMessages() ? aMessage() : ""} 
      </section>
    </div>  `
}



    //map through array of messages and list them
//match the message.recipientId with the currentUser (gg_user id)
//if matched, then display message count in nav bar
    //create array for displayMessages for current user
    //message count = array.length of displayMessages && read = false


