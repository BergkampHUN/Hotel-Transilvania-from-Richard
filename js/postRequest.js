const form = document.getElementById("form");

const firstPage = document.querySelector(".first-page");
const secondPage = document.querySelector(".second-page");

export const postGuestRequest = function () {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const outgoingDataArr = [...new FormData(form)];
    const outgoingData = Object.fromEntries(outgoingDataArr);

    console.log(outgoingDataArr);

    console.log(JSON.stringify(outgoingData));

    fetch(`https://crudcrud.com/api/31fcb17b05204056970f818a1b7dd437/guests`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(outgoingData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    firstPage.classList.remove("hidden");
    secondPage.classList.add("hidden");
  });
};
