sessionStorage.removeItem("rating");

const clickRateNumber = (_e_) => {
  document.getElementById("select-msg").style.display = "none";
  const rating = sessionStorage.getItem("rating");
  if (rating !== null) {
    document.getElementById("rate-" + rating).classList.remove("selected");
  }
  _e_.classList.toggle("selected");
  sessionStorage.setItem("rating", _e_.innerText);
}

const submitFeedback = () => {
  const rating = sessionStorage.getItem("rating");
  if (rating !== null) {
    document.getElementById("rating").innerHTML = rating;
    const toHideClass = document.getElementsByClassName("rating-component");
    toHideClass[0].style.display = "none";
    const toShowClass = document.getElementsByClassName("thankyou-component");
    toShowClass[0].style.display = "block";
  } else {
    document.getElementById("select-msg").style.display = "block";
  }
}