

export const PostEntryForm = ()=>{

let html = `
<section class="title">
<input type="text" placeholder="Title" />
</section>
<section class="URL">
<input type="text" name="postURL" class="newPost_input" placeholder="URL of gif " />
</section>
<section class="story">
<textarea name="description" class="newPost_description" placeholder=" Story behind your gif... "> </textarea>
</section>

<section>
<button class="button" id="savePost">Save</button>

<button class="button" id="cancelPost">Cancel</button>
</section>
`
return html

}