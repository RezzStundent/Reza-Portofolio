function typeText(elementId, typingSpeed, delayAfter) {
  const textElement = document.getElementById(elementId);
  const text = textElement.textContent;
  textElement.textContent = ''; // Kosongkan teks awal

  let index = 0;

  function type() {
    textElement.textContent += text.charAt(index); // Tambahkan karakter
    index++;

    if (index < text.length) {
      setTimeout(type, typingSpeed); // Panggil fungsi ini lagi setelah kecepatan
    } else {
      // Setelah semua karakter ditampilkan, tunggu sebelum reset
      setTimeout(() => {
        index = 0; // Reset index
        textElement.textContent = ''; // Kosongkan teks
        setTimeout(type, delayAfter*0); // Mulai kembali setelah jeda
      }, typingSpeed); // Tunggu selama kecepatan ketik untuk memastikan huruf terakhir terlihat
    }
  }

  type(); // Mulai efek ketik
}

// Panggil fungsi untuk masing-masing elemen dengan kecepatan dan jeda yang diinginkan
typeText('typing-text', 250, 2000); // Untuk elemen pertama, 200 ms typing dan 2000 ms delay
typeText('my-typing', 500, 2050); // Untuk elemen kedua, 200 ms typing dan 2000 ms delay

