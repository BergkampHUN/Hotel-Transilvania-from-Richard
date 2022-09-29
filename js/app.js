"use strict";

import { getGuestRequest } from "./getRequest.js";
import { postGuestRequest } from "./postRequest.js";

const firstPage = document.querySelector(".first-page");
const secondPage = document.querySelector(".second-page");
const navBtn = document.querySelector(".btn");
const guestCardWrapper = document.querySelector(".guest-card-wrapper");

//Error handling message
export const renderError = function (msg) {
  guestCardWrapper.insertAdjacentText("afterend", msg);
};

//Change "page" when click button
navBtn.addEventListener("click", function () {
  firstPage.classList.add("hidden");
  secondPage.classList.remove("hidden");
});

getGuestRequest();
postGuestRequest();

// console.log(new Date().toISOString());

// just for testing purpose
const deleteGuestRequest = function () {
  fetch(
    `https://crudcrud.com/api/31fcb17b05204056970f818a1b7dd437/guests/63358d8b06e25f03e8c52a68`,
    {
      method: "DELETE",
    }
  )
    .then((response) => response.json())
    .then((data) => renderGuestsCards(data))
    .catch((err) => {
      console.error(err);
    });
};

// deleteGuestRequest();
