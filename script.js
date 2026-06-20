let startClick = document.querySelector('.start-button');
if (startClick) {
    startClick.addEventListener('click', () => {
    window.location.href = 'questions.html'
});
}


const question = document.querySelector(".question");
const label = document.querySelectorAll("label");
const nextButton = document.querySelector('.next');
const radioButton = document.querySelectorAll('input[type=radio]');

let qsCount = 1;

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
        question.textContent = "2) What does your usual weekend plan look like?";
        label[0].textContent = "date";
        label[1].textContent = "work";
        label[2].textContent = "family time";
        label[3].textContent = "random side quests";
    }

    if (qsCount === 3) {
        question.textContent = "3) Your friend just texted you an achievement. What's your response?";
        label[0].textContent = "omg that's CRAZY reminds me of the time.. blahblah";
        label[1].textContent = "👍";
        label[2].textContent = "LET'S GO CONGRATSS";
        label[3].textContent = "*leaves on read*";
    }

    if (qsCount === 4) {
        question.textContent = "4) How would your friends describe you?";
        label[0].textContent = "gym rat";
        label[1].textContent = "baddie";
        label[2].textContent = "weirdo";
        label[3].textContent = "prankster";
    }

    if (qsCount === 5) {
        question.textContent = "5) Who are you listening to?";
        label[0].textContent = "Taylor Swift";
        label[1].textContent = "Beethoven";
        label[2].textContent = "Beyoncé";
        label[3].textContent = "Eddie Money";
    }

    if (qsCount === 6) {
        question.textContent = "6) What's your usual attitude in contests?";
        label[0].textContent = "competitive";
        label[1].textContent = "don't care";
        label[2].textContent = "here for moral support";
        label[3].textContent = "secretly competitive";
    }

    if (qsCount === 7) {
        question.textContent = "7) Why is work important to you?";
        label[0].textContent = "to serve others";
        label[1].textContent = "it's fun";
        label[2].textContent = "money";
        label[3].textContent = "work friends";
    }

    
    if (qsCount === 8) {
        window.location.href = "sliderquestion.html";
    }
});






