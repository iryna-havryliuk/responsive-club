let breakfast = document.getElementById('breakfast');
let movie = document.getElementById('movie');
let picnic = document.getElementById('picnic');


function showBreakfastInfo() {
    breakfast.style.fontSize =  '20px';
    breakfastTime.style.display = 'block';
}

function showMovieInfo() {
    movie.style.fontSize = '20px';
}

function showPicnicInfo() {
    picnic.style.fontSize = '20px';
}

function hideBreakfastInfo() {
    breakfast.style.fontSize = '';
}

function hideMovieInfo() {
    movie.style.fontSize = '';
}

function hidePicnicInfo() {
    picnic.style.fontSize = '';
}

function teaserOver() {
    this.classList.add('teaserHovered');
}
function teaserNormal() {
    this.classList.remove('teaserHovered');
}


breakfast.addEventListener('mouseover', showBreakfastInfo);
breakfast.addEventListener('mouseout',hideBreakfastInfo);

movie.addEventListener('mouseover', showMovieInfo);
movie.addEventListener('mouseout',hideMovieInfo);

picnic.addEventListener('mouseover', showPicnicInfo);
picnic.addEventListener('mouseout',hidePicnicInfo);

