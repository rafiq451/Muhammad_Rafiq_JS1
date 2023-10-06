let nama = prompt('Masukan nama');

// jika anda memasukan nama dengan benar maka akan muncul pesan "halo nama anda" dan ada interaksi lagi 'apakah anda ingin mencoba kembali?'
// dan jika yang anda masukan itu bukan huruf maka akan muncul pesan komfirmasi yang anda masukan bukan huruf

if (/^[a-zA-Z]+$/.test(nama)) {
  alert(`halo ${nama}`);
  nama = confirm('apakah anda ini mecoba lagi ?');
  nama = prompt('masukan nama anda');
  if (/^[a-zA-Z]+$/.test(nama)) {
    alert(`halo ${nama}`);
    alert('terimakasih Telah mencoba');
  }
} else {
  alert(`Yang anda masukan bukan nama`);
  nama = prompt('silakan masukan nama anda dan pastikan yang anda input itu huruf');
  if (/^[a-zA-Z]+$/.test(nama)) {
    alert(`halo ${nama}`);
    alert('terimakasih Telah mencoba');
  }
}
