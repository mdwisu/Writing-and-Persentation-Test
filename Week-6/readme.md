# <p style="text-align: center;">`Writing and Presentation Test Week 4 `</p>

---

## 1. Web Server & RestFul API

### Pengenalan web server

- Web server terdiri dari 2 komponen yaitu software dan hardware
- berikut gambar web server illustrasi
  ![Illustration to use for new users](img/illustrasi.jpg)

### Static Web Server VS Dynamic Web Server

1. #### Static Web Server

- Server web statis, atau tumpukan, terdiri dari komputer (perangkat keras) dengan server HTTP (perangkat lunak). Kami menyebutnya "statis" karena server mengirimkan file yang dihosting apa adanya ke browser Anda.

2. #### Dynamic Web Server

- Sebuah server web dinamis terdiri dari server web statis ditambah perangkat lunak tambahan, paling sering server aplikasi dan database. Kami menyebutnya "dinamis" karena server aplikasi memperbarui file yang dihosting sebelum mengirim konten ke browser Anda melalui server HTTP

### Server Side Programming

- Web Server menunggu pesan permintaan klien, memprosesnya saat tiba, dan membalas web browser dengan pesan respons HTTP. Respons berisi baris status yang menunjukkan apakah permintaan berhasil atau tidak (misalnya "HTTP/1.1 200 OK" untuk berhasil).

- Isi respons yang berhasil atas permintaan akan berisi resource yang diminta (misalnya halaman HTML baru, atau gambar, dll...), yang kemudian dapat ditampilkan oleh web browser.

1. #### Static Site

- Diagram dibawah menunjukkan arsitektur server web dasar untuk situs statis (situs statis adalah situs yang mengembalikan konten hard-coded yang sama dari server setiap kali resource tertentu diminta). Saat pengguna ingin menavigasi ke halaman, browser mengirimkan permintaan "GET" HTTP yang menentukan URL-nya.

![Illustration to use for new users](img/staticsite.jpg)

2. #### Dynamic Site

- Situs web dinamis adalah situs di mana beberapa konten respons dihasilkan secara dinamis, hanya bila diperlukan. Di situs web dinamis, halaman HTML biasanya dibuat dengan memasukkan data dari database ke dalam placeholder di template HTML (ini adalah cara yang jauh lebih efisien untuk menyimpan konten dalam jumlah besar daripada menggunakan situs web statis).
- Situs dinamis dapat mengembalikan data yang berbeda untuk URL berdasarkan informasi yang diberikan oleh pengguna atau preferensi yang disimpan dan dapat melakukan operasi lain sebagai bagian dari pengembalian respons (misalnya, mengirim pemberitahuan).
- Sebagian besar kode untuk mendukung situs web dinamis harus dijalankan di server. Membuat kode ini dikenal sebagai "pemrograman sisi server" (atau terkadang "skrip back-end").

![Illustration to use for new users](img/dynamicsite.jpg)

3. #### perbedaan nya

- memiliki tujuan dan perhatian yang berbeda.
- umumnya tidak menggunakan bahasa pemrograman yang sama (pengecualiannya adalah JavaScript, yang dapat digunakan di sisi server dan klien).
- berjalan di dalam lingkungan sistem operasi yang berbeda.

4. #### yang dapat dilakukan di server-side

- Efficient storage and delivery of information
- Customised user experience
- Controlled access to content
- Store session/state information
- Notifications and communication
- Data analysis

### REST

- REST, atau Representational State Transfer, adalah gaya arsitektur untuk menyediakan standar antara sistem komputer di web, sehingga memudahkan sistem untuk berkomunikasi satu sama lain.

- Sistem yang sesuai dengan REST, sering disebut sistem RESTful, dicirikan oleh bagaimana mereka tidak memiliki stateless dan memisahkan masalah klien dan server

#### Communication between Client and Server

##### Making a Requests

REST mengharuskan klien membuat permintaan ke server untuk mengambil atau mengubah data di server. Permintaan umumnya terdiri dari:

- kata kerja HTTP, yang menentukan jenis operasi apa yang harus dilakukan
- header, yang memungkinkan klien untuk menyampaikan informasi tentang permintaan
- path menuju resource
- optional msg body yang berisi data

##### HTTP VERBS

