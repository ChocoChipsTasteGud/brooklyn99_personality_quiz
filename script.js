let startClick = document.querySelector('.start-button');
if (startClick) {
    startClick.addEventListener('click', () => {
    window.location.href = 'questions.html'
});
}


const question = document.querySelector(".question");
const label = document.querySelectorAll("label");
const nextButton = document.querySelector('.next');
const backButton = document.querySelector('.back');
const tracker = document.querySelector('.tracker');
const radioButton = document.querySelectorAll('input[type=radio]');

let qsCount = 1;

if (localStorage.getItem('loadQuestion7') === 'true') {
    qsCount = 7;
    localStorage.removeItem('loadQuestion7');

    question.textContent = "Why is work important to you?";
    label[0].textContent = "to serve others";
    label[1].textContent = "it's fun";
    label[2].textContent = "money";
    label[3].textContent = "work friends";
}

tracker.textContent = `${qsCount}/10`;

nextButton.addEventListener('click', () => {
    const checkedRadio = document.querySelector('input[type="radio"]:checked');
    if (checkedRadio === null) {
        alert("Please select an answer before moving on!");
        return;
    }
    let selectedAnswer = Number(checkedRadio.value);
    checkedRadio.checked = false;
    localStorage.setItem(`question_${qsCount}`, selectedAnswer);

    qsCount = qsCount + 1;
    if (qsCount === 2) {
        question.textContent = "What does your usual weekend plan look like?";
        label[0].textContent = "date";
        label[1].textContent = "work";
        label[2].textContent = "family time";
        label[3].textContent = "random side quests";
        tracker.textContent = `${qsCount}/10`;
    }

    if (qsCount === 3) {
        question.textContent = "Your friend just texted you an achievement. What's your response?";
        label[0].textContent = "omg that's CRAZY reminds me of the time.. blahblah";
        label[1].textContent = "👍";
        label[2].textContent = "LET'S GO CONGRATSS";
        label[3].textContent = "*leaves on read*";
        tracker.textContent = `${qsCount}/10`;
    }

    if (qsCount === 4) {
        question.textContent = "How would your friends describe you?";
        label[0].textContent = "gym rat";
        label[1].textContent = "baddie";
        label[2].textContent = "weirdo";
        label[3].textContent = "prankster";
        tracker.textContent = `${qsCount}/10`;
    }

    if (qsCount === 5) {
        question.textContent = "Who are you listening to?";
        label[0].textContent = "Taylor Swift";
        label[1].textContent = "Beethoven";
        label[2].textContent = "Beyoncé";
        label[3].textContent = "Eddie Money";
        tracker.textContent = `${qsCount}/10`;
    }

    if (qsCount === 6) {
        question.textContent = "What's your usual attitude in contests?";
        label[0].textContent = "competitive";
        label[1].textContent = "don't care";
        label[2].textContent = "here for moral support";
        label[3].textContent = "secretly competitive";
        tracker.textContent = `${qsCount}/10`;
    }

    if (qsCount === 7) {
        question.textContent = "Why is work important to you?";
        label[0].textContent = "to serve others";
        label[1].textContent = "it's fun";
        label[2].textContent = "money";
        label[3].textContent = "work friends";
        tracker.textContent = `${qsCount}/10`;
    }

    
    if (qsCount === 8) {
        window.location.href = "sliderquestion.html";
    }
});







backButton.addEventListener('click', () => {
    qsCount = qsCount - 1;
    if(qsCount < 1){
        window.location.href = 'start.html';
        return;
    }

    if(qsCount === 1){
        question.textContent = "What's your immediete reaction to a crisis?";
        label[0].textContent = 'make a detailed plan to solve it';
        label[1].textContent = 'stress eat';
        label[2].textContent = 'fix it with a crazy stunt';
        label[3].textContent = 'grab a weapon';
        tracker.textContent = `${qsCount}/10`;
    }

    if(qsCount === 2){
        question.textContent = 'What does your usual weekend plan look like?';
        label[0].textContent = 'date';
        label[1].textContent = 'work';
        label[2].textContent = 'family time';
        label[3].textContent = 'random side quests';
        tracker.textContent = `${qsCount}/10`;
    }

    if(qsCount === 3){
        question.textContent = "Your friend just texted you an achievement. What's your response?";
        label[0].textContent = "omg that's CRAZY reminds me of the time.. blahblah";
        label[1].textContent = '👍';
        label[2].textContent = "LET'S GO CONGRATSS";
        label[3].textContent = '*leaves on read*';
        tracker.textContent = `${qsCount}/10`;
    }

    if(qsCount === 4){
        question.textContent = 'How would your friends describe you?';
        label[0].textContent = 'gym rat';
        label[1].textContent = 'baddie';
        label[2].textContent = 'weirdo';
        label[3].textContent = 'prankster';
        tracker.textContent = `${qsCount}/10`;
    }

    if(qsCount === 5){
        question.textContent = 'Who are you listening to?';
        label[0].textContent = 'Taylor Swift';
        label[1].textContent = 'Beethoven';
        label[2].textContent = 'Beyoncé';
        label[3].textContent = 'Eddie Money';
        tracker.textContent = `${qsCount}/10`;
    }

    if(qsCount === 6){
        question.textContent = "What's your usual attitude in contests?";
        label[0].textContent = 'competitive';
        label[1].textContent = "don't care";
        label[2].textContent = 'here for moral support';
        label[3].textContent = 'secretly competitive';
        tracker.textContent = `${qsCount}/10`;
    }

    if(qsCount === 7){
        question.textContent = 'Why is work important to you?';
        label[0].textContent = 'to serve others';
        label[1].textContent = "it's fun";
        label[2].textContent = 'money';
        label[3].textContent = 'work friends';
        tracker.textContent = `${qsCount}/10`;
    }

    radioButton.forEach(radio => radio.checked = false);


});








