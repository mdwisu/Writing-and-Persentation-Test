# <p style="text-align: center;">`Writing and Presentation Test Week 3 `</p>

---

## 1. Javascript Array

- array adalah Mengorganisasi data dan menyimpan data adalah core concept dari programming.
- Array adalah tipe data list order yang dapat menyimpan tipe data apapun di dalamnya.
- Array dapat menyimpan tipe data String, Number, Boolean, dan lainnya.

```js
let productTeam = ['Backend Dev', 'Frontend Dev'];
console.log(productTeam);
```

### Membuat Array

- Array didefinisikan menggunakan square brackets

```js
// square bucket
[];
```

### Mengakses atau memanggil Array

```js
let productTeam = ['Backend Dev', 'Frontend Dev'];
console.log(procuctTeam[0]); // output Backend Dev
console.log(procuctTeam[1]); // output Frontend Dev
```

### Update Array

```js
let productTeam = ['Backend Dev', 'Frontend Dev'];
procuctTeam[0] = 'Game Dev';
console.log(productTeam); // ['Game Dev', 'Frontend Dev']
```

### Const in array

- Jika menggunakan let, kita dapat mengubah array dengan array baru dan konten nilai yang ada di dalam array dengan nilai lain
- Const tidak bisa melakukan update data. Namun pada Array kita dapat melakukan update konten nilai di dalam array (mutable).
- Yang tidak bisa adalah mengubah array dengan array yang baru jika menggunakan const

```js
const productTeam = ['Backend Dev', 'Frontend Dev'];
productTeam = ['Game Dev', 'UI UX Desain'];
console.log(productTeam);
// Output error tidak bisa update array baru
```

```js
const cars = ['tesla', 'honda', 'toyota'];
cars[2] = ['nissan'];
console.log(cars);
// Output : ['Tesla', 'honda' , 'nissan']
```

### array properties

- Properties adalah fitur yang sudah disediakan oleh Javascript untuk memudahkan developer.
- Array memiliki 5 properti yang sering digunakan yaitu constructor, length, index, input, dan prototype.

#### .length

- length akan mengembalikan nilai dari jumlah panjang data suatu array.

```js
let productTeam = [
  'Product Manager ',
  'Front End Developer ',
  'Back End Developer ',
];
console.log(productTeam.length);
// Output : 3
```

### Array Method

- Array memiliki method atau biasa disebut built-in methods.
- Artinya Javascript sudah memudahkan kita dengan menyediakan function/method umum yang bisa kita gunakan.

#### .push()

- .push() adalah method untuk menambahkan item array pada urutan yang paling akhir.

```js
let toDoList = [
  'Belajar javascript',
  'Mencuci baju',
  'Latihan membuat aplikasi javascript',
];
toDoList.push('Mengikuti kelas Online Programming');
console.log(toDoList);
// Output : [
// 'Belajar javascript ',
// 'Mencuci baju ',
// 'Latihan membuat aplikasi javascript',
// 'Mengikuti kelas Online Programming'
// ];
```

#### .pop()

- .pop() adalah method yang menghapus item array index terakhir.

```js
let toDoList = [
  'Belajar javascript',
  'Mencuci baju',
  'Latihan membuat aplikasi javascript',
];
toDoList.pop();
console.log(toDoList);
//  Output : [
//  'Belajar javascript',
//  'Mencuci baju',
//  ] ;
```

#### .shift()

- .shift() adalah method untuk menghapus item Array pada index pertama

```js
let toDoList = [
  'Belajar javascript',
  'Mencuci baju',
  'Latihan membuat aplikasi javascript',
];
toDoList.shift();
console.log(toDoList);
//  Output : [
//  'Mencuci baju',
//  'Latihan membuat aplikasi javascript',
//  ] ;
```

#### .unshift()

- .unshift() adalah method untuk menambahkan item Array pada index pertama

```js
let toDoList = [
  'Belajar javascript',
  'Mencuci baju',
  'Latihan membuat aplikasi javascript',
];
toDoList.unshift('Mengikuti kelas online programming');
console.log(toDoList);
//  Output : [
//  'Mengikuti kelas online programming',
//  'Mencuci baju',
//  'Latihan membuat aplikasi javascript',
//  ] ;
```

#### .sort()

- .sort() adalah method untuk mengurutkan secara Ascending atau Descending Alphanumeric

```js
const numbers = [1, 5, 6, 7, 4];
numbers.sort();
console.log(numbers);
// Output : [ 1 , 4 , 5 , 6 , 7 ]
```

### Looping pada array

- Array memiliki built in methods untuk melakukan looping yaitu .map() dan .forEach()

##### .forEach()

- .forEach() adalah method untuk melakukan looping pada setiap elemen array.

```js
const cars = ['tesla', 'honda', 'toyota'];
cars.forEach((element) => {
  console.log(element);
});
// Output : 'tesla' , 'honda' , 'nissan'
```

##### .map()

- .map() melakukan perulangan/looping dengan membuat array baru.

