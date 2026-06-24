var iconContainer = document.querySelector('.mode-icon');
var themeImage = document.getElementById('theme-image');
var savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    if(themeImage) themeImage.src = 'images-b99/moon.png';

}else{
    document.body.classList.remove('light-theme');
    if(themeImage) themeImage.src = 'images-b99/sun.png';
}

if(iconContainer && themeImage) {
    iconContainer.onclick = function(){
        document.body.classList.toggle('light-theme');
        if(document.body.classList.contains('light-theme')){
            themeImage.src = 'images-b99/moon.png';
            localStorage.setItem('theme', 'light');
        }else{
            themeImage.src = 'images-b99/sun.png';
            localStorage.setItem('theme', 'dark');
        }
    };
}


console.log("quiz answers");
console.log("Q1:", localStorage.getItem('question_1'));
console.log("Q2:", localStorage.getItem('question_2'));
console.log("Q3:", localStorage.getItem('question_3'));
console.log("Q4:", localStorage.getItem('question_4'));
console.log("Q5:", localStorage.getItem('question_5'));
console.log("Q6:", localStorage.getItem('question_6'));
console.log("Q7:", localStorage.getItem('question_7'));
console.log("Q8 (Slider):", localStorage.getItem('question_8'));
console.log("Q9 (Slider):", localStorage.getItem('question_9'));
console.log("Q10 (Slider):", localStorage.getItem('question_10'));

let scores = {
    jake: 0, amy: 0, holt: 0, rosa: 0, gina: 0, charles: 0, terry: 0
};

let q1 = Number(localStorage.getItem('question_1'));
let q2 = Number(localStorage.getItem('question_2'));
let q3 = Number(localStorage.getItem('question_3'));
let q4 = Number(localStorage.getItem('question_4'));
let q5 = Number(localStorage.getItem('question_5'));
let q6 = Number(localStorage.getItem('question_6'));
let q7 = Number(localStorage.getItem('question_7'));
let q8 = Number(localStorage.getItem('question_8'));
let q9 = Number(localStorage.getItem('question_9'));
let q10 = Number(localStorage.getItem('question_10'));

if (q1 === 0){scores.holt += 1; scores.amy += 2;}
if (q1 === 1){scores.terry += 1; scores.charles += 1;}
if (q1 === 2){scores.gina += 1; scores.jake += 1;}
if (q1 === 3){scores.rosa += 1;}

if (q2 === 0){scores.charles += 1;}
if (q2 === 1){scores.amy += 1; scores.holt += 1;}
if (q2 === 2){scores.terry += 2; scores.rosa += 1}
if (q2 === 3){scores.jake += 1; scores.gina += 1;}

if (q3 === 0){scores.charles += 1; scores.amy += 1}
if (q3 === 1){scores.holt += 1;}
if (q3 === 2){scores.jake += 1;scores.terry += 1}
if (q3 === 3){scores.rosa += 1;scores.gina += 1}

if(q4 === 0){scores.terry +=  1;}
if(q4 === 1){scores.gina += 1;scores.rosa += 1;}
if(q4 === 2){scores.charles += 2;scores.holt += 1;scores.amy += 1;}
if(q4 === 3){scores.jake +=1 ;}

if(q5 === 0){scores.amy += 1;scores.jake += 1;}
if(q5 === 1){scores.holt += 2;}
if(q5 === 2){scores.gina += 2;}
if(q5 === 3){scores.rosa += 1;scores.charles += 1;scores.terry += 1;}

if(q6 === 0){scores.amy += 1;scores.jake += 1;}
if(q6 === 1){scores.rosa += 1;}
if(q6 === 2){scores.charles += 1;scores.terry += 1;}
if(q6 === 3){scores.gina += 1;}

if(q7 === 0){scores.holt += 1;scores.terry += 1;scores.amy += 1;}
if(q7 === 1){scores.jake += 1;}
if(q7 === 2){scores.rosa += 1;scores.gina += 1;}
if(q7 === 3){scores.charles += 1;}

if(q8>4){scores.holt += 1;scores.gina += 1;scores.charles += 1;}
if(2<=q8 && q8<=4){scores.jake += 1;scores.rosa += 1;scores.terry += 1;}
if(q8<2){scores.amy += 1;}

