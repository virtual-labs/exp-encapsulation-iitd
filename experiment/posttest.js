
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
      question: "Q1. Which of the following package stores all the standard java classes?",
      answers: {
        a: "lang",
        b: "java",
        c: "util",
        d: "java.packages"
      },
      correctAnswer: "b"
    },

    {
      question: "Q2. For which purpose packages are used in Java?",
	    
      answers: {
        a: "import statement",
        b: "main statement",
        c: "ry{} and catch{}",
        d: "package statement"
      },
      correctAnswer: "d"
    },

    {
      question: "Q3. A package is a collection of_____.",
      
      answers: {
        a: "classes",
        b: "interfaces", 
        c: "editing tools",
        d: "classes and interfaces"        
      },
      correctAnswer: "d"
    },
	
	{
      question: "Q4. Which of the following is/are advantages of packages?",
      answers: {
        a: "Packages avoid name clashes",
        b: "Classes, even though they are visible outside their package, can have fields visible to packages only",        
        c: "We can have hidden classes that are used by the packages, but not visible outside.",
        d: " All of the above"

      },
      correctAnswer: "d"
    },
	
	{
      question: "Q5. Which of the following is/are true about packages in Java? 1) Every class is part of some package. 2) All classes in a file are part of the same package. 3) If no package is specified, the classes in the file go into a special unnamed package  4) If no package is specified, a new package is created with folder name of class and the class is put in this package.",


      answers: {
        a: " Only 1, 2 and 3",
        b: "Only 1, 2 and 4",
        c: " Only 4",
        d: "Only 1 and 3"
      },
      correctAnswer: "a"
    },
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
