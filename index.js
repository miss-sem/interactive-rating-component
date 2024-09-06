const ratings = document.getElementsByClassName("numbers");

let selectedRating = null;

function getSelectedRating(num) {
  let element;
  for (let i = 0; i < ratings.length; i++) {
    element = ratings[i];
    if (ratings[i].innerHTML == num) {
      element.style.backgroundColor = "white";
      element.style.color = "hsl(216, 12%, 8%)";
      selectedRating = element.innerHTML;
    } else {
      element.style.backgroundColor = "hsl(213, 19%, 18%)";
      element.style.color = "hsl(217, 12%, 63%)";
    }
  }
}

function submit() {
  if (selectedRating) {
    document.getElementById("rating").innerHTML = selectedRating;
    console.log(selectedRating);
    let ratingContainer = document.getElementsByClassName("containerRate")[0];
    let thanksDIv = document.getElementsByClassName("containerForThanks")[0];
    ratingContainer.style.display = "none";
    thanksDIv.style.display = "block";
  }
}
