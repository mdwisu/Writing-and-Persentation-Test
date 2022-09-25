# <p style="text-align: center;">```Writing and Presentation Test Week 1 ```</p>

---

# Stage 0 Intro To Coding


# Stage 1 Web Development Pemula

## 1. Unix Command Line
## `pengenalan Unix Command Line`
### Command Line Interface (CLI)
CLI adalah program yang memungkinkan pengguna mengetik perintah teks yang memerintahkan komputer untuk melakukan tugas tertentu
### Shell 
- **Shell** adalah Program untuk berkomunikasi dengan sistem operasi
- Shell yang berbasis teks disebut Command Line Interface
### CLI terminal
- Terminal Emulator, aplikasi untuk mengakses CLI
- contoh CLI
- Bash
- PowerShell
- sh
- cmd.exe
- Shell Prompt adalah Tempat kita memasukkan command
### file system
Sebuah filesystem mengatur bagaimana data disimpan di dalam sebuah system

> contoh file system structure
> ![Illustration to use for new users](img/file-system.jpg)

## `command command Unix`
### Struktur Penulisan Command
```
$ command -options argument
```
### Command-command CLI
- #### clear / ctrl + l<br>
untuk membersihkan terminal
```
$ clear
```
- #### man<br>
untuk melihat penjelasan dan penggunaan dari suatu command 
```
$ man <nama_command>
```
- #### echo
Cetak sesuatu
```
$ echo -option "<something>"
```
### ``Navigasi menggunakan CLI``
- #### pwd<br>
melihat lokasi directory saat ini
```
$ pwd
```
- #### ls<br>
menampilkan semua file
```
$ ls
```
menampilkan semua file beserta hidden file
```
$ ls -a
```
- #### cd<br>
```
$ cd ../directory
```
> catatan : ( cd .. ) untuk naik 1 directory
### ``Membuat file dan directory``
- #### touch<br>
untuk membuat file
```
$ touch <nama_file>
```
- #### mkdir<br>
membuat directory baru
```
$ mkdir <nama_dir>
```
### ``Melihat isi file``
- #### head<br>
menampilkan beberapa baris awal sebuah file text
```
$ head -n <namafile>
```
> -n/-angka untuk banyaknya baris yang ingin ditampilkan
- #### tail<br>
menampilkan beberapa baris akhir sebuah file text
```
$ tail -n <namafile>
```
> -n/-angka untuk banyaknya baris yang ingin ditampilkan
- #### cat
melihat seluruh isi sebuah file text
```
$ cat <nama_file>
```
### ``Menyalin, memindahkan, menghapus, mengedit, dan files & directory``
- #### cp<br>
untuk mengcopy file dalam directory yang sama
```
$ cp <nama_file> <new_nama_file>
```
copy ke dir spesifik
```
$ cp <nama_file1> <nama_file2> <destination_dir>
```
copy directory beserta isinya secara rekursif ke dalam directory yang dituju
```
$ cp -r/R Src_directory Dest_directory
```
- #### mv<br>
rename file
```
$ mv <nama_file> <nama_file_baru>
```
memindahkan file
```
$ mv <nama file> <directory>
```
- #### rm<br>
Remove file
```
$ rm <file>
```
remove directory
```
$ rm -r <directory>
```
- #### nano
untuk membuka editor teks untuk file untuk diedit
```
nano <file_name>
```
---

## 2. Git dan Github
## `Pengenalan Git`
Git adalah aplikasi yang dapat melacak setiap perubahan yang terjadi pada suatu folder atau file.
## `Instalasi Git`
Download dan install GIT seperti halnya instal aplikasi pada umumnya
[disini](https://git-scm.com "https://git-scm.com/")
### Setup Awal
```
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```
> WARNING: email yang disetup HARUS SAMA dengan yang digunakan pada GITHUB
### cek setup apakah berhasil
```
$ git config --list
```

## `Repository Git`
Repository adalah direktori proyek yang kita buat
- #### git init<br>

```
$ git init <nama_folder_repository>
```
atau gunakan 
```
$ git init .
```
jika anda sudah berada dalam folder yang diinginkan atau sudah anda dibuat
- #### git status<br>





