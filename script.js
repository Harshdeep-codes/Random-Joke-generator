
// selcting elments
const button = document.querySelector(".container button");
const jokeDiv = document.querySelector(".container .joke ");



button.addEventListener("click", getJock);

// function to fetch data

async function getJock() {
  const jokeData = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const jokeObj = await jokeData.json();
  jokeDiv.innerHTML = jokeObj.joke;
  console.log(jokeData);
}
