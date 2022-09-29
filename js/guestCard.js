"use strict";

const firstPage = document.querySelector(".first-page");

//Make the container for the cards
const guestCardWrapper = document.createElement("div");

firstPage.appendChild(guestCardWrapper);

guestCardWrapper.classList.add("guest-card-wrapper");

export const makeGuestCard = function (
  fullName,
  roomNumber,
  startDate,
  endDate
) {
  //Creating elelements

  const guestCard = document.createElement("div");
  const wrapperInCard = document.createElement("div");
  const monogram = document.createElement("div");
  const nameDate = document.createElement("div");
  const name = document.createElement("div");
  const date = document.createElement("div");
  const roomWrapper = document.createElement("div");
  const room = document.createElement("div");
  const roomSpan = document.createElement("span");

  //Functions

  //Add content to elements
  //////////////////////////////////
  // Try to make a function later //
  //////////////////////////////////
  monogram.textContent = fullName
    .split(" ")
    .map((firstLetter) => {
      return firstLetter[0];
    })
    .join("")
    .toUpperCase();

  name.textContent = fullName;

  const startDateVariable = new Date(startDate);
  const endDateVariable = new Date(endDate);
  date.textContent = `${startDateVariable.toLocaleDateString()} - ${endDateVariable.toLocaleDateString()}`;

  roomSpan.textContent = "Room:";
  room.textContent = roomNumber;

  //Add classes to elements

  guestCard.classList.add("guest-card");
  wrapperInCard.classList.add("flex");
  monogram.classList.add("monogram", "flex");
  nameDate.classList.add("flex-name-date");
  name.classList.add("name");
  roomWrapper.classList.add("flex", "room-wrapper");
  room.classList.add("room");
  roomSpan.classList.add("room");

  // Actually make the element

  guestCardWrapper.appendChild(guestCard);
  guestCard.appendChild(wrapperInCard);
  wrapperInCard.appendChild(monogram);
  wrapperInCard.appendChild(nameDate);
  nameDate.appendChild(name);
  nameDate.appendChild(date);
  guestCard.appendChild(roomWrapper);
  roomWrapper.appendChild(roomSpan);
  roomWrapper.appendChild(room);
};

export const clearGuestCards = function() {
  const guestCardWrapper = document.querySelector('.guest-card-wrapper');
  guestCardWrapper.innerHTML = '';
}
