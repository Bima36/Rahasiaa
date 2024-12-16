function showPage(pageId) {
  // Sembunyikan semua halaman
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.add('hidden'));

  // Tampilkan halaman yang dipilih
  document.getElementById(pageId).classList.remove('hidden');
}
