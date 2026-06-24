var iconContainer = document.querySelector('.mode-icon');
var themeImage = document.getElementById('theme-image');
var savedTheme = localStorage.getItem('theme');

if(savedTheme === 'light') {
    document.body.classList.add('light-theme');
    if(themeImage) themeImage.src = "images-b99/moon.png";
}else {
    document.body.classList.remove('light-theme');
    if(themeImage) themeImage.src = 'images-b99/sun.png';
}
if(iconContainer && themeImage) {
    iconContainer.onclick = function(){
        document.body.classList.toggle('light-theme');

        if(document.body.classList.contains('light-theme')){
            themeImage.src = "images-b99/moon.png";
            localStorage.setItem('theme', 'light');
        }else{
            themeImage.src = "images-b99/sun.png";
            localStorage.setItem('theme', 'dark');
        }

    };
}




let slider = document.getElementById('range')
let sliderValue = document.querySelector('.value');

  
sliderValue.textContent = slider.value;

function calcValue() {
    let maxVal = slider.max || 100;
    let sliderValuePercentage = (slider.value/maxVal) * 100;
    slider.style.background = `linear-gradient(to right, #a9a9a9 ${sliderValuePercentage}%, #ebe9e7 ${sliderValuePercentage}%)`;
}

calcValue()

slider.addEventListener('input', function() {
    calcValue();
    sliderValue.textContent = this.value;
});

const sliderQuestion = document.querySelector('.slider-qs');
const nextButton = document.querySelector('.next');
const backButton = document.querySelector('.back');
const tracker = document.querySelector('.tracker');

let qsCount = 8;
tracker.textContent = `${qsCount}/10`;
sliderValue.textContent = slider.value;

nextButton.addEventListener('click', () => {
    localStorage.setItem(`question_${qsCount}`, slider.value);
    qsCount = qsCount + 1;

    if(qsCount === 9) {
        sliderQuestion.textContent = "How assertive are you?";
        slider.value = 3;
        sliderValue.textContent = 3;
        calcValue();
        tracker.textContent = `${qsCount}/10`;
    }

    if (qsCount === 10) {
        sliderQuestion.textContent = "How likely are you to undertake a bet?";
        slider.value = 3;
        sliderValue.textContent = 3;
        calcValue();
        tracker.textContent = `${qsCount}/10`;
    }
    if (qsCount === 11) {
        window.location.href = "results.html";
    }
});

backButton.addEventListener('click', () => {
    qsCount = qsCount - 1;
    if(qsCount === 7){
        localStorage.setItem('loadQuestion7', 'true');
        window.location.href = 'questions.html';
        return;
        tracker.textContent = `${qsCount}/10`;
    }

    if(qsCount === 8){
        sliderQuestion.textContent = "How big is your circle?";
        slider.value = 3;
        sliderValue.textContent = 3;
        calcValue();
        tracker.textContent = `${qsCount}/10`;
    }



    if(qsCount === 9){
        sliderQuestion.textContent = "How assertive are you?";
        slider.value = 3;
        sliderValue.textContent = 3;
        calcValue();
        tracker.textContent = `${qsCount}/10`;

    }

    if(qsCount === 10){
        sliderQuestion.textContent = "How likely are you to undertake a bet?";
        slider.value = 3;
        sliderValue.textContent = 3;
        calcValue();
        tracker.textContent = `${qsCount}/10`;

    }
})