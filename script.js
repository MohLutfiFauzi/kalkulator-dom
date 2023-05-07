const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const hasil = document.getElementById('hasil')
const tambah = document.getElementsByClassName('tambah')[0]
const kurang = document.getElementsByClassName('kurang')[0]
const kali = document.getElementsByClassName('kali')[0]
const bagi = document.getElementsByClassName('bagi')[0]
const reset = document.getElementById('reset')

let angka1;
let angka2;

input1.addEventListener('input', function () {
    angka1 = input1.value
});

input2.addEventListener('input', function () {
    angka2 = input2.value
});

reset.addEventListener('click', function () {
    input1.value = ""
    input2.value = ""
    hasil.value = "0"
    kurang.classList.remove('active')
    kali.classList.remove('active')
    bagi.classList.remove('active')
    tambah.classList.remove('active')
})

tambah.addEventListener('click', function () {
    this.classList.add('active')
    kurang.classList.remove('active')
    kali.classList.remove('active')
    bagi.classList.remove('active')

    if (angka1 && angka2) {
        let kalkulasi = parseInt(angka1) + parseInt(angka2)
        hasil.value = kalkulasi
    } else {
        hasil.value = "Input ada yang kosong"
    }
})

kurang.addEventListener('click', function () {
    this.classList.add('active')
    tambah.classList.remove('active')
    kali.classList.remove('active')
    bagi.classList.remove('active')

    if (angka1 && angka2) {
        let kalkulasi = parseInt(angka1) - parseInt(angka2)
        hasil.value = kalkulasi
    } else {
        hasil.value = "Input ada yang kosong"
    }
})

bagi.addEventListener('click', function () {
    this.classList.add('active')
    kurang.classList.remove('active')
    kali.classList.remove('active')
    tambah.classList.remove('active')

    if (angka1 && angka2) {
        let kalkulasi = parseInt(angka1) / parseInt(angka2)
        hasil.value = kalkulasi
    } else {
        hasil.value = "Input ada yang kosong"
    }
})

kali.addEventListener('click', function () {
    this.classList.add('active')
    kurang.classList.remove('active')
    tambah.classList.remove('active')
    bagi.classList.remove('active')

    if (angka1 && angka2) {
        let kalkulasi = parseInt(angka1) * parseInt(angka2)
        hasil.value = kalkulasi
    } else {
        hasil.value = "Input ada yang kosong"
    }
})