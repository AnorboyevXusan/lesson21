const usersRow = document.querySelector(".users-row");

usersRow.innerHTML = "<div>Loading...</div>";

getData("https://jsonplaceholder.typicode.com/users", (res, status) => {
  usersRow.innerHTML = "";

  if (status === 200) {
    res.forEach((user) => {
      const userCard = document.createElement("div");
      userCard.classList.add("user-card"); 

      const userNameLink = document.createElement("a");
      userNameLink.href = `posts.html?userId=${user.id}`;
      userNameLink.textContent = `${user.id} ${user.name}`;

      const userEmailLink = document.createElement("a"); 
      userEmailLink.href = `posts.html?userId=${user.id}`;
      userEmailLink.textContent = user.email;

    
      userCard.appendChild(userNameLink);
      userCard.appendChild(userEmailLink);
      
      usersRow.appendChild(userCard);
    });
  } else {
    usersRow.innerHTML = res;
  }
});

