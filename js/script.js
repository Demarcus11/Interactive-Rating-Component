const interactiveContainer = document.querySelector(".interactive");
const thankYouContainer = document.querySelector(".thank-you");
const submitButton = document.querySelector(".button");
const rating = document.getElementById("rating");
const ratingButtons = document.querySelectorAll(".rating-circle");

// EV for submit
submitButton.addEventListener("click", () => {
  thankYouContainer.classList.remove("hidden");
  interactiveContainer.style.display = "none";
});

// EV for every rating button
ratingButtons.forEach((ratingButton) => {
  ratingButton.addEventListener("click", () => {
    // Change the innerHTML for the tag with id="rating" to the correct rating selected
    rating.innerHTML = ratingButton.querySelector(".rating-value").innerHTML;

    // Remove the active class for all rating buttons
    ratingButtons.forEach((ratingButton) => {
      ratingButton.classList.remove("active");
    });

    // Add active class for selected rating button
    ratingButton.classList.add("active");
  });
});
