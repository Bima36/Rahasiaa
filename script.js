function openEnvelope() {
  document.getElementById('envelope').style.display = 'none';
  document.getElementById('main-content').classList.remove('hidden');
}

function handleChoice(choice) {
  if (choice === 'yes') {
    window.location.href = 'hadiah.html?response=yes';
  } else {
    window.location.href = 'hadiah.html?response=no';
  }
}