```js
let arr = [1, 2, 3, 4, 5];
let doubled = arr.map((num) => {
  return num * 2;
});
console.log(doubled);
// Output : [2, 4, 6, 8, 10]
```

## 2. Javascript Object

- object adalah sebuah tipe data pada variabel yang menyimpan properti dan fungsi (method)
- Properti adalah data lengkap dari sebuah object.
- Method adalah action dari sebuah object. Apa saja yang dapat dilakukan dari suatu object.

### Membuat Sebuah Object

```js
let person = {
  name: 'john doe',
  age: 25,
  'current address': 'bogor indonesia',
};
```

### untuk mengakses

```js
console.log(person);
// output object
```

### untuk mengakses properti obj

```js
console.log(person.name);
// output 'john doe'
```

bracket notation
Kita juga bisa menggunakan bracket notation saat memanggil properti dari sebuah object.

```js
console.log(person['name']);
// output 'john doe
```

### Update Object property

```js
person.name = 'Dwi';
console.log(person.name);
// output : Dwi
```

### Delete Object property

```js
delete person.name;
console.log(person.name);
// output : undefined
```

### Method

- Jika value yang kita masukkan pada property berupa function, Maka itu disebut method.

### Nested Object

- Pada real application nanti kalian pasti menemukan data object yang kompleks, Object yang berasal dari turunan object lainnya.

```js
const news = {
    title : 'Impact Byte menjadi Unicorn',
  description :'Lorem ipsum dolor sit amet , consectetur adipiscing elit . " ,
  author : {
      people : {
          name :'David Winalda',
      age : 25 ,
      city :'Bandung',
} ;
   }
```

### Pass by reference

- passed by reference yaitu mengubah data yang ada pada object melalui sebuah function dan memasukkan object sebagai parameter function.

```js
let number = {
  originA: 2,
  originB: 3,
};
function changeData(obj) {
  obj.originA = 4;
  obj.originB = 6;
}

changeData(number);
console.log(number.originA); // 4
console.log(number.originB); // 6
```

### Looping Object

```js
for (const key in object) {
  // ...
  }
}
```

### Array of Object

- Object sama seperti Array yang bisa menyimpan banyak data.
- Kita dapat menggunakan array of object untuk data yang lebih dari satu.

```js
let students = [
  {
    name: 'John Doe',
    age: 25,
    isVerified: true,
  },
  {
    name: 'Dave Winalda',
    age: 26,
    isVerified: false,
  },
  {
    name: 'Ryan Snow',
    age: 30,
    isVerified: true,
  },
];
// Gunakan forEach jika object berada didalam array
students.forEach((ListStudent) => {
  console.log(listStudent);
});
```

## 3. Javascript Rekursive

- Recursive adalah function yang memanggil dirinya sendiri sampai kondisi tertentu.
- Recursive kebanyakan digunakan untuk case matematika, fisika, kimia, dan yang berhubungan dengan calculation.

```js
function rekursive() {
  // ...
  rekursive();
  // ...
}
function rekursive() {
  if (condition) {
    // stop calling itself
    // ...
  } else {
    rekursive();
  }
}
```

### contoh kasus rekursive

menghitung mundur number

```js
function countDown(fromNumber) {
  console.log(fromNumber);
  let nextNumber = fromNumber - 1;
  // Jika kondisi ini bernilai false maka recursive berhenti
  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}
countDown(3);
// Output :
// 2
// 1
```

mencari haril nilai pangkat

```js
function pow(x, n) {
  if ((n = 1)) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}
console.log(pow(2, 3)); // 8
```

---

### **JavaScript Asynhronous**

---

#### **Pengertian**
Fungsi yang berjalan secara paralel dengan fungsi lain disebut asinkron.

```javascript
function myDisplayer(something) {
  document.getElementById("demo").innerHTML = something;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
```
Hasil :

>**Catatan:**
>Di dunia nyata, panggilan balik paling sering digunakan dengan fungsi asinkron.
>Contoh tipikal adalah JavaScript ``setTimeout()``

#### **Menunggu Waktu Habis**
Saat menggunakan fungsi JavaScript setTimeout(), Anda dapat menentukan fungsi panggilan balik yang akan dijalankan pada waktu habis
Conton:
```javascript
setTimeout(myFunction, 3000);

function myFunction() {
  document.getElementById("demo").innerHTML = "I love You !!";
}
```
>**Catatan:**
>Pada contoh di atas, myFunctiondigunakan sebagai callback.
>``myFunction`` diteruskan setTimeout()sebagai argumen.
>3000 adalah jumlah milidetik sebelum time-out, jadi myFunction()akan dipanggil setelah 3 detik.
>Saat Anda melewatkan fungsi sebagai argumen, ingatlah untuk tidak menggunakan tanda kurung.
>Benar : ``setTimeout(myFunction, 3000);``
>Salah : ``setTimeout(myFunction(), 3000);``

#### **Menunggu Interval**
Saat menggunakan fungsi JavaScript setInterval(), Anda dapat menentukan fungsi panggilan balik yang akan dijalankan untuk setiap interval:
Contoh:
```javascript
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}
```

