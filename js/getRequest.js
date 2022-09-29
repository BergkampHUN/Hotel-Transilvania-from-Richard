import { makeGuestCard, clearGuestCards } from "./guestCard.js";
import { renderError } from "./app.js";

const renderGuestsCards = function (data) {
  clearGuestCards();

  for (let i = 0; i < data.length; i++) {
    makeGuestCard(
      data[i].name,
      data[i].room_number,
      data[i].start_date,
      data[i].end_date
    );
  }
};

export const getGuestRequest = function () {
  fetch(`https://crudcrud.com/api/31fcb17b05204056970f818a1b7dd437/guests`)
    .then((response) => response.json())
    .then((data) => renderGuestsCards(data))
    .catch((err) => {
      console.error(err);
      renderError(`Something went wrong! The page could not list the guests!`);
    });
};