if(q9<3){scores.charles += 1;scores.amy += 1;}
if(3<=q9 && q9<5){scores.jake += 1; scores.terry += 1;}
if(q9>4){scores.holt += 1;scores.rosa += 1;scores.gina += 1;}

if(q10>4){scores.holt += 1;scores.jake += 2;}
if(2<=q10 && q10<=4){scores.gina += 1;scores.amy += 1;}
if(q10<2){scores.rosa += 1;scores.charles += 1;scores.terry += 1;}

console.log("real scores",scores);



let winner = 'jake';
let highestScore = scores.jake;

if(scores.amy>highestScore){
    highestScore = scores.amy;
    winner = 'amy';
}

if(scores.holt>highestScore){
    highestScore = scores.holt;
    winner = 'holt';
}

if(scores.rosa>highestScore){
    highestScore = scores.rosa;
    winner = 'rosa';
}

if(scores.charles>highestScore){
    highestScore = scores.charles;
    winner = 'charles';
}

if(scores.gina>highestScore){
    highestScore = scores.gina;
    winner = 'gina';
}

if(scores.terry>highestScore){
    highestScore = scores.terry;
    winner = 'terry';
}

const character = document.querySelector('.character');
const description = document.querySelector('.description');
const resultImage = document.querySelector('.result-image');

if (winner === 'jake'){
    character.textContent = 'Jake Peralta';
    description.textContent = "Jake Peralta! You're the life and soul of the party. Your charisma and creativity are what makes you special and helps you solve problems.";
    resultImage.src = 'images-b99/jake-results.jpg';
}

if (winner === 'amy'){
    character.textContent = 'Amy Santiago';
    description.textContent = "Amy Santiago! As the workaholic of the group, being organized is your jam! Despite your love for climbing up the ladder, you're willing to give it up for your loved ones.";
    resultImage.src = 'images-b99/amy-results.png';
}

if (winner === 'holt'){
    character.textContent = 'Captain Raymond Holt';
    description.textContent = "Captain Holt! You may be strict but it's always for the betterment of others and everybody appreciates your leadership. Your love for classics is unmatched.";
    resultImage.src = 'images-b99/holt-results.jpg';
}

if(winner === 'rosa'){
    character.textContent = 'Rosa Diaz';
    description.textContent = "🎶Rosa Rosa🎶 Mysterious and bold but everybody knows you have a soft spot. You always know what you're doing. Wish I could glaze more but you're too secretive.";
    resultImage.src = 'images-b99/rosa-results.jpg';
}

if(winner === 'charles'){
    character.textContent = 'Charles Boyle';
    description.textContent = "Charles Boyle! Like the foodie you are, your highly dedicated to food but also your friends - everybody needs a loyal and caring friend like you.";
    resultImage.src = 'images-b99/charles-results.jpg';
}

if(winner === 'terry'){
    character.textContent = 'Terry Jeffords';
    description.textContent = "Terry Jeffords! Your the father/mother of the group, holding it together with your empathy and integrity. You always do what's right even if your yoghurt is at risk!";
    resultImage.src = 'images-b99/terry-results.jpg';
}

if(winner === 'gina'){
    character.textContent = 'Gina Linetti';
    description.textContent = "Gina Linetti! The living embodiement of the 💯 emoji, you know how to get your way around anything. All hail the resident Queen!.";
    resultImage.src = 'images-b99/gina-results.jpg';
}

window.addEventListener('DOMContentLoaded', () => {

    console.log("results page loaded");
    const count = 200, defaults = {origin: {y: .7} };
    function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {particleCount: Math.floor(count * particleRatio)}));
    }
    

    fire(.25, {
        spread: 26,
        startVelocity: 55
    });

    fire(.2, { spread: 60});
    fire(.35, {
        spread: 100,
        decay: .91,
        scalar: .8
    });

    fire(.1, {
        spread: 120,
        startVelocity: 25,
        decay: .92,
        scalar: 1.2
    });

    fire(.1, {
        spread: 120,
        startVelocity: 45
    });

});

function autoClick(){
    $("#download").click();
}
$(document).ready(function(){
    var element = $(".results-box")[0];

    $(".download").on('click', function(){
        html2canvas(element, { scale: 2 }).then(function(canvas) {
            
                var imageData = canvas.toDataURL("image/jpeg");
                var link = document.createElement('a');
                link.download = 'brooklyn99-quiz-result.jpg';
                link.href = imageData;
                link.click();
        })
    })
})