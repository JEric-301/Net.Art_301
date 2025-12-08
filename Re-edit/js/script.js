document.querySelectorAll('.bio-button').forEach(button => {
  button.addEventListener('click', () => {
    const bio = button.parentElement.nextElementSibling.nextElementSibling;
    bio.style.display = bio.style.display === "block" ? "none" : "block";
  });
});