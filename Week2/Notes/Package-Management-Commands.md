Certainly! Here's a comprehensive guide to package management commands for **Windows (using Git Bash with WinGet)**, **Ubuntu (APT)**, and **macOS (Homebrew)**, complete with commonly used flags and descriptions. This will help you manage software efficiently across these platforms.

---

## 🪟 Windows (Git Bash with WinGet)

WinGet is the official package manager for Windows, allowing you to install, upgrade, and manage applications via the command line.([Microsoft Learn][1])

### 🔧 Common Commands:

- `winget install <package>`

  - Installs the specified package.

- `winget uninstall <package>`

  - Uninstalls the specified package.

- `winget upgrade`

  - Upgrades all upgradable packages.

- `winget upgrade <package>`

  - Upgrades a specific package.

- `winget list`

  - Lists all installed packages.

- `winget search <package>`

  - Searches for a package in the repository.

- `winget show <package>`

  - Displays detailed information about a package.

- `winget source list`

  - Lists all configured sources.

- `winget source add <name> <url>`

  - Adds a new package source.

- `winget source remove <name>`

  - Removes a package source.([Microsoft Learn][1], [LFCS Certification Prep eBook][2], [LinuxTeck][3])

### 🏷️ Notable Flags:

- `--id <package_id>`

  - Specifies the exact package ID to install.

- `--name <package_name>`

  - Specifies the package name.

- `--version <version>`

  - Specifies the version of the package to install.

- `--source <source>`

  - Specifies the source to use.

- `--silent`

  - Installs the package silently without user interaction.

- `--accept-package-agreements`

  - Automatically accepts package agreements.

- `--accept-source-agreements`

  - Automatically accepts source agreements.

- `--force`

  - Forces the installation of the package.

- `--exact`

  - Matches the exact string in search operations.([Ubuntu Help][4], [LinuxTeck][3])

> For more detailed information, refer to the official documentation:
> [Use WinGet to install and manage applications](https://learn.microsoft.com/en-us/windows/package-manager/winget/)

---

## 🐧 Ubuntu (APT)

APT (Advanced Package Tool) is the package management system used by Debian and its derivatives, including Ubuntu.

### 🔧 Common Commands:

- `sudo apt update`

  - Updates the package index.

- `sudo apt upgrade`

  - Upgrades all upgradable packages.

- `sudo apt install <package>`

  - Installs the specified package.

- `sudo apt remove <package>`

  - Removes the specified package.

- `sudo apt purge <package>`

  - Removes the package along with its configuration files.

- `sudo apt autoremove`

  - Removes unnecessary packages.

- `sudo apt search <package>`

  - Searches for a package in the repository.

- `sudo apt show <package>`

  - Displays detailed information about a package.

- `sudo apt list --installed`

  - Lists all installed packages.([LFCS Certification Prep eBook][2], [LinuxTeck][3])

### 🏷️ Notable Flags:

- `-y`

  - Assumes "yes" as the answer to all prompts.

- `--fix-broken`

  - Attempts to fix broken dependencies.

- `--reinstall`

  - Reinstalls the specified package.

- `--simulate` or `-s`

  - Simulates the command without making any changes.

- `--only-upgrade`

  - Upgrades the package if it's already installed.

- `--download-only`

  - Downloads the package files without installing them.([LinuxTeck][3])

> For more detailed information, refer to the official documentation:
> [APT Cheat Sheet](https://blog.packagecloud.io/apt-cheat-sheet/)

---

## 🍎 macOS (Homebrew)

Homebrew is a popular package manager for macOS, simplifying the installation of software.([Josh Medeski][5])

### 🔧 Common Commands:

- `brew install <package>`

  - Installs the specified package.

- `brew uninstall <package>`

  - Uninstalls the specified package.

- `brew upgrade`

  - Upgrades all installed packages.

- `brew upgrade <package>`

  - Upgrades a specific package.

- `brew list`

  - Lists all installed packages.

- `brew search <package>`

  - Searches for a package in the repository.

- `brew info <package>`

  - Displays detailed information about a package.

- `brew cleanup`

  - Removes outdated versions of installed packages.

- `brew doctor`

  - Checks the system for potential problems.

### 🏷️ Notable Flags:

- `--cask`

  - Used to install GUI applications.

- `--force`

  - Forces the operation, even if warnings are present.

- `--dry-run`

  - Simulates the command without making any changes.

- `--verbose`

  - Provides detailed output of the command execution.

- `--quiet`

  - Suppresses all output except for errors.

> For more detailed information, refer to the official documentation:
> [Manage macOS packages with Homebrew](https://joshmedeski.com/posts/manage-macos-packages-with-homebrew/)

[1]: https://learn.microsoft.com/en-us/windows/package-manager/?utm_source=chatgpt.com "Windows Package Manager | Microsoft Learn"
[2]: https://www.tecmint.com/apt-get-command/?utm_source=chatgpt.com "How to Use 'apt-get' Command in Ubuntu [20 Examples] - Tecmint"
[3]: https://www.linuxteck.com/linux-package-management-command-cheat-sheet/?utm_source=chatgpt.com "Linux Package Management Command Cheat Sheet - LinuxTeck"
[4]: https://help.ubuntu.com/community/AptGet/Howto/?utm_source=chatgpt.com "AptGet/Howto - Community Help Wiki - Ubuntu Documentation"
[5]: https://joshmedeski.com/posts/manage-macos-packages-with-homebrew/?utm_source=chatgpt.com "Manage macOS packages with Homebrew - Josh Medeski"
