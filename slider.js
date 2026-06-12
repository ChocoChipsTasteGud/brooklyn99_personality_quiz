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
