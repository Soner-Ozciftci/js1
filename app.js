// console.log("Localde bulunan script calıstı");

// alert("Bu bir alert dir");// Alert uygulamayı bloklar(Blocking Code) //

// karar = confirm("Emin misiniz E/H");

// console.log(karar);

// console.warn("Bu bir uyarıdır");

// console.error("Eyvah hata..");

console.log("APP IS RUNNING");

const pi = 3.14;
console.log(typeof pi);
console.log(pi);

const sayi1 = "3";
console.log(typeof sayi1);

// const number1 =5
// number1 = 7 // const ile tanımlanan degıskene sonradana atama yapılamaz.

const varMi = true;
const isOpen = false;
console.log(isOpen, typeof isOpen);

let language = "java";
console.log(language, typeof language);

language = "Javascript";
console.log(language);

language = true;

console.log(language);

language = 3.14;
console.log(language);

let adet; //Js bır degıskenın türünü atanan degere göre belirler.Eger atama olmadıysa türu undefıned olarak belirlenmiş olur.
console.log(adet); // ?undefined

adet = "23"; // atama
console.log(typeof adet);

{
  let localDegisken = 5;
  localDegisken = localDegisken + 1;
  console.log(localDegisken);
}
