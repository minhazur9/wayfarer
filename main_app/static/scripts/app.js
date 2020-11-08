const confirmDelete = document.getElementById('confirm-delete');
const deleteForm = document.querySelector('.delete-form');
const newPostBtn = document.querySelector('.new-post-btn');
const newPost = document.querySelector('.new-post');
const track = document.querySelector('.carousel__track');

//---------------------------------------------------
//                     CAROUSEL                
//---------------------------------------------------

if(track){
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-right');
    const prevButton = document.querySelector('.carousel-left') ;
    const dotsNav = document.querySelector('.carousel_nav');
    const dots = Array.from(dotsNav.children);
    const slideWidth = slides[0].getBoundingClientRect().width;
    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    }
    slides.forEach(setSlidePosition)

    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    
    }

    const updateDots = (currentDot, targetDot) => {
        currentDot.classList.remove('current-slide');
        targetDot.classList.add('current-slide');
    }

    const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
        if (targetIndex === 0) {
            prevButton.classList.add('hidden');
            nextButton.classList.remove('hidden');
        } else if (targetIndex === slides.length - 1 ){
            prevButton.classList.remove('hidden');
            nextButton.classList.add('hidden');
        } else {
            prevButton.classList.remove('hidden');
            nextButton.classList.remove('hidden');
        }
    }
    
    prevButton.addEventListener('click', e =>{
        const currentSlide = track.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;
        const currentDot = dotsNav.querySelector('.current-slide');
        const prevDot = currentDot.previousElementSibling;
        const prevIndex = slides.findIndex(slide => slide === prevSlide);
        moveToSlide(track, currentSlide, prevSlide);    
        updateDots(currentDot, prevDot)
        hideShowArrows(slides, prevButton, nextButton, prevIndex);
    });
    
    nextButton.addEventListener('click', e =>{
        const currentSlide = track.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;
        const currentDot = dotsNav.querySelector('.current-slide');
        const nextDot = currentDot.nextElementSibling;
        const nextIndex = slides.findIndex(slide => slide === nextSlide);
        moveToSlide(track, currentSlide, nextSlide);
        updateDots(currentDot, nextDot);
        hideShowArrows(slides, prevButton, nextButton, nextIndex);
        
    });

    dotsNav.addEventListener('click', e => {
        const targetDot = e.target.closest('button');

        if (!targetDot) return;

        const currentSlide = track.querySelector('.current-slide');
        const currentDot = dotsNav.querySelector('.current-slide');
        const targetIndex = dots.findIndex(dot => dot === targetDot);
        const targetSlide = slides[targetIndex];
        moveToSlide(track, currentSlide, targetSlide);
        updateDots(currentDot, targetDot);
        hideShowArrows(slides, prevButton, nextButton, targetIndex);

    });
}








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
            confirmDelete.setAttribute('type', 'submit')
        }
    });
}

//---------------------------------------------------
//                     COMMENT FORM               
//---------------------------------------------------

const addComment = document.querySelector('.add-comment');
const commentForm = document.querySelector('.comment-form');
const cancelComment = document.querySelector('.cancel-comment')
const editComment = document.querySelector('.edit-comment');



if(addComment) {
addComment.addEventListener('click', () => {
    addComment.classList.toggle('hidden');
    commentForm.classList.toggle('hidden');
})

cancelComment.addEventListener('click', () => {
    commentForm.querySelector('textarea').value = "";
    commentForm.classList.toggle('hidden');
    addComment.classList.toggle('hidden');


})



$('.comment-content').on('click', '.edit-comment', function() {
    comment = $(this).parent().parent()
    content = comment.find('.comment-content').text()
    $(this).hide()
    comment.find('.comment-content').hide()
    comment.find('.delete-comment-form').hide()
    comment.find('.edit-comment-form').show()
    comment.find('#id_content').text(content)
})

$('.comment-content').on('click', '.cancel-edit-comment', function() {
    comment = $(this).parent().parent().parent() 
    $(this).parent().parent().hide()
    comment.find('.edit-comment').show()
    comment.find('.comment-content').show()
    comment.find('.delete-comment-form').show()
    comment.find('#id_content').text(content)
    
})


}