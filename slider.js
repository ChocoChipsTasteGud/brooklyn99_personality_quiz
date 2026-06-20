let slider = document.getElementById('range')
let sliderValue = document.querySelector('.value');

  
sliderValue.textContent = slider.value;

function calcValue() {
    let maxVal = slider.max || 100;
    let sliderValuePercentage = (slider.value/maxVal) * 100;
    slider.style.background = 'linear-gradient(to right, #a9a9a9 ${sliderValuePercentage}%, #ebe9e7 ${sliderValuePercentage}%)';
}

calcValue()

slider.addEventListener('input', function() {
    calcValue();
    sliderValue.textContent = this.value;
});

const sliderQuestion = document.querySelector('.slider-qs');
const nextButton = document.querySelector('.next');

let qsCount = 8;
sliderValue.textContent = slider.value;

nextButton.addEventListener('click', () => {
    localStorage.setItem(`question_${qsCount}`, slider.value);
    qsCount = qsCount + 1;

    if(qsCount === 9) {
        sliderQuestion.textContent = "9) How assertive are you?";
        slider.value = 3;
        sliderValue.textContent = 3;
        calcValue();
    }

    if (qsCount === 10) {
        sliderQuestion.textContent = "10) How likely are you to undertake a bet?";
        slider.value = 3;
        sliderValue.textContent = 3;
        calcValue();
    }
    if (qsCount === 11) {
        window.location.href = "results.html";
    }
});