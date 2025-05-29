## 📂 **File and Directory Operation Commands in Bash**

### 1. `ls` – List Directory Contents

- **Description**: Lists files and directories.

- **Common Flags**:

  - `-a`: Include hidden files (those starting with `.`).

  - `-l`: Long listing format.

  - `-h`: Human-readable sizes (e.g., KB, MB).

  - `-R`: Recursively list subdirectories.

  - `-S`: Sort by file size.

  - `-t`: Sort by modification time.

  - `-r`: Reverse order while sorting.

  - `-d`: List directories themselves, not their contents.

  - `-F`: Append indicator (e.g., `/` for directories).

- **Example**:

  ```bash
  ls -alh
  ```

  Lists all files, including hidden ones, in long format with human-readable sizes.

---

### 2. `cd` – Change Directory

- **Description**: Changes the current directory.

- **Usage**:

  - `cd /path/to/directory`: Change to specified directory.

  - `cd ..`: Move to parent directory.

  - `cd ~`: Move to home directory.

  - `cd -`: Switch to previous directory.

- **Note**: `cd` does not have flags.

---

### 3. `pwd` – Print Working Directory

- **Description**: Displays the current directory path.

- **Usage**:

  ```bash
  pwd
  ```

- **Note**: `pwd` does not have flags.

---

### 4. `mkdir` – Make Directories

- **Description**: Creates new directories.

- **Common Flags**:

  - `-p`: Create parent directories as needed.

  - `-v`: Verbose output; show directories being created.

- **Example**:

  ```bash
  mkdir -pv /path/to/new/directory
  ```

  Creates the specified directory path, including any necessary parent directories, and displays each directory as it's created.

---

### 5. `rmdir` – Remove Empty Directories

- **Description**: Deletes empty directories.

- **Common Flags**:

  - `--ignore-fail-on-non-empty`: Ignore each failure that is solely because a directory is non-empty.

  - `-p`: Remove directory and its ancestors if they become empty.

- **Example**:

  ```bash
  rmdir -p /path/to/empty/directory
  ```

  Removes the specified directory and its parent directories if they are empty.

---

### 6. `rm` – Remove Files or Directories

- **Description**: Deletes files and directories.

- **Common Flags**:

  - `-f`: Force deletion without prompt.

  - `-i`: Prompt before each removal.

  - `-r` or `-R`: Recursively remove directories and their contents.

  - `-v`: Verbose output; show files being removed.

- **Example**:

  ```bash
  rm -rfv /path/to/directory
  ```

  Forcefully and recursively deletes the specified directory and its contents, displaying each file as it's removed.

---

### 7. `touch` – Create Empty Files or Update Timestamps

- **Description**: Creates new empty files or updates the access and modification times of existing files.

- **Common Flags**:

  - `-a`: Change only the access time.

  - `-m`: Change only the modification time.

  - `-t [[CC]YY]MMDDhhmm[.ss]`: Use specified time instead of current time.

- **Example**:

  ```bash
  touch -t 202501010000.00 newfile.txt
  ```

  Sets the access and modification time of `newfile.txt` to January 1, 2025, 00:00:00.

---

### 8. `cp` – Copy Files and Directories

- **Description**: Copies files and directories.

- **Common Flags**:

  - `-r` or `-R`: Recursively copy directories.

  - `-i`: Prompt before overwrite.

  - `-u`: Copy only when the source file is newer than the destination file or when the destination file is missing.

  - `-v`: Verbose output; show files being copied.

  - `-p`: Preserve file attributes.

- **Example**:

  ```bash
  cp -ruv /source/directory /destination/
  ```

  Recursively copies files from the source to the destination, updating only newer files and displaying each file as it's copied.

---

### 9. `mv` – Move or Rename Files and Directories

- **Description**: Moves or renames files and directories.

- **Common Flags**:

  - `-i`: Prompt before overwrite.

  - `-u`: Move only when the source file is newer than the destination file or when the destination file is missing.

  - `-v`: Verbose output; show files being moved.

- **Example**:

  ```bash
  mv -iv oldname.txt newname.txt
  ```

  Renames `oldname.txt` to `newname.txt`, prompting if `newname.txt` exists.

---

### 10. `find` – Search for Files and Directories

