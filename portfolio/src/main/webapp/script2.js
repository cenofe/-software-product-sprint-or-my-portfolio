/** Fetches the current date from the server and adds it to the page. */
async function showFetch() {
  const responseFromServer = await fetch('/fetch');
  const textFromResponse = await responseFromServer.text();

  const fetchContainer = document.getElementById('fetch-container');
  fetchContainer.innerText = textFromResponse;
}