function handleChoice(choice) {
  if (choice === 'yes') {
    window.location.href = 'hadiah.html?response=yes';
  } else {
    window.location.href = 'hadiah.html?response=no';
  }
}
