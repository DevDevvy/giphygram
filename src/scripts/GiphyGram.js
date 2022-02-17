import { PostEntryForm } from "./Feed/PostEntryForm.js"
import { Post } from "./Feed/Post.js"
import { NavBarHTML } from "./Navbar.js"
import { MessageEntryForm } from "./Messages/DirectMessageForm.js"
//create overall HTML structure and invoke each sections function that generates HTML
export const GiphyGram = () => {
  return `
        
        <section>
      <h1>GiphyGram</h1>
      Navbar
      ${NavBarHTML()}
      </section>
    
<div class="messageContainer">
      <section class="messageForm">
        ${MessageEntryForm()}
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