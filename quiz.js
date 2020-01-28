const QUESTION_ID = "question";
const QUESTION_NO_ELEMENT = document.getElementById("questionNo");
const QUESTION_ELEMENT = document.getElementById(QUESTION_ID);
const QUIZ_BUTTON_ELEMENT = document.getElementById("quizButton");
const ANSWER_ELEMENT = document.getElementById("answer");
const PAGE_NO_ELEMENT = document.getElementById("pageNo");
const FLAG_BUTTON = document.getElementById("flagButton");
const SHOW_FLAGGED_BUTTON = document.getElementById("showFlaggedButton");
const FLAGGED_MODAL = document.getElementById("flaggedModal");
const FLAGGED_MODAL_TEXT = document.getElementById("flaggedModalText");
const CLOSE_MODAL = document.getElementById("closeModal");

let currentQuestion = 0;

const State = {
  NOT_STARTED: 1,
  SHOWING_QUESTION: 2,
  SHOWING_ANSWER: 3,
  COMPLETE: 4
};

let currentState = State.NOT_STARTED;
let flaggedQuestions = [];

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


function changeState() {
  if (currentState == State.NOT_STARTED) {
    currentState = State.SHOWING_QUESTION;
  } else if (currentState == State.SHOWING_QUESTION) {
    currentState = State.SHOWING_ANSWER;
  } else if (currentState == State.SHOWING_ANSWER) {
    currentState = currentQuestion < questions.length ?
        State.SHOWING_QUESTION : State.COMPLETE;
    currentQuestion++;
  } else {
    currentState = State.NOT_STARTED;
  }
}


function updateElements() {
  FLAG_BUTTON.style.display = currentState == State.SHOWING_ANSWER ? null : "none";
  let elements = getElements();
  updateElement(QUESTION_NO_ELEMENT, elements.questionNo);
  updateElement(QUESTION_ELEMENT, elements.question);
  updateElement(QUIZ_BUTTON_ELEMENT, elements.button);
  updateElement(ANSWER_ELEMENT, elements.answer);
  updateElement(PAGE_NO_ELEMENT, elements.pageNo);
}


function updateElement(element, content) {
  if (content) {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
  element.innerHTML = content;
}


function getElements() {
  if (currentState == State.NOT_STARTED) {
    shuffle(questions);
    return {
        question: "This quiz is designed to test your knowledge and understanding on a variety of topics that will "
            + " be assessed as part of the Oracle Certified Associate, Java 11 Programmer II exam.",
        button: "Start quiz",
        answer: "Note that this quiz was originally developed for the command line, so various visual defects may "
            + " be present."
    };
  } else if (currentState == State.SHOWING_QUESTION) {
    fullQuestion = questions[currentQuestion];
    return {
      questionNo: "Question " + (currentQuestion+1) + " (of " + questions.length + ")",
      question: fullQuestion[QUESTION_ID],
      button: "Show answer"
    };
  } else if (currentState == State.SHOWING_ANSWER) {
    fullQuestion = questions[currentQuestion];
    pageNo = fullQuestion["page"]
    if (pageNo) {
      pageNo = "Page: " + pageNo;
    }
    return {
      questionNo: "Question " + (currentQuestion+1) + " (of " + questions.length + ")",
      question: fullQuestion[QUESTION_ID],
      button: currentQuestion < questions.length ? "Next question" : "End quiz",
      answer: fullQuestion[ANSWER_ID],
      pageNo: pageNo
    }
  } else {
    currentQuestion = 0;
    return {
        button: "Restart quiz"
    }
  };
}


QUIZ_BUTTON_ELEMENT.onclick = function() {
  changeState();
  updateElements();
}

SHOW_FLAGGED_BUTTON.style.display = "none";
SHOW_FLAGGED_BUTTON.onclick = function() {
  FLAGGED_MODAL_TEXT.innerHTML = buildModalContent();
  FLAGGED_MODAL.style.display = "block";
};

function buildModalContent() {
  if (flaggedQuestions.length == 0) {
    return "You have not flagged any questions yet.";
  }
  content = "";
  firstEntry = true;
  flaggedQuestions.forEach(function(question) {
    if (firstEntry) {
      firstEntry = false;
    } else {
      content = content.concat("<hr />")
    }
    content = content.concat("<div class=\"flaggedQuestion\">"
                     .concat(buildContentForFlaggedQuestion(question), "</div>"));
  });
  return content;
}

function buildContentForFlaggedQuestion(question) {
  return "<div class=\"flaggedModalQuestion\">"
      .concat(question.question)
      .concat("</div>")
      .concat("<div class=\"flaggedModalAnswer\">")
      .concat(question.answer)
      .concat("</div>");
}

CLOSE_MODAL.onclick = function() {
  FLAGGED_MODAL.style.display = "none";
  FLAGGED_MODAL_TEXT.innerHTML = null;
};

FLAG_BUTTON.onclick = function() {
  flaggedQuestions.push(questions[currentQuestion]);
  SHOW_FLAGGED_BUTTON.style.display = null;
}