const comments = [
    {
        name: "Connor Walton",
        date: "02/17/2021",
        text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
        name: "Emilie Beach",
        date: "01/09/2021",
        text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        name: "Miles Acosta",
        date: "12/20/2020",
        text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
];

comments.forEach((comment) => {
    displayComment(comment);
});

function displayComment(comment) {
    const commentSectionEl = document.createElement("div");
    commentSectionEl.classList.add("comments__input");

    const commentImageEl = document.createElement("img");
    commentImageEl.classList.add("comments__user-image");
    
    const commentUser = document.createElement("div");
    commentUser.classList.add("comments__user");

    const userData = document.createElement("div");
    userData.classList.add("comments__user-data");

    const userName = document.createElement("h3");
    userName.classList.add("comments__user-name");
    userName.textContent = comment.name;

    const commentTime = document.createElement("p");
    commentTime.classList.add("comments__time");
    commentTime.textContent = comment.date;

    const userInput = document.createElement("p");
    userInput.classList.add("comments__user-input");
    userInput.textContent = comment.text;

    const divider = document.createElement("hr");

    commentUser.append(
        userData,
        userInput
    );

    userData.append(
        userName,
        commentTime
    );  

    commentSectionEl.append(
        commentImageEl,
        commentUser
    );

    document.querySelector(".comments__section").append(commentSectionEl, divider);
}

// form input secrtion
const commentForm = document.querySelector(".comments__form");

commentForm.addEventListener("submit", event => {
    
    event.preventDefault();

    // creates a date object of current date and time
    const commentDate = new Date(); 
    let month = commentDate.getMonth() + 1;
    let date = commentDate.getDate();

    if (month < 10) {
        month  = '0' + month;
    }
    if (date < 10) {
        date = '0' + date;
    }

    const displayDate = `${month}/${date}/${commentDate.getFullYear()}`;

    const newUserObj = {
        name: event.target.userName.value,
        date: displayDate,
        text: event.target.userText.value
    }
    comments.unshift(newUserObj);

    document.querySelector(".comments__section").innerHTML = "";
    comments.forEach((comment) => {
        displayComment(comment);
    });

    commentForm.reset();
});

