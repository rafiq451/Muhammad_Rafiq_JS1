let angka = prompt('masukan angka');

if (angka % 2 === 0) {
  // jika kondisinya bernilai true maka dia akan melakukan aksi 1
  alert(angka + ' adalah bilangan GENAP'); //aksi 1
  angka = confirm('apakah anda ingin coba kembali?');
} else {
  //jika kondisinya bernilai false maka dia akan melakukan aksi 2
  alert(angka + ' adalah bilangan GANJIL');
  angka = confirm('apakah anda ingin coba kembali?'); //aksi 2
}
