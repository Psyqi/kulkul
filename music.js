document.addEventListener('click', function() {
    const music = document.getElementById('backgroundMusic');
    if (music.paused) {
        music.play();
    }
});
