// Toggle hamburger
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Biar smooth scroll & otomatis nutup menu setelah klik (mobile)
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

// Loggika untuk form
const form = document.getElementById("contactForm");
const resultDiv = document.getElementById("formResult");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // biar ga reload halaman

  // Ambil value dari input
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  // Tampilkan hasil di bawah form
  resultDiv.innerHTML = `
      <h4>Terkirim ✅ <br>Terima kasih telah menghubungi kami!😊</h4>
      <h4>Data Anda:</h4>
      <p><strong>Nama:</strong> ${name}</p>
      <p><strong>No Whatsapp:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
    `;

  resultDiv.style.display = "block";

  // Reset form setelah submit
  form.reset();
});