Ada 4 kata kerja HTTP dasar yang kami gunakan dalam permintaan untuk berinteraksi dengan resource dalam sistem REST:

- GET — mengambil resource tertentu (berdasarkan id) atau kumpulan resource
- POST — buat resource baru
- PUT — perbarui resource tertentu (berdasarkan id)
- DELETE — menghapus resource tertentu dengan id

### Headers and Accept Parameters

- Di header permintaan, klien mengirimkan jenis konten yang dapat diterimanya dari server.

Ini disebut accept field, dan ini memastikan bahwa server tidak mengirim data yang tidak dapat dipahami atau diproses oleh klien. Opsi untuk tipe konten adalah Tipe MIME (atau Ekstensi Surat Internet Serbaguna, yang dapat Anda baca selengkapnya di Dokumen Web [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)

Type yang dapat disubmit di field:

1. image — image/png, image/jpeg, image/gif
1. audio — audio/wav, audio/mpeg
1. video — video/mp4, video/ogg
1. application — application/json, application/pdf, application/
1. xml, application/octet-stream

### Path

Permintaan harus berisi path ke resource tempat operasi harus dilakukan. Dalam RESTful API, path harus dirancang untuk membantu klien mengetahui apa yang sedang terjadi.

A path like
`skilvulstore.com/customers/223/orders/12`

### Sending Responses

### Response Codes

Response dari server berisi kode status untuk memperingatkan klien tentang informasi tentang kesukesan operasi. Sebagai develop, Anda tidak perlu mengetahui setiap kode status (ada banyak kode status), tetapi Anda harus mengetahui kode yang paling umum dan cara penggunaannya.

| Status code                 |                                                           meaning                                                           |
| --------------------------- | :-------------------------------------------------------------------------------------------------------------------------: |
| 200 (OK)                    |                               Ini adalah respons standar untuk permintaan HTTP yang berhasil.                               |
| 201 (CREATED)               |                Ini adalah respons standar untuk permintaan HTTP yang menghasilkan item yang berhasil dibuat.                |
| 204 (NO CONTENT)            |    Ini adalah respons standar untuk permintaan HTTP yang berhasil, di mana tidak ada yang dikembalikan di badan respons.    |
| 400 (BAD REQUEST)           | Permintaan tidak dapat diproses karena sintaks permintaan yang buruk, ukuran yang berlebihan, atau kesalahan klien lainnya. |
| 403 (FORBIDDEN)             |                                 Klien tidak memiliki izin untuk mengakses sumber daya ini.                                  |
| 404 (NOT FOUND)             |                     Sumber daya tidak dapat ditemukan saat ini. Mungkin sudah dihapus, atau belum ada.                      |
| 500 (INTERNAL SERVER ERROR) |               Jawaban umum untuk kegagalan tak terduga jika tidak ada informasi lebih spesifik yang tersedia.               |

## 2. Intro & Essential Node JS

- Node.js adalah lingkungan runtime JavaScript open-source, lintas platform, back-end yang berjalan pada mesin V8 dan mengeksekusi kode JavaScript di luar browser web. Node.js memungkinkan pengembang menggunakan JavaScript untuk menulis alat baris perintah dan untuk skrip sisi server—menjalankan skrip sisi server untuk menghasilkan konten halaman web dinamis sebelum halaman dikirim ke browser web pengguna.

![Illustration to use for new users](img/noje.jpg)

### Node JS Architecture

#### 1. Single Thread

- Thread dalam ilmu komputer adalah eksekusi menjalankan beberapa tugas atau program secara bersamaan. Setiap unit yang mampu mengeksekusi kode disebut thread.

- Javascript menggunakan konsep single thread, yang berarti hanya memiliki satu tumpukan panggilan yang digunakan untuk menjalankan program.

#### 1. Event loop

- Dengan menggunakan konsep arsitektur javascript, walaupun menggunakan single thread tetapi kita dapat melihat javascript seperti menggunakan multi thread

- Terdapat event queue yang berguna sebagai penampung ketika terdapat perintah baru yang akan dieksekusi.

- Event loop akan memfasilitasi kondisi ini, event loop akan memeriksa terus menerus, ketika antrian kosong di call stack maka akan menambah antrian baru dari event queue sampai semua perintah selesai di eksekusi.



## 3. Express JS

## 4. Design Database With Mysql
