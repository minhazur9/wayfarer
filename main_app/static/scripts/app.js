const confirmDelete = document.querySelector('.confirm-delete');
const deleteForm = document.querySelector('.delete-form');
const newPostBtn = document.querySelector('.new-post-btn');
const newPost = document.querySelector('.new-post');

//---------------------------------------------------
//                     MATERIALIZE INPUT ENABLER                
//---------------------------------------------------

M.FormSelect.init(id_user)
M.FormSelect.init(id_city)


newPostBtn.addEventListener('click', () => {
    newPost.classList.toggle('hidden');
})


confirmDelete.addEventListener('click' ,  () => {
    const input =  prompt('Are you sure you want to delete this post?');
    if (input === 'yes') {
        deleteForm.classList.toggle('hidden');
        confirmDelete.classList.toggle('hidden');
    } else {
        return alert('You did not delete your post');
    }
});