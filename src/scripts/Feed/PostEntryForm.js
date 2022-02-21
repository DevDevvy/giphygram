// This module is responsible for generating the HTML representation for the post entry form.

import { savedPost } from "../Data/DataAccess.js"
import { Post } from "./Post.js"

//export a function that creates the HTML elements for the post form
export const PostEntryForm = () => {

    let html = `
<section class="title">
<input type="text" name="title" placeholder="Title" />
</section>
<section class="URL">
<input type="text" name="postURL" class="newPost_input" placeholder="URL of gif " />
</section>
<section class="story">
<textarea name="description" class="newPost_description" placeholder="Story behind your gif..."></textarea>
</section>

<section class="postButtons">
<button class="button" id="savePost">Save</button>

<button class="button" id="cancelPost">Cancel</button>
</section>
`
    return html

}

const mainContainer = document.querySelector("#container")

//create a click event listener that listens for the save button selection
mainContainer.addEventListener("click",
    (clickEvent) => {
        if (clickEvent.target.id === "savePost") {
            //get the value for the input fields in the post form
            const postTitle = document.querySelector("input[name='title']").value
            const postURL = document.querySelector("input[name='postURL']").value
            const postDescription = document.querySelector("textarea[name='description']").value
            const postUserId= parseInt(localStorage.getItem("gg_user"))
            const createDate = new Date(Date.now())
            const dateString = createDate.toLocaleDateString("en-US")
            //store the values in the posts array / permanent state
            const savedObject= {
                title:postTitle,
                imageURL: postURL,
                description: postDescription,
                userId:postUserId,
                timestamp:dateString
            }

        savedPost(savedObject)
        }
    })



//create a click event listener that listens for the cancel button selection
//collapses post entry form when selected - custom event


