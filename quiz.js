const QUIZ_ID = "quiz";
const QUESTION_NO_ID = "questionNo";
const QUESTION_ID = "question";
const QUIZ_BUTTON_ID = "quizButton";
const ANSWER_ID = "answer";

let currentQuestion = 0;

const State = {
    NOT_STARTED: 1,
    SHOWING_QUESTION: 2,
    SHOWING_ANSWER: 3,
    COMPLETE: 4
};

let currentState = State.NOT_STARTED;

updateElements();

function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

function quizEvent() {
    changeState();
    updateElements();
}

function changeState() {
    if (currentState == State.NOT_STARTED) {
        currentState = State.SHOWING_QUESTION;
    } else if (currentState == State.SHOWING_QUESTION) {
        currentState = State.SHOWING_ANSWER;
    } else if (currentState == State.SHOWING_ANSWER) {
        currentState = currentQuestion < questions.length ?
                State.SHOWING_QUESTION : State.COMPLETE;
    } else {
        currentState = State.NOT_STARTED;
    }
}

function updateElements() {
    let elements = getElements();
    document.getElementById(QUESTION_NO_ID).innerHTML = elements.questionNo;
    document.getElementById(QUESTION_ID).innerHTML = elements.question
    document.getElementById(QUIZ_BUTTON_ID).innerHTML = elements.button;
    document.getElementById(ANSWER_ID).innerHTML = elements.answer
}

function getElements() {
    if (currentState == State.NOT_STARTED) {
        shuffle(questions);
        return {
            questionNo: "",
            question: "",
            button: "Start quiz",
            answer: ""
        };
    } else if (currentState == State.SHOWING_QUESTION) {
        fullQuestion = questions[currentQuestion++];
        return {
            questionNo: currentQuestion + " (of " + questions.length + ")",
            question: fullQuestion[QUESTION_ID],
            button: "Show answer",
            answer: ""
        };
    } else if (currentState == State.SHOWING_ANSWER) {
        fullQuestion = questions[currentQuestion-1];
        return {
            questionNo: currentQuestion + " (of " + questions.length + ")",
            question: fullQuestion[QUESTION_ID],
            button: currentQuestion < questions.length ? "Next question" : "End quiz",
            answer: fullQuestion[ANSWER_ID]
        }
    } else {
        currentQuestion = 0;
        return {
            questionNo: "",
            question: "",
            button: "Restart quiz",
            answer: ""
        }
    };
}