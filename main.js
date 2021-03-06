const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": "https://www.fumettologica.it/wp-content/uploads/2019/06/pepe-the-frog-670x366.jpg"
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
// MILESTONE 1 (stamp posts in HTML)

// FUNCTION
// DOM SECTION

function postInnerHTML(post) {
    return `<div class="post">
      <div class="post__header">
        <div class="post-meta">
          <div class="post-meta__icon">
            <img
              class="profile-pic"
              src=${post.author.image}
              alt=${post.author.name}
            />
          </div>
          <div class="post-meta__data">
            <div class="post-meta__author">${post.author.name}</div>
            <div class="post-meta__time">${post.created}</div>
          </div>
        </div>
      </div>
      <div class="post__text">
        ${post.content}
      </div>
      <div class="post__image">
        <img src=${post.media} alt="" />
      </div>
      <div class="post__footer">
        <div class="likes js-likes">
          <div class="likes__cta">
            <a class="like-button js-like-button" href="#" data-postid="1">
              <i
                class="like-button__icon fas fa-thumbs-up"
                aria-hidden="true"
              ></i>
              <span class="like-button__label">Mi Piace</span>
            </a>
          </div>
          <div class="likes__counter">
            Piace a
            <b id="like-counter-1" class="js-likes-counter">
              ${post.likes}
            </b>
            persone
          </div>
        </div>
      </div>
    </div>`;
  }


  
// MAIN
let likedPosts = []
// seleziono il container del mio DOM 
const container = document.querySelector('#container')
// Ciclo tutti gli oggenti all'interno di "posts" e li aggiungo al container
for (let i = 0; i < posts.length; i++) {
    container.innerHTML += postInnerHTML(posts[i]);
  }

// MILESTONE 2 (event click)
const elements = document.querySelectorAll(".post")
for (let i = 0; i < elements.length; i++) {
  const post = elements[i]

  const button = post.querySelector(".like-button")
  const counter = post.querySelector(".js-likes-counter")
  // take the post id from the data attribute of the like button
  const id = button.getAttribute("data-id");

  // evento click al bottone
  button.addEventListener("click", function () {
    //   tolgo like  se gi?? presente
    if (button.classList.contains("like-button--liked")) {
      likedPosts = likedPosts.filter((id) => id !== id)
      button.classList.remove("like-button--liked")
      counter.innerHTML--
    //  altrimenti aggiungo like
    } else {
      likedPosts.push(id)
      button.classList.add("like-button--liked")
      counter.innerHTML++
    }
  })
}