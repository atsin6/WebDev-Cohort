# 🐧 **Linux (Ubuntu) & 🪟 Windows (Git Bash/PowerShell) Miscellaneous Commands**

---

## 1. **date** 📅

- **Purpose:** Show or set the system date and time
- **Linux / Git Bash:**

  ```bash
  date
  date +"%Y-%m-%d %H:%M:%S"  # Custom format output
  sudo date -s "2025-05-29 10:30:00"  # Set date/time (Linux only)
  ```

- **PowerShell:**

  ```powershell
  Get-Date
  Set-Date -Date "05/29/2025 10:30AM"
  ```

---

## 2. **uptime** ⏳

- **Purpose:** Show how long the system has been running + load average (Linux)
- **Linux / Git Bash:**

  ```bash
  uptime
  ```

- **PowerShell:**
  No direct equivalent, but you can get system uptime via:

  ```powershell
  (Get-CimInstance Win32_OperatingSystem).LastBootUpTime
  ```

---

## 3. **who / whoami / w** 👤

- **Purpose:** Show users logged in, current user info
- **Linux / Git Bash:**

  ```bash
  who        # Show who is logged in
  whoami     # Show current user
  w          # Show who is logged in + what they're doing
  ```

- **PowerShell:**

  ```powershell
  whoami
  ```

---

## 4. **man** 📖

- **Purpose:** Show manual (help) pages for commands
- **Linux / Git Bash:**

  ```bash
  man ls
  ```

- **PowerShell:**

  ```powershell
  Get-Help Get-Process
  ```

---

## 5. **alias** 🔗

- **Purpose:** Create shortcuts for commands
- **Linux / Git Bash:**

  ```bash
  alias ll='ls -lah'
  unalias ll
  ```

- **PowerShell:**

  ```powershell
  Set-Alias ll Get-ChildItem
  Remove-Item Alias:\ll
  ```

---

## 6. **history** 📜

- **Purpose:** Show command history
- **Linux / Git Bash:**

  ```bash
  history
  !123   # Run command #123 again
  ```

- **PowerShell:**

  ```powershell
  Get-History
  Invoke-History 23  # Run history command #23
  ```

---

## 7. **sleep** 💤

- **Purpose:** Pause for a number of seconds
- **Linux / Git Bash:**

  ```bash
  sleep 5  # Sleep for 5 seconds
  ```

- **PowerShell:**

  ```powershell
  Start-Sleep -Seconds 5
  ```

---

## 8. **clear / cls** 🧹

- **Purpose:** Clear the terminal screen
- **Linux / Git Bash:**

  ```bash
  clear
  ```

- **PowerShell:**

  ```powershell
  cls
  ```

---

## 9. **env / set / export** 🌐

- **Purpose:** Show or set environment variables
- **Linux / Git Bash:**

  ```bash
  env            # Show all environment variables
  export VAR=val # Set environment variable
  ```

- **PowerShell:**

  ```powershell
  Get-ChildItem Env:
  $env:VAR="value"
  ```

---

## 10. **passwd** 🔑 (Linux only)

- **Purpose:** Change user password
- **Linux:**

  ```bash
  passwd
  ```

---

## 11. **top / htop** 📊

- **Purpose:** Show running processes and system resource usage
- **Linux / Git Bash:**

  ```bash
  top       # Basic process viewer
  htop      # Enhanced interactive process viewer (if installed)
  ```

- **PowerShell:**

  ```powershell
  Get-Process | Sort-Object CPU -Descending | Select-Object -First 10
  ```

---

## 12. **shutdown / reboot** 🔄

- **Purpose:** Shut down or restart the machine
- **Linux:**

  ```bash
  sudo shutdown now
  sudo reboot
  ```

- **PowerShell:**

  ```powershell
  Stop-Computer       # Shutdown
  Restart-Computer    # Reboot
  ```

---

## 13. **diff / cmp** 🔍

- **Purpose:** Compare files
- **Linux / Git Bash:**

  ```bash
  diff file1.txt file2.txt    # Show differences line-by-line
  cmp file1.bin file2.bin     # Binary compare
  ```

- **PowerShell:**

  ```powershell
  Compare-Object (Get-Content file1.txt) (Get-Content file2.txt)
  ```

---

## 14. **wc** (Linux only)

- **Purpose:** Count words, lines, bytes in a file
- **Linux / Git Bash:**

  ```bash
  wc file.txt
  wc -l file.txt    # Lines count only
  wc -w file.txt    # Word count only
  wc -c file.txt    # Byte count only
  ```

---

## 15. **cut** (Linux only)

- **Purpose:** Extract sections from each line of files
- **Linux / Git Bash:**

  ```bash
  cut -d',' -f1 file.csv  # Extract first column from CSV (comma-separated)
  ```

---

## 16. **xargs** (Linux only)

- **Purpose:** Build and execute command lines from standard input
- **Linux / Git Bash:**

  ```bash
  find . -name "*.txt" | xargs grep "hello"
  ```

---

If you want me to explain any command more deeply or with examples/scripts, just ask! 😊

---

**Summary:**

| Command     | Purpose                        | OS            |
| ----------- | ------------------------------ | ------------- |
| `date`      | Show/set system date/time      | Linux / Win   |
| `uptime`    | Show system uptime             | Linux / Win\* |
| `who`       | Show logged in users           | Linux / Win   |
| `man`       | Show manual/help               | Linux / Win   |
| `alias`     | Create command shortcuts       | Linux / Win   |
| `history`   | Show command history           | Linux / Win   |
| `sleep`     | Pause for N seconds            | Linux / Win   |
| `clear/cls` | Clear terminal screen          | Linux / Win   |
| `env`       | Show/set environment variables | Linux / Win   |
| `passwd`    | Change password                | Linux only    |
| `top`       | Show processes & system usage  | Linux / Win\* |
| `shutdown`  | Shutdown or reboot             | Linux / Win   |
| `diff`      | Compare files                  | Linux / Win   |
| `wc`        | Word/line/byte count           | Linux only    |
| `cut`       | Extract columns/fields         | Linux only    |
| `xargs`     | Build commands from input      | Linux only    |

(\*PowerShell equivalents exist but sometimes require more complex syntax)