- **Description**: Searches for files and directories in a directory hierarchy.

- **Common Flags**:

  - `-name "pattern"`: Search for files matching the pattern.

  - `-type [f/d]`: Search for files (`f`) or directories (`d`).

  - `-size [+/-]N`: Search for files of a specific size.

  - `-mtime [+/-]N`: Search for files modified N days ago.

  - `-exec command {} \;`: Execute a command on each found item.

- **Example**:

  ```bash
  find /path -type f -name "*.log" -exec rm -i {} \;
  ```

  Finds all `.log` files under `/path` and prompts before deleting each.

---

### 11. `stat` – Display File or File System Status

- **Description**: Displays detailed information about a file or file system.

- **Common Flags**:

  - `-c`: Use a specified format for the output.

  - `-t`: Print information in terse form.

- **Example**:

  ```bash
  stat -c "%n %s %y" filename.txt
  ```

  Displays the name, size, and last modification time of `filename.txt`.

---

### 12. `file` – Determine File Type

- **Description**: Identifies the type of a file.

- **Common Flags**:

  - `-b`: Do not prepend filenames to output lines.

  - `-i`: Output MIME type strings.

- **Example**:

  ```bash
  file -i filename.txt
  ```

  Outputs the MIME type of `filename.txt`.

---

### 13. `du` – Estimate File Space Usage

- **Description**: Summarizes disk usage of files and directories.

- **Common Flags**:

  - `-h`: Human-readable sizes.

  - `-s`: Display only a total for each argument.

  - `-a`: Show sizes for all files, not just directories.

  - `-c`: Produce a grand total.

- **Example**:

  ```bash
  du -sh /path/to/directory
  ```

  Displays the total size of the specified directory in a human-readable format.

---

### 14. `df` – Report File System Disk Space Usage

- **Description**: Displays available and used disk space on file systems.

- **Common Flags**:

  - `-h`: Human-readable sizes.

  - `-T`: Show file system type.

  - `-i`: Show inode information.

- **Example**:

  ```bash
  df -hT
  ```

  Displays disk space usage and file system types in a human-readable format.

---

### 15. `basename` and `dirname` – Extract Filename or Directory Path

- **Description**:

  - `basename`: Strips directory and suffix from filenames.

  - `dirname`: Extracts directory path from filenames.

- **Usage**:

  ```bash
  basename /path/to/file.txt
  dirname /path/to/file.txt
  ```

  Outputs `file.txt` and `/path/to`, respectively.

---

### 16. `ln` – Create Links

- **Description**: Creates hard or symbolic links.

- **Common Flags**:

  - `-s`: Create symbolic link.

  - `-f`: Force creation by removing existing destination files.

  - `-v`: Verbose output; show links being created.

- **Example**:

  ```bash
  ln -sv /path/to/original /path/to/link
  ```

  Creates a symbolic link at `/path/to/link` pointing to `/path/to/original`.

---

### 17. `readlink` and `realpath` – Resolve Symbolic Links

- **Description**:

  - `readlink`: Displays the target of a symbolic link.

  - `realpath`: Resolves all symbolic links to provide the absolute path.

- **Usage**:

  ```bash
  readlink symlink
  realpath symlink
  ```

---

### 18. `chown` – Change File Owner and Group

- **Description**: Changes the owner and/or group of a file.

- **Common Flags**:

  - `-R`: Recursively change ownership.

  - `-v`: Verbose output; show files being changed.

- **Example**:

  ```bash
  chown -Rv user:group /path/to/directory
  ```

  Recursively changes the owner and group of the specified directory.

---

### 19. `chmod` – Change File Permissions

- **Description**: Changes the permissions of a file or directory.

- **Common Flags**:

  - `-R`: Recursively change permissions.

  - `-v`: Verbose output; show files being changed.

- **Example**:

  ```bash
  chmod -Rv 755 /path/to/directory
  ```

  Recursively sets permissions to `rwxr-xr-x` for the specified directory.

---

### 20. `chgrp` – Change Group Ownership

- **Description**: Changes the group ownership of a file or directory.

- **Common Flags**:

  - `-R`: Recursively change group ownership.

  - `-v`: Verbose output; show files being changed.

- **Example**:

  ```bash
  chgrp -Rv groupname /path/to
  ```
