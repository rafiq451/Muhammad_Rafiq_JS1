const tambah = document.getElementById('tambah');

let i = 1;
function tambahs() {
  return i++;
}

tambah.addEventListener('click', function () {
  const hasilAhir = document.getElementById('hasil');

  hasilAhir.innerText = tambahs();
});
