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
