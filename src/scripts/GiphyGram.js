import { PostEntryForm } from "./Feed/PostEntryForm.js"
import { Post } from "./Feed/Post.js"
import { NavBarHTML } from "./Navbar.js"
import { MessageEntryForm } from "./Messages/DirectMessageForm.js"
import { getNewMessage } from "./Data/DataAccess.js"
//create overall HTML structure and invoke each sections function that generates HTML


export const GiphyGram = () => {
  return `
        
        <section>
      <h1>GiphyGram</h1>
      Navbar
      ${NavBarHTML()}</header>
      </section>
    
<div class="messageContainer">
      <section class="messageForm">
      ${getNewMessage() ? MessageEntryForm() : ""} 
      </section>
</div>
<div>
      <section class="postForm">
        ${PostEntryForm()}
      </section>
      </div>
     
      <section class="postFeed">
      ${Post()}
      </section>

      </div>
        <footer>

        </footer>

      
      
      `
}