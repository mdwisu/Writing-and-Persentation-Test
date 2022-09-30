# <p style="text-align: center;">`Writing and Presentation Test Week 2 `</p>

---

## 1. Javascript Scope

- Scope adalah konsep dalam flow data variabel.
- Menentukan suatu variabel bisa diakses pada scope tertentu atau tidak.

### Blocks

- Blocks adalah code yang berada didalam curly braces {}.
- Conditional, function, dan looping menggunakan blocks.

### Global Scope

- Global scope berarti variabel yang kita buat dapat diakses dimanapun dalam suatu file.
- Agar menjadi Global Scope, suatu variabel harus dideklarasikan diluar Blocks.

### Local Scope

- Local scope berarti kita mendeklarasikan variabel didalam blocks seperti function, conditional, dan looping.
- Maka variabel hanya bisa diakses didalam blocks saja. Tidak bisa diakses diluar blocks.

## 1. Javascript Function

Function adalah sebuah blok kode dalam sebuah grup untuk menyelesaikan 1 task/1 fitur.

### membuat function

```js
function greeting() {
  return 'Hello World';
}
```

### memanggil function

```js
greeting();
console.log(greeting());
```

### parameter argument

- parameter

```js
function penambahan(a, b) {
  return a + b;
}
```

- argument

```js
console.log(penambahan(5, 10));
```

### default parameter

Default paramaters digunakan untuk memberikan nilai awal/default pada parameter function.

```js
function greetOnWebsite(nama = 'John Doe') {
  return nama;
}
```

### default parameter

Kita bisa menggunakan function yang sudah dibuat pada function lain.

```js
function multiplyByNineFifths(number) {
  return number * (9 / 5);
}
function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
}
getFahrenheit(15); // Returns 59
```

### arrow function

Arrow function adalah cara lain menuliskan function. Ini adalah fitur terbaru yang ada pada ES6 (Javascript Version)

```js
const greeting = () => {
  return 'Hello world';
};
```

### Short Syntax Function

```js
// nol parameters
const functionName = ( ) = > { } ;
// satu parameter
const functionName = paramOne = > { } ;
// 2 atau lebih parameter
const functionName = ( paramone , paramTwo ) = > { } ;
```

### JavaScript error messages && debugging

- untuk mengetahui error anda dapat membaca pesan message tentunya harus megerti bahasa inggris, atau mengcopy error message ke browser

- melakukan console.log untuk mengecek suatu variable atau fungsi

- menghapus sedikit demi sedikit codingan anda untuk mengetahui letak dimana error tersebut berada

## 2. JavaScript data types and data structures

### Dynamic and weak typing

JavaScript adalah bahasa dinamis dengan tipe dinamis. Variabel dalam JavaScript tidak secara langsung terkait dengan jenis nilai tertentu, dan variabel apa pun dapat diberi (dan ditetapkan ulang) nilai dari semua jenis:

```js
let foo = 42; // foo is now a number
foo = 'bar'; // foo is now a string
foo = true; // foo is now a boolean
```

JavaScript juga merupakan bahasa yang diketik dengan lemah, yang berarti memungkinkan konversi tipe implisit saat operasi melibatkan tipe yang tidak cocok, alih-alih melempar kesalahan tipe.

```js
const foo = 42; // foo is a number
const result = foo + "1"; // JavaScript memaksa foo ke string, sehingga dapat digabungkan dengan operan lainnya
console.log(result); // 421
```

### JavaScript types