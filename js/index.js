function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userElement = document.querySelector("#user-instructions").value;
  let apiKey = "25ba4b8ct7fc123o0c3d6fccfc118bbd";
  let prompt = `generate a very short french poem about ${userElement}.`;
  let context =
    "You are a smart poem expert and write a poem. Your mission is generate 4 short poems and write separate line with <br />. Write SheCodes AI inside <strong></strong> at the bottom";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
