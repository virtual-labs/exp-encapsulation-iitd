
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  

// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "Q1. Which of these keywords is used to define packages in Java?",
      answers: {
        a: "pkg",
        b: "package",
      },
      correctAnswer: "b"
    },

    {
      question: "Q2. Which of these is a mechanism for naming and visibility control of a class and its content?",
      answers: {
        a: "Object",
        b: "Packages",
        c: "Interfaces",
        d: "None of these"

      },
      correctAnswer: "b"
    },

    {
      question: "Q3.  Which of this access specifies can be used for a class so that its members can be accessed by a different class in the same package?",
      answers: {
        a: "Public",
        b: "Protected",
        c: "Private",
        d: "No Modifier"
      },
      correctAnswer: "a"
    },
	
	{
      question: "Q4. Which of the following is correct way of importing an entire package ‘pkg’?",
      answers: {
        a: " import pkg-",
        b: "Import pkg",
        c: " import pkg*",
        d: "Import pkge"
      },
      correctAnswer: "c"
    },
	
	{
      question: "Q5.Which of the following is incorrect statement about packages?",
      answers: {
        a: " Package defines a namespace in which classes are stored",
        b: "A package can contain other package within it",
        c: "Java uses file system directories to store packages",
        d: " A package can be renamed without renaming the directory in which the classes are stored"
      },
      correctAnswer: "d"
    },
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
