let nilai = prompt('Masukan nilai anda');

// jika nilai anda 90 - 100 maka dia dapat predikat A
// jika nilai anda 70 - 89 maka dia dapat predikat B
// jika nilai anda 50 - 69 maka dia dapat predikat C
// jika nilai anda < 50 maka dia dapat predikat E

if (nilai >= 90) {
  alert('Selamat anda mendapatkan Predikat A');
} else if (nilai >= 70) {
  alert('Selamat anda mendapatkan Predikat B');
} else if (nilai >= 50) {
  alert('Selamat anda mendapatkan Predikat C');
} else if (nilai == false) {
  alert('anda belum memasukan nilai');
  nilai = confirm('apa mau lanjut?');
} else {
  alert('Nilai anda E ' + ' maaf anda tidak lulus');
}
