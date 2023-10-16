import {bandsiteObj} from "./band-site-api.js";

let comments = bandsiteObj.getComments();

function timestampToDate(timestamp) {
    const commentDate = new Date(timestamp); 
    let month = commentDate.getMonth() + 1;
    let date = commentDate.getDate();
    if (month < 10) {
        month  = '0' + month;
    }
    if (date < 10) {
        date = '0' + date;
    }
    return  `${month}/${date}/${commentDate.getFullYear()}`;
}


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
    commentTime.textContent = timestampToDate(comment.timestamp);

    const userInput = document.createElement("p");
    userInput.classList.add("comments__user-input");
    userInput.textContent = comment.comment;

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

comments.forEach((comment) => {
    displayComment(comment);
});


// form input section
const commentForm = document.querySelector(".comments__form");
    commentForm.addEventListener("submit", event => {
        event.preventDefault();

        const newUserObj = {
            name: event.target.userName.value,
            comment: event.target.userText.value
        }

        async function postComment(newUserObj) {
            await bandsiteObj.postComment(newUserObj); 
            comments = await bandsiteObj.getComments();
            comments.forEach((comment) => {
                displayComment(comment);
            });
        }
        postComment(newUserObj);

        document.querySelector(".comments__section").innerHTML = "";
        commentForm.reset();
});