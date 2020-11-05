const confirmDelete = document.getElementById('confirm-delete');
const deleteForm = document.querySelector('.delete-form');
const newPostBtn = document.querySelector('.new-post-btn');
const newPost = document.querySelector('.new-post');

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-right');
const prevButton = document.querySelector('.carousel-left') ;
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;


//---------------------------------------------------
//                     CAROUSEL                
//---------------------------------------------------

if(slides){
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
    
    prevButton.addEventListener('click', e =>{
        const currentSlide = track.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;
        
        moveToSlide(track, currentSlide, prevSlide);    
    });
    
    nextButton.addEventListener('click', e =>{
        const currentSlide = track.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;
    
        moveToSlide(track, currentSlide, nextSlide);
    
    });

    dotsNav.addEventListener('click', e => {
        const targetDot = e.target.closest('button');

        const currentSlide = track.querySelector('.current-slide');
        const currentDot = dotsNav.querySelector('.current-slide');
        const targetIndex = dots.findIndex(dot => dot === targetDot);
        const targetSlide = slides[targetIndex];

        moveToSlide(track, currentSlide, targetSlide);

        currentDot.classList.remove('current-slide');
        targetDot.classList.add('current-slide');
    })
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
            deleteForm.classList.toggle('hidden');
            confirmDelete.classList.toggle('hidden');
        } else {
            return alert('You did not delete your post');
        }
    });
}
