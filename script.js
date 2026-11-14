function filterMenu(category, buttonElement) {
  // Ambil semua kartu menu
  const cards = document.querySelectorAll(".card");
  
  // Ubah status tombol aktif pada navigasi
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => btn.classList.remove("active"));
  buttonElement.classList.add("active");

  // Filter tampilan kartu
  cards.forEach((card) => {
    const cardCategory = card.getAttribute("data-category");
    if (category === "all" || cardCategory === category) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}
