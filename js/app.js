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
export const deleteGuestRequest = function (id) {
  console.log(id)
  fetch(
    `https://crudcrud.com/api/31fcb17b05204056970f818a1b7dd437/guests/${id}`,
    {
      method: "DELETE",
    }
  )
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      getGuestRequest();
    })
    .catch((err) => {
      console.error(err);
      renderError(`Something went wrong! Can't delete the guest!`);
    });
};

// deleteGuestRequest();
