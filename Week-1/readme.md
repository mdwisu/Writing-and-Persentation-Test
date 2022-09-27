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
- #### git init<br>adsf

```
$ git init <nama_folder_repository>
```
atau gunakan 
```
$ git init .
```
jika anda sudah berada dalam folder yang diinginkan atau sudah anda dibuat
- #### git status<br>
```
$ git status
```
maka akan muncul seperti gambar di bawah
![Illustration to use for new users](img/git-status.jpg)

kondisi pada status
- untracked
- unmodified
- modified -> kondisi dimana revisi atau perubahan sudah dilakukan, tetapi belum ditandai (untracked) dan belum disimpan dalam version control
- staged -> kondisi dimana revisi sudah ditandai (modified) namun belum disimpan di version control
- commited -> dimana revisi sudah disimpan pada version control
- #### git add<br>
menambahkan file spesifik yang diedit ke staging area
```
$ git add <nama_file>
```
menambahkan semua file yang diedit ke staging area
```
$ git add .
```
- #### git commit<br>
save perubahan di staging area pada version control
```
$ git commit -m "<comment>"
```
- #### git log<br>
melihat catatan log dari revisi-revisi
```
$ git log
```
melihat lebih sederhana
```
$ git log --oneline
```
berdasarkan nomor version
```
$ git log <nomor_version>
```
berdasarkan nama file
```
$ git log <nama_file>
```
berdasarkan author
```
$ git log --author='<name_author>'
```

> Jika perubahan yang sedang dilakukan terjadi kesalahan dan kita ingin mengembalikan keadaan seperti sebelumnya maka itu bisa dilakukan :) caranya dibawah inii
- #### git checkout<br>
mengambil file atau membatalkan perubahan suatu file sebelum staged atau commited
```
$ git checkout <nama_file>
```
kembali ke commit terentu dengan nomor commit 
```
$ git checkout <no_commit> <optional_name_file_if_spesific>
```
> gunakan git log untuk melihat nomor commit

mengembalikan commit jauh ke bawah. Misal kita ingin kembali pada 3 commit sebelumnya
```
$ git checkout HEAD~3 index.html
```
checkout with create a new branch
```
$ git checkout -b <name_branch> <branch_to_create_new_one>
```

- #### git reset<br>
mereset commit
```
$ git reset <hash>
```
- #### git revert<br>
me-remove commit tertentu dengan membuat commit baru
```
$ git revert <hash>
```
- #### git branch<br>
to see the list of branches
```
git branch
```
to create a new branch
```
git branch <name_branch>
```
move to a certain branch
```
git branch <name_branch>
```
to delete a branch
```
git branch -d <name_branch>
```
- #### git merge<br>
to merge a branch
```
git merge <name_branch>
```
> note: recommend to be on branch main
## `Github Publish and clone`
- #### github publish<br>
- buka akun github di browser
- klik new seperti di gambar
![Illustration to use for new users](img/github.jpg)
- isikan settingan yang diinginkan
- klik create repository seperti digambar
![Illustration to use for new users](img/github2.jpg)
- setelah itu akan muncul quick setup dari github seperti digambar
![Illustration to use for new users](img/github3.jpg)
- ketikan script untuk menambahkan remote untuk terhubung ke github pada terminal bash atau yang lain
```
$ git remote add origin https://github.com/mdwisu/test.git
```
- pindah ke branch main
```
$ git branch -M main
```
- setelah di edit, dapat melakukan push ke github
```
$ git push -u origin main
```
- #### github clone<br>
- untuk melakukan clone, dapat mengakses github oranglain yang ingin di clone
- klik code seperti di gambar
- lalu copy url HTTPS
![Illustration to use for new users](img/github_clone.jpg)
- buka git bash lalu ketikan script berikut
```
git clone <url HTTPS>
```
- dan repository telah berhasil di clone



---
---

## 3. HTML
## `Pengenalan HTML`
- HTML adalah singkatan dari Hypertext Markup Language.
- HTML digunakan untuk menampilkan konten pada browser. 
- Ada 2 tools utama yang harus dipersiapkan untuk membuat HTML
    - Browser
    - Code Editor
## `HTML Structure`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
## `Menjalankan HTML dengan Live Server`
- buka extension menu di vscode
- cari live server di pencariannya
- setelah muncul, klik install
- dan live server telah diinstall
![Illustration to use for new users](img/live-server.jpg)
- buka file html yang ingin ditampilkan
- klik kanan pada tampilan html
- klik open with live server atau tekan (alt+L alt+O)
![Illustration to use for new users](img/open-live-server.jpg)
- lalu akan menampilkan tampilannya 
![Illustration to use for new users](img/run-live.jpg)

## `sintax didalam HTML`







