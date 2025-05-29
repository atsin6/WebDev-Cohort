## 🪟 **Windows (PowerShell & Git Bash)**

### 🔹 **1. `Compress-Archive` (PowerShell)**

- **Purpose**: Compress files and directories into a `.zip` archive.
- **Flags**:

  - `-Path`: Specifies the files or directories to compress.
  - `-DestinationPath`: Specifies the path and name of the output archive.
  - `-CompressionLevel`: Specifies the compression level (`Fastest`, `NoCompression`, `Optimal`).

- **Examples**:

  - Compress a folder:

    ```powershell
    Compress-Archive -Path "C:\Project" -DestinationPath "C:\Archives\Project.zip"
    ```

  - Compress multiple files:

    ```powershell
    Compress-Archive -Path "C:\file1.txt","C:\file2.txt" -DestinationPath "C:\Archives\Files.zip"
    ```

### 🔹 **2. `Expand-Archive` (PowerShell)**

- **Purpose**: Extract contents from a `.zip` archive.
- **Flags**:

  - `-Path`: Specifies the archive to extract.
  - `-DestinationPath`: Specifies the directory to extract to.

- **Example**:

  ```powershell
  Expand-Archive -Path "C:\Archives\Project.zip" -DestinationPath "C:\Project"
  ```

([Microsoft Learn][1], [Stack Overflow][2], [madebygps][3], [Apple Support][4])

### 🔹 **3. `tar` (Git Bash)**

- **Purpose**: Create and extract `.tar` archives.
- **Flags**:

  - `-c`: Create a new archive.
  - `-x`: Extract files from an archive.
  - `-v`: Verbose output.
  - `-f`: Specify the archive file name.
  - `-z`: Compress with gzip.
  - `-j`: Compress with bzip2.

- **Examples**:

  - Create a gzip-compressed archive:

    ```bash
    tar -czvf archive.tar.gz folder/
    ```

  - Extract a gzip-compressed archive:

    ```bash
    tar -xzvf archive.tar.gz
    ```

---

## 🐧 **Ubuntu (Linux)**

### 🔹 **1. `tar`**

- **Purpose**: Archive and compress files.
- **Flags**:

  - `-c`: Create a new archive.
  - `-x`: Extract files from an archive.
  - `-v`: Verbose output.
  - `-f`: Specify the archive file name.
  - `-z`: Compress with gzip.
  - `-j`: Compress with bzip2.
  - `-J`: Compress with xz.

- **Examples**:

  - Create a gzip-compressed archive:

    ```bash
    tar -czvf archive.tar.gz folder/
    ```

  - Extract a bzip2-compressed archive:

    ```bash
    tar -xjvf archive.tar.bz2
    ```

### 🔹 **2. `zip`**

- **Purpose**: Compress files into a `.zip` archive.
- **Flags**:

  - `-r`: Recursively include directories.
  - `-e`: Encrypt the archive.
  - `-9`: Maximum compression.

- **Example**:

  ```bash
  zip -r archive.zip folder/
  ```

([solarisfacts.blogspot.com][5], [YouTube][6], [Microsoft Learn][1], [LFCS Certification Prep eBook][7], [Super User][8], [BlueVPS.com][9])

### 🔹 **3. `unzip`**

- **Purpose**: Extract `.zip` archives.
- **Flags**:

  - `-l`: List contents without extracting.
  - `-d`: Specify extraction directory.

- **Example**:

  ```bash
  unzip archive.zip -d destination_folder/
  ```

### 🔹 **4. `gzip` / `gunzip`**

- **Purpose**: Compress (`gzip`) or decompress (`gunzip`) files.
- **Flags**:

  - `-k`: Keep original file.
  - `-r`: Recursively compress directories.

- **Examples**:

  - Compress a file:

    ```bash
    gzip file.txt
    ```

  - Decompress a file:

    ```bash
    gunzip file.txt.gz
    ```

### 🔹 **5. `bzip2` / `bunzip2`**

- **Purpose**: Compress (`bzip2`) or decompress (`bunzip2`) files.
- **Flags**:

  - `-k`: Keep original file.
  - `-v`: Verbose output.

- **Examples**:

  - Compress a file:

    ```bash
    bzip2 file.txt
    ```

  - Decompress a file:

    ```bash
    bunzip2 file.txt.bz2
    ```

### 🔹 **6. `xz` / `unxz`**

- **Purpose**: Compress (`xz`) or decompress (`unxz`) files.
- **Flags**:

  - `-k`: Keep original file.
  - `-v`: Verbose output.

