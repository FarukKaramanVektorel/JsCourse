var isim = "Ayşe";
var isim="murat"
console.log(isim);
const fruits=["elma", "armut", "çilek"];
//let fruits=["elma", "armut", "çilek"];
console.log(fruits);

fruits[0]=45;
console.log(fruits);

fruits.push("muz"); 
console.log(fruits);
fruits.pop();   
console.log(fruits);   

let kisi = {
    ad: "Ali",        // ad anahtarı, "Ali" değeri
    yas: 25,          // yas anahtarı, 25 değeri
    meslek: "Mühendis", // meslek anahtarı, "Mühendis" değeri
    evliMi: false     // evliMi anahtarı, false değeri
};

console.log(kisi.ad);       // "Ali"
console.log(kisi["yas"]);   // 25 (köşeli parantez içinde tırnak kullanırız)

kisi.yas = 26; // Yaşını 26 olarak değiştirdik
kisi.sehir = "Ankara"; // Yeni bir özellik ekledik
console.log(kisi);
