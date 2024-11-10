// Opens a registration alert box
function openRegistrationForm() {
  alert("Thank you for your interest! Registration will open soon.");
}
// // function showTrailer() {
// //   const trailerSection = document.getElementById("trailer-section");
// //   trailerSection.classList.toggle("hidden");
// // }
// // Show the trailer modal
// function showTrailer() {
//   const modal = document.getElementById("trailer-modal");
//   modal.style.display = "block";
// }

// // Close the trailer modal
// function closeTrailer() {
//   const modal = document.getElementById("trailer-modal");
//   modal.style.display = "none";
// }

// // Close the modal if the user clicks outside of the modal content
// window.onclick = function (event) {
//   const modal = document.getElementById("trailer-modal");
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
function showTrailer() {
  document.getElementById("trailer-modal").style.display = "flex";
}

function closeTrailer() {
  document.getElementById("trailer-modal").style.display = "none";
}
