let isLoading = false;
const posts = [];

async function getPosts() {
  isLoading = true;
  document.getElementById("loading").style.display = "block";
  const response = await fetch("<URL>");
  const data = await response.json();
  isLoading = false;
  document.getElementById("loading").style.display = "none";
  return data;
}

function renderPosts(posts) {
  const postsContainer = document.getElementById("posts");
  postsContainer.innerHTML = "";
  for (const post of posts) {
    const postTemplate = document.getElementById("post-template");
    const postElement = postTemplate.content.cloneNode(true);
    postElement.querySelector("h2").textContent = post.title;
    postElement.querySelector("p").textContent = post.body;
    postsContainer.appendChild(postElement);
  }
}

async function init() {
  const posts = await getPosts();
  renderPosts(posts);
}

init();