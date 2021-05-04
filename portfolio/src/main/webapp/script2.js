/** Fetches the current date from the server and adds it to the page. */
async function getFetch() {
  const responseFromServer = await fetch("/fetch");
  const response = await responseFromServer.json();

  const fetchContainer = document.getElementById('fetch-container');
    fetchContainer.innerText = response[[Math.floor(Math.random() * response.length)]];


}



