console.log("weather app");
// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=YOUR_API_KEY

const form = document.querySelector("#form");
const input = document.querySelector("#input");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  axios(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input.value}?key=YOUR_API_KEY`
  )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
});
