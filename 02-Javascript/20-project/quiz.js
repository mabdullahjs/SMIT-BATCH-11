//get quiz questions

const div = document.querySelector("#quiz");
const btn = document.querySelector("#next");
let index = 0;
let result = 0;
let totalMarks = 0;
let questionsArr = [];

// problem ya haa ka correct answer hamesha 4 number pa araha ha. isko solve krna ha

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const renderQuestion = (arr) => {
  if (index < questionsArr.length) {
    const answerArr = [
      ...arr[index].incorrectAnswers,
      arr[index].correctAnswer,
    ];
    // console.log(answerArr);
    div.innerHTML += `
      <h1>Q${index + 1}: ${arr[index].question.text}</h1>
      <ul>
      ${shuffleArray(answerArr).map(
        (items) => `
        <li>
        <input type="radio" name="choice" class="choice" id=${items} value=${items}><label for=${items}>${items}</label>
        </li>`
      )}
      </ul>
      `;
  } else {
    console.log("question completed");
    window.location = "result.html";
    localStorage.setItem(
      "result",
      JSON.stringify({
        totalMarks,
        result,
      })
    );
  }
};

btn.addEventListener("click", () => {
  const choice = document.querySelectorAll(".choice");
  div.innerHTML = "";
  choice.forEach((item) => {
    if (item.checked) {
      if (item.nextSibling.innerHTML === questionsArr[index].correctAnswer) {
        result += 10;
      }
    }
  });
  index += 1;
  renderQuestion(questionsArr);
});

const getQuestions = async () => {
  //using async await

  try {
    const data = await fetch("https://the-trivia-api.com/v2/questions");
    const response = await data.json();
    console.log(response);
    totalMarks = response.length * 10;
    questionsArr = response;
    renderQuestion(response);
  } catch (error) {
    console.log("error===>", error);
  }

  // using .then and .catch

  // fetch("https://the-trivia-api.com/v2/questions")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((err) => {
  //     console.log("error ==> ", err);
  //   });
};

getQuestions();

// how to get checked value from radio btn

// const input = document.querySelectorAll(".gender");
// function hello() {
//   input.forEach((item) => {
//     if (item.checked) {
//       console.log(item.value);
//     }
//   });
// }
