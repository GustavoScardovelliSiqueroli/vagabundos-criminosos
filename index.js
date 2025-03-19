let isLoading = false;
let container = document.getElementsByClassName("space")[0];

async function fetchCraftar() {
  if (isLoading) {
    return;
  }
  if (document.body.getElementsByTagName("img").length > 0) {
    document.body.getElementsByTagName("img")[0].remove();
  }
  isLoading = true;
  let isLoadingImg = document.createElement("img");
  isLoadingImg.classList.add("loading");
  isLoadingImg.src = "loading.gif";
  container.appendChild(isLoadingImg);

  let response = await fetch("https://cataas.com/cat");
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  let blob = await response.blob();

  if (document.body.getElementsByTagName("img").length > 0) {
    document.body.getElementsByTagName("img")[0].remove();
  }
  let image = document.createElement("img");
  image.src = URL.createObjectURL(blob);
  container.appendChild(image);

  isLoading = false;
}