const confirmDelete = document.getElementById('confirm-delete');
const deleteForm = document.querySelector('.delete-form');
const newPostBtn = document.querySelector('.new-post-btn');
const newPost = document.querySelector('.new-post');

//---------------------------------------------------
//                     MATERIALIZE INPUT ENABLER                
//---------------------------------------------------


if(newPostBtn){
    newPostBtn.addEventListener('click', () => {
        newPost.classList.toggle('hidden');
    })
}


if(confirmDelete){
    confirmDelete.addEventListener('click' , () => {
        const input =  confirm('Are you sure you want to delete this post?');
        if (input === true) {
            deleteForm.classList.toggle('hidden');
            confirmDelete.classList.toggle('hidden');
        } else {
            return alert('You did not delete your post');
        }
    });
}


const addComment = document.querySelector('.add-comment');
const commentForm = document.querySelector('.comment-form');

addComment.addEventListener('click', () => {
    commentForm.classList.toggle('hidden');
})
