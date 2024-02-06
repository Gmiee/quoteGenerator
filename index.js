function fetchRandomQuote() {
  let URL = "https://api.quotable.io/random";
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      let quoteText = `${data.content} - ${data.author} - ${data.dateAdded}`;
      document.querySelector(".quote").innerText = quoteText;
      console.log(data);
    });
}

let changeElementClass = document.getElementById('btn')
changeElementClass.classList.toggle("btnnn")