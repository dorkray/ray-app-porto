// Menunggu hingga seluruh konten halaman (HTML) dimuat
document.addEventListener('DOMContentLoaded', () => {

    // 1. Temukan semua gambar di dalam galeri
    const galleryImages = document.querySelectorAll('.gallery-grid img');

    // 2. Loop (ulangi) setiap gambar dan tambahkan 'event listener' klik
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            // Panggil fungsi untuk membuat lightbox saat gambar diklik
            createLightbox(img.src, img.alt);
        });
    });

    /**
     * Fungsi untuk membuat dan menampilkan lightbox
     * @param {string} src - URL sumber gambar yang akan ditampilkan
     * @param {string} alt - Teks alternatif untuk gambar
     */
    function createLightbox(src, alt) {
        // 3. Buat elemen overlay
        const overlay = document.createElement('div');
        overlay.className = 'lightbox-overlay'; // Beri kelas CSS

        // 4. Buat elemen gambar untuk di dalam overlay
        const lightboxImage = document.createElement('img');
        lightboxImage.src = src;
        lightboxImage.alt = alt;

        // 5. Masukkan gambar ke dalam overlay
        overlay.appendChild(lightboxImage);

        // 6. Masukkan overlay ke dalam <body> halaman
        document.body.appendChild(overlay);

        // 7. Tambahkan event listener untuk MENUTUP lightbox
        // Saat overlay (area gelap) diklik, hapus overlay-nya
        overlay.addEventListener('click', () => {
            // Cek jika overlay masih ada di body sebelum menghapus
            if (document.body.contains(overlay)) {
                document.body.removeChild(overlay);
            }
        });
    }
});