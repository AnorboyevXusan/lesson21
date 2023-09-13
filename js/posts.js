const userPostsRow = document.querySelector(".user-posts-row");

const query = new URLSearchParams(location.search);

const userId = query.get("userId");

userPostsRow.innerHTML = "<div>Loading...</div>";

getData(
  `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
  (posts) => {
    userPostsRow.innerHTML = "";
    posts.map((post) => {
      userPostsRow.innerHTML += `<div>
        <h3>${post.id} ${post.title}</h3>
        <p>${post.body}</p>
      </div>`;
    });
  }
);
