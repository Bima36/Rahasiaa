function showMessage(choice) {
  // Sembunyikan semua pesan terlebih dahulu
  document.querySelectorAll('.message').forEach(msg => msg.style.display = 'none');
  
  // Tampilkan pesan berdasarkan pilihan
  if (choice === 'yes') {
    document.getElementById('message-yes').style.display = 'block';
  } else if (choice === 'friend') {
    document.getElementById('message-friend').style.display = 'block';
  }
}
