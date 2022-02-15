import { PostEntryForm } from "./Feed/PostEntryForm.js"

//create overall HTML structure and invoke each sections function that generates HTML
export const GiphyGram = () => {
    return `
        <section>
      <h1>GiphyGram</h1>
      Navbar
      </section>
    

      <section class="messageForm">
        
      </section>

      <section class="postForm">
        ${PostEntryForm()}
      </section>
     
      <section class="postFeed">
        
      </section>

        <footer>

        </footer>

      
      
      `
}