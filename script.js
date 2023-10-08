// contoh dari if
let nilaiUas = 85;

if (nilaiUas >= 70) {
    console.log("Anda Naik Kelas!");
}


// Contoh dari if else
let nilaiUas1 = 55;

if (nilaiUas1 >= 70) {
    console.log("Anda Naik Kelas!,jangan lupa info bakar-bakar");
} else {
    console.log("Selamat anda tinggal kelas lambaikan tangan jika tidak kuat");
}

// Contoh dari Nested if atau perulangan bersarang

let cuaca = "cerah";
let suhu = 25;

if (cuaca === "cerah") {
    if (suhu > 30) {
        console.log("Hari ini matahari sedang demam puanas e lur");
    } else {
        console.log("Hari ini cerah tapi dingin sedingin cintaku yang bertepuk sebelah tangan eaaa.");
    }
} else {
    console.log("Hari ini mendung, tidur saja kawan tidak ada yang menantimu puh sepuh");
}

// contoh switch case
let buah = 'Apel';
switch(buah) {
    case 'Pisang':
    case 'Nanas':
    case 'Klengkeng':
        console.log(`${buah} ready gan`);
        break;
    default:
        console.log(`${buah} belom musim cokk`);
        break;
}


// contoh dari for statement untuk menampilkan bilangan ganjil dengan push
let angka = [0,1,2,3,4,5,6,7,8,9,10]
let ganjil = []
for(let i = 0; i < angka.length; i++){
    if(angka[i] % 2 == 1 ){
    ganjil.push(angka[i]);
    }
}console.log(`${ganjil} Merupakan Bilangan Ganjil`);

// contoh while untuk menampilkan bilangan 1 sampai 10
let bil = 0
while (bil < 10) {
    bil++;
    console.log(`bilangan ke ${bil}`);
}

// contoh do while menampilkan bilangan 1 sampai 5
let bil1 = 0;
do {
  bil1 += 1;
  console.log(`bil ke ${bil1}`);
} while (bil1 < 5);

// contoh dari function menghitung jumlah huruf dari meme puh sepuhhh wkkwkw
function hitungHuruf(kata) {
    const huruf = 'AkuMasihPemulaPuhSepuhAjarindongpuhsepuh';
    let jumlahhuruf = 0;

    for (let i = 0; i < huruf.length; i++) {
        if (huruf.includes(huruf[i])) {
            jumlahhuruf++;
        }
    }

    return jumlahhuruf;
}

const huruf = "Ini adalah contoh program JavaScript";
const jumlah = hitungHuruf(huruf);
console.log(`Jumlah huruf dalam meme ini adalah: ${jumlah}`);

