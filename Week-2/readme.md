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
const result = foo + '1'; // JavaScript memaksa foo ke string, sehingga dapat digabungkan dengan operan lainnya
console.log(result); // 421
```

### JavaScript types

Himpunan tipe dalam bahasa JavaScript terdiri dari: Primitive Value dan objects

#### Primitive Value

- [Boolean type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures?retiredLocale=id#boolean_type)
- [Null type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures?retiredLocale=id#null_type)
- [Undefined type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures?retiredLocale=id#null_type)
- [Undefined type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures?retiredLocale=id#undefined_type)
- [Number type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures?retiredLocale=id#number_type)
- [BigInt type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures?retiredLocale=id#bigint_type)
- [String type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures?retiredLocale=id#string_type)
- [Symbol type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures?retiredLocale=id#symbol_type)

#### Objects

Dalam ilmu komputer, objek adalah nilai dalam memori yang mungkin dirujuk oleh pengenal.

- [properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures?retiredLocale=id#properties)
  - [Data property](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures?retiredLocale=id#data_property)
  - [Accessor property](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures?retiredLocale=id#Accessor_property)
- ["Normal" objects, and functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures?retiredLocale=id#normal_objects_and_functions)
- [Dates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures?retiredLocale=id#dates)
- [Indexed collections: Arrays and typed Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures?retiredLocale=id#indexed_collections_arrays_and_typed_arrays)
- [Keyed collections: Maps, Sets, WeakMaps, WeakSets](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures?retiredLocale=id#keyed_collections_maps_sets_weakmaps_weaksets)

### JavaScript types 2

#### `String`

#### Crating String

```js
const string1 = 'A string primitive';
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
const string4 = new String('A String object');
```

#### Character Access

```js
'cat'.charAt(1); // gives value "a"
'cat'[1]; // gives value "a"
```

#### Comparing strings

```js
const a = 'a';
const b = 'b';
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}
```

```js
function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}
```

#### `Number`

Number adalah objek pembungkus primitif yang digunakan untuk mewakili dan memanipulasi angka seperti 37 atau -9,25. Konstruktor Number berisi konstanta dan metode untuk bekerja dengan angka. Nilai dari tipe lain dapat dikonversi ke angka menggunakan fungsi Number().

```js
123; // one-hundred twenty-three
123.0; // same
123 === 123.0; // true
```

```js
Number('123'); // returns the number 123
Number('123') === 123; // true

Number('unicorn'); // NaN
Number(undefined); // NaN
```

#### `Math`

Math adalah Build-In Object yang memiliki properti dan metode untuk konstanta dan fungsi matematika. Ini bukan Function Object

- [Static Properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math?retiredLocale=id#static_properties)
- [Static Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math?retiredLocale=id#static_methods)

## 2. JavaScript dan HTML DOM

#### `Memanipulasi Element HTML`

#### mencari element

```html
<body>
  <div id="header">
    <p>
      <span> </span>
    </p>
  </div>
  <div class="container"></div>
  <div class="container"></div>
</body>
```

```js
// Mencari 1 element dengan id tertentu
document.getElementById('header');
// Mencari beberapa element sekaligus
// dengan class tertentu
document.getElementsByClassName('container');
// Mencari element menggunakan
// kombinasi selector ( seperti di CSS )
document.querySelector('#header p span');
```

#### mengubah konten element

```html
<!-- Kombinasi dari html -->
<h1 id="heading"></h1>

<!-- dan dom js -->
<script>
  document.getElementById('heading').textContent = 'Teks Heading';
</script>

<!-- Sama hasilnya seperti menulis -->
<h1 id="heading">Teks Heading</h1>
```

![Illustration to use for new users](img/textheading.jpg)

#### membuat element HTML

```html
<!-- Jika ada element ini di file html -->
<div id="header "></div>
```
```js
// lalu kita gunakan kode JavaScript ini
// untuk membuat sebuah element heading
const heading = document.createElement("h1") 
heading.textContent = "Ini Heading"
document.getElementById ("header").appendChild(heading)
```
```html
<!-- Hasilnya akan sama seperti jika kita menulis -->
<div id="header ">
  <h1>Ini Heading</h1>
</div>
```

#### `DOM Event`

