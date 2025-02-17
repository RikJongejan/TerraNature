window.addEventListener('scroll', function() {
    const img = document.querySelector('.image-container img');
    const scrollPosition = window.scrollY;
    const rotation = scrollPosition / 10; 
    img.style.transform = `rotate(${rotation}deg)`; 
});