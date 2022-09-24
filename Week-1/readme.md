# <p style="text-align: center;">```Writing and Presentation Test Week 1 ```</p>

---

# Stage 0 Intro To Coding

    
# Stage 1 Web Development Pemula

## Unix Command Line
`pengenalan Unix Command Line`
### Shell 
- **Shell** adalah Program untuk berkomunikasi dengan sistem operasi
- Shell yang berbasis teks disebut Command Line Interface
- contoh CLI
    - Bash
    - PowerShell
    - sh
    - cmd.exe
- Shell Prompt adalah Tempat kita memasukkan command

`command command Unix`
- Struktur Penulisan Command
```
$ command -options argument
```
- Command-command CLI
    - clear / ctrl + l<br>
        untuk membersihkan terminal
        ```
        $ clear
        ```
    - cd<br>
        ```
        $ cd ../directory
        ```
        > catatan : .. untuk naik 1 directory
    - ls<br>
        menampilkan semua file
        ```
        $ ls
        ```
        menampilkan semua file beserta hidden file
        ```
        $ ls -a
        ```
    - man<br>
        untuk melihat penjelasan dan penggunaan dari suatu command 
        ```
        $ man <nama_command>
        ```
    - touch<br>
        untuk membuat file
        ```
        $ touch <nama_file>
        ```
    - cp<br>
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
    - mv<br>
        rename file
        ```
        $ Mv <nama_file> <nama_file_baru>
        ```
        memindahkan file
        ```
        $ Mv <nama file> <directory>
        ```

    - Rm
        Remove file
        ```
        $ Rm <file>
        ```
        remove directory
        ```
        $ Rm -r <directory>
        ```