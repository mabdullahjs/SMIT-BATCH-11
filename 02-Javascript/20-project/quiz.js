//get quiz questions

const div = document.querySelector("#quiz");
const btn = document.querySelector("#next");
let index = 0;
let questionsArr = [];

// problem ya haa ka correct answer hamesha 4 number pa araha ha. isko solve krna ha

const renderQuestion = (arr) => {
  if (index < questionsArr.length) {
    const answerArr = [
      ...arr[index].incorrectAnswers,
      arr[index].correctAnswer,
    ];
    console.log(answerArr);
    div.innerHTML += `
      <h1>Q${index + 1}: ${arr[index].question.text}</h1>
      <ul>
      ${answerArr.map((items) => `<li>${items}</li>`)}
      </ul>
      `;
  } else {
    console.log("question completed");
  }
};

btn.addEventListener("click", () => {
  div.innerHTML = "";
  index += 1;
  renderQuestion(questionsArr);
});

const getQuestions = async () => {
  try {
    const data = await fetch("https://the-trivia-api.com/v2/questions");
    const response = await data.json();
    console.log(response);
    questionsArr = response;
    renderQuestion(response);
  } catch (error) {
    console.log("error===>", error);
  }
};

getQuestions();
