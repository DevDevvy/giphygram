import { getUsers, getMessages, getUsersMessages } from "../Data/DataAccess.js"


//create HTML for one delivered message with "From (sender)" and message body
const aMessage = (message) => {

  //match the user id in getUsers with the userId in getUsersMessages and then get name from matched user
  const users = getUsers()
  const sender = users.find(sender => sender.id === message.userId)

        return `
        <section class='aMessage'>
        <div class="senderInfo">
        <h4>From: ${sender.name}</h4>
        </div>
        <div class="sentMessageBody">
        ${message.text}
        </div>
        </section>
        <hr/>
        `
}

//Generates HTML for the entire message inbox
//
export const messageInbox = () => {
    const allMessages = getUsersMessages()
    return `
    <div class="messageInbox">
      <section class="deliveredMessages">
      ${allMessages.length > 0 ? allMessages.map(aMessage).join("") : "There are no messages"} 
      </section>
    </div>  `
}