### **Promise**
#### **Pengertian**
Contoh Sederhana:
Bayangkan kamu seorang anak kecil. Mamamu berjanji kalau dia akan memberikan kamu sebuah smartphone terbaru minggu depan. 
Kamu tidak tahu jika kamu akan mendapatkannya sampai minggu depan, apakah dia akan benar membelikannya atau tidak.
Itulah sebuah promise. Sebuah promise mempunyai 3 kemungkinan. 
- Pending : Kamu tidak tahu jika kamu akan mendapatkan hp
- Fulfilled : Mama senang, dia membelikan hp terbaru
- Rejected : Mama tidak senang, dia tidak membelikan kamu hp

#### **Membuat sebuah Promise**
```javascript
// ES5: Part 1

var isMomHappy = false;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);
```
#### **Sintax sebuah Promise**
```javascript
new Promise(function (resolve, reject) { ... } );
```

#### **Consuming Promises**
```javascript
// ES5: Part 2

var willIGetNewPhone = ... // continue from part 1

// call our promise
var askMom = function () {
    willIGetNewPhone
        .then(function (fulfilled) {
            // yay, you got a new phone
            console.log(fulfilled);
             // output: { brand: 'Samsung', color: 'black' }
        })
        .catch(function (error) {
            // oops, mom didn't buy it
            console.log(error.message);
             // output: 'mom is not happy'
        });
};

askMom();
```

---

### **WEB STORAGE**

---

#### **Pengertian**
Ada beberapa cara untuk menyimpan data pengguna seperti pencarian, artikel berita, dan lain-lain ke lokal (browser) menggunakan web storage seperti cookies, local storage, dan session storage. Data ini dimanfaatkan oleh situs web tersebut untuk merekam kebiasaan pengguna agar dapat memberikan rekomendasi sesuai preferensi si pengguna tersebut.

#### **Jenis-jenis Web Storage**
##### **Cookies**
- Cookies adalah data kecil yang dikirim dari situs web dan disimpan di komputer kita oleh web browser saat kita menjelajah.
- Disebut data kecil karena maksimum data yang dapat disimpan dalam cookies adalah 4096 bytes (4 KB).
- Biasanya data yang disimpan di cookies adalah access token pengguna saat login atau data pencarian saat melakukan pencarian pada situs web tertentu. Hal ini yang biasanya dilakukan oleh situs pencarian untuk melacak pencarian kita dan menampilkan iklan yang berhubungan dengan pencarian kita sebelumnnya.

Kekurangan Cookies
- Setiap kita mengakses situs web, cookies juga kembali dikirim sehingga memperlambat aplikasi web kamu dengan mengirimkan data yang sama.
- Cookies disertakan pada setiap HTTP request, sehingga mengirimkan data yang tidak dienkripsi melalui internet, maka saat kita ingin menyimpan data dalam cookies kita harus mengenkripsinya terlebih dahulu.
- Cookies hanya dapat menyimpan data sebanyak 4KB.
- Lalu cookies juga memiliki tanggal kadaluarsa. Tanggal ini telah ditentukan sehingga web browser bisa menghapus cookies jika tanggal sudah kadaluarsa atau tidak dibutuhkan.

##### **Local Storage**
Ciri-ciri Local Storage:
1. Menyimpan data tanpa tanggal kadaluarsa.
2. Data tidak akan dihapus ketika web browser ditutup dan akan tersedia seterusnya selama kita tidak menghapus data local storage pada web browser.
3. Dapat menyimpan data hingga 5MB.
4. Hanya dapat menyimpan data string.

Untuk menyimpan data pada local storage, kita menggunakan method setItem() yang membutuhkan 2 parameter. Parameter pertama adalah key yang ingin kita simpan dan parameter kedua adalah data (value) dari key yang akan disimpan.

```javascript
  localStorage.setItem('key', value);
```

##### **Session Storage Menyimpan Data**
Ciri-ciri session storage:
- Data yang disimpan pada session storage akan terus tersimpan selama browser terbuka dan tidak hilang jika laman di-reload.
- Membuka banyak tab/window dengan URL yang sama, akan menciptakan session storage yang berbeda di masing-masing tab/window.
- Menutup tab/window akan mengakhiri session dan menghapus data yang tersimpan di session storage pada tab/window tersebut.
- Data yang tersimpan dalam session storage harus berbentuk string.
- Hanya dapat menyimpan data sebanyak 5MB.

```javascript
// menambah session storage
sessionStorage.setItem('key', value);
```

##### **Session Storage Mengambil Data**
Setelah kita mempelajari cara menyimpan data di session storage, pada topik ini kita akan belajar bagaimana kita dapat mengambil dan mengolah data dari session storage.

Sama seperti local storage, cara mendapatkan data dari session storage juga menggunakan getItem(), seperti berikut ini:

```javascript
// mendapatkan session storage
sessionStorage.getItem('key');
```