- **Examples**:

  - Compress a file:

    ```bash
    xz file.txt
    ```

  - Decompress a file:

    ```bash
    unxz file.txt.xz
    ```

---

## 🍎 **macOS**

### 🔹 **1. `zip`**

- **Purpose**: Compress files into a `.zip` archive.
- **Flags**:

  - `-r`: Recursively include directories.
  - `-e`: Encrypt the archive.

- **Example**:

  ```bash
  zip -r archive.zip folder/
  ```

([Ask Ubuntu][10], [Microsoft Learn][1], [SS64][11], [BlueVPS.com][9], [Super User][12])

### 🔹 **2. `unzip`**

- **Purpose**: Extract `.zip` archives.
- **Flags**:

  - `-l`: List contents without extracting.
  - `-d`: Specify extraction directory.

- **Example**:

  ```bash
  unzip archive.zip -d destination_folder/
  ```

### 🔹 **3. `tar`**

- **Purpose**: Archive and compress files.
- **Flags**:

  - `-c`: Create a new archive.
  - `-x`: Extract files from an archive.
  - `-v`: Verbose output.
  - `-f`: Specify the archive file name.
  - `-z`: Compress with gzip.
  - `-j`: Compress with bzip2.

- **Examples**:

  - Create a gzip-compressed archive:

    ```bash
    tar -czvf archive.tar.gz folder/
    ```

  - Extract a gzip-compressed archive:

    ```bash
    tar -xzvf archive.tar.gz
    ```

### 🔹 **4. `ditto`**

- **Purpose**: Copy files and directories, with options for compression.
- **Flags**:

  - `-c`: Create an archive.
  - `-k`: Specify ZIP format.
  - `--sequesterRsrc`: Preserve resource forks.
  - `--keepParent`: Include parent directory.

- **Example**:

  ```bash
  ditto -c -k --sequesterRsrc --keepParent folder archive.zip
  ```

([Ask Ubuntu][10], [SS64][11], [solarisfacts.blogspot.com][5], [LFCS Certification Prep eBook][7], [BlueVPS.com][9])

---

😊

[1]: https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.archive/compress-archive?view=powershell-7.5&utm_source=chatgpt.com "Compress-Archive - PowerShell - Learn Microsoft"
[2]: https://stackoverflow.com/questions/11021879/creating-a-zipped-compressed-folder-in-windows-using-powershell-or-the-command-l?utm_source=chatgpt.com "Creating a zipped/compressed folder in Windows using Powershell ..."
[3]: https://www.madebygps.com/an-intro-to-archiving-and-compression-in-linux/?utm_source=chatgpt.com "An intro to archiving and compression in Linux - madebygps"
[4]: https://support.apple.com/guide/terminal/compress-and-uncompress-file-archives-apdc52250ee-4659-4751-9a3a-8b7988150530/mac?utm_source=chatgpt.com "Compress and uncompress file archives in Terminal on Mac"
[5]: https://solarisfacts.blogspot.com/p/file-archives-compression-and-transfer.html?utm_source=chatgpt.com "File Archives, Compression and Transfer - Solaris 10 Basic Concepts"
[6]: https://www.youtube.com/watch?v=rPDuqj2Sdmg&utm_source=chatgpt.com "How to Compress Files in Windows Using Tar Command - YouTube"
[7]: https://www.tecmint.com/tar-command-examples-linux/?utm_source=chatgpt.com "18 Useful Tar Command Examples for Every Linux Sysadmin"
[8]: https://superuser.com/questions/46512/create-a-tar-file-for-compressing-files-and-directories-on-mac-os-x?utm_source=chatgpt.com "Create a tar file for compressing files and directories on Mac OS X"
[9]: https://bluevps.com/blog/how-to-compress-and-extract-files-in-linux-using-tar-and-gzip-commands?utm_source=chatgpt.com "How to Compress and Extract Files in Linux Using tar and gzip ..."
[10]: https://askubuntu.com/questions/707441/confusion-between-archiving-and-compressing?utm_source=chatgpt.com "tar - Confusion between archiving and compressing? - Ask Ubuntu"
[11]: https://ss64.com/mac/tar.html?utm_source=chatgpt.com "tar Man Page - macOS - SS64.com"
[12]: https://superuser.com/questions/998015/compress-file-using-command-line-windows-making-zip-file-using-only-native-to?utm_source=chatgpt.com "cmd.exe - compress file using command line windows, (making zip ..."
