// Animasi fade-in saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  if (container) {
    container.style.opacity = 0;
    container.style.transition = "opacity 1.5s ease";
    setTimeout(() => {
      container.style.opacity = 1;
    }, 100);
  }

  // Validasi form dan pesan konfirmasi
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // mencegah refresh halaman

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Validasi input
      if (!name || !email || !message) {
        alert("Harap isi semua kolom sebelum mengirim pesan.");
        return;
      }

      // Notifikasi sukses
      alert(`Terima kasih, ${name}! Pesanmu sudah dikirim ke Tulus 💌`);
      form.reset(); // mengosongkan form
    });
  }

  // Efek hover pada tombol menggunakan JS
  const button = document.querySelector("button");
  if (button) {
    button.addEventListener("mouseover", function () {
      button.style.transform = "scale(1.05)";
      button.style.transition = "0.3s";
    });

    button.addEventListener("mouseout", function () {
      button.style.transform = "scale(1)";
    });
  }
});
