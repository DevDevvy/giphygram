import { PostEntryForm } from "./Feed/PostEntryForm.js"
import { NewPostButton, Post } from "./Feed/Post.js"
import { NavBarHTML } from "./Navbar.js"
import { MessageEntryForm } from "./Messages/DirectMessageForm.js"
import { getNewMessage, getNewPost } from "./Data/DataAccess.js"
import { Footer } from "./Footer.js"
//create overall HTML structure and invoke each sections function that generates HTML


export const GiphyGram = () => {
  return `
        
        <section>
      
      ${NavBarHTML()}</header>
      </section>
    
<div class="messageContainer">
      <section class="messageForm">
      ${getNewMessage() ? MessageEntryForm() : ""} 
      </section>
</div>
<div id="postEntryFormContainer">
      <section class="postForm">
        ${getNewPost() ? PostEntryForm() : NewPostButton()}
      </section>
      </div>
    
      <section class="postFeed">
      ${Post()}
      </section>

      </div>
        <footer>
  ${Footer()}
        </footer>

      
      
      `
}