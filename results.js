console.log("--- RAW QUIZ ANSWERS ---");
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
console.log("------------------------");

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
    description.textContent = '..';
    resultImage.src = '';
}

if (winner === 'amy'){
    character.textContent = 'Amy Santiago';
    description.textContent = '';
    resultImage.src = '';
}

if (winner === 'holt'){
    character.textContent = 'Captain Raymond Holt';
    description.textContent = '';
    resultImage.src = '';
}

if(winner === 'rosa'){
    character.textContent = 'Rosa Diaz';
    description.textContent = '';
    resultImage.src = '';
}

if(winner === 'charles'){
    character.textContent = 'Charles Boyle';
    description.textContent = '';
    resultImage.src = '';
}

if(winner === 'terry'){
    character.textContent = 'Terry Jeffords';
    description.textContent = '';
    resultImage.src = '';
}

if(winner === 'gina'){
    character.textContent = 'Gina Linetti';
    description.textContent = '';
    resultImage.src = '';
}