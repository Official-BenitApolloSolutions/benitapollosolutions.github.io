const container = document.querySelector(".container");
const cardTemplate = document.getElementById("card-template");
for (let i = 0; i < 10; i++) {
  container.append(cardTemplate.content.cloneNode(true));
}

fetch("https:/\/www.benitapollosolutions.com/data.json")
  .then((response) => response.json())
  .then((posts) => {
    container.innerHTML = "";
    posts.forEach((post) => {
      const div = cardTemplate.content.cloneNode(true);
      div.getElementById("card-link").href = post.link;
      div.getElementById("logo-img").src = post.logoImage;
      div.getElementById("card-title").textContent = post.title;
      div.getElementById("card-details").textContent = post.details;
      div.getElementById("cover-img").src = post.coverImage;
      div.getElementById(
        "card-footer"
      ).innerHTML = ` <ion-icon name="arrow-up"></ion-icon>
          <ion-icon name="chatbox-ellipses"></ion-icon>
          <ion-icon name="bookmark"></ion-icon>`;
      container.append(div);
    });
  });
