var color = document.getElementById('color');

color.addEventListener('input', function () {
  localStorage.setItem('color', color.value);
  document.body.style.backgroundColor = localStorage.getItem('color');
});
