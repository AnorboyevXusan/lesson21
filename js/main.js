const usersRow = document.querySelector(".users-row");

usersRow.innerHTML = "<div>Loading...</div>";

getData("https://jsonplaceholder.typicode.com/users", (res, status) => {
  usersRow.innerHTML = "";

  if (status === 200) {
    res.forEach((user) => {
      const userCard = document.createElement("div"); // Yangi div yaratish
      userCard.classList.add("user-card"); // CSS klass qo'shish (stil berish uchun)

      const userNameLink = document.createElement("a"); // Ism link yaratish
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

