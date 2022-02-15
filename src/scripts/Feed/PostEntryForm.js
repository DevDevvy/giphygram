// This module is responsible for generating the HTML representation for the post entry form.

//export a function that creates the HTML elements for the post form
export const PostEntryForm = ()=>{

let html = `
<section class="title">
<input type="text" placeholder="Title" />
</section>
<section class="URL">
<input type="text" name="postURL" class="newPost_input" placeholder="URL of gif " />
</section>
<section class="story">
<textarea id="description" class="newPost_description" placeholder="Story behind your gif..."></textarea>
</section>

<section>
<button class="button" id="savePost">Save</button>

<button class="button" id="cancelPost">Cancel</button>
</section>
`
return html

}




//create a click event listener that listens for the save button selection
//get the value for the input fields in the post form
//store the values in the posts array / permanent state


//create a click event listener that listens for the cancel button selection
//collapses post entry form when selected - custom event


