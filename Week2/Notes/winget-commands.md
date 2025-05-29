# 📦 **Windows Package Manager (WinGet) Overview**

WinGet is a command-line tool developed by Microsoft that enables users to discover, install, upgrade, remove, and configure applications on Windows 10, Windows 11, and Windows Server 2025. It simplifies software management by allowing operations directly from the terminal. ([Microsoft Learn][1])

---

## 🛠️ **Installation and Verification**

### ✅ **Check if WinGet is Installed**

Open Git Bash or Command Prompt and run:

```bash
winget --version
```

If installed, this will display the version number.

### 📥 **Install WinGet**

If WinGet is not installed, you can install it via the Microsoft Store by searching for **App Installer** or download it directly from the [WinGet GitHub releases](https://github.com/microsoft/winget-cli/releases).([Microsoft Learn][1])

---

## 🧾 **Core Commands and Flags**

Below is a comprehensive list of WinGet commands, their descriptions, common flags, and usage examples.

### 1. 🔍 **Search for Packages**

- **Command:** `winget search <package>`
- **Description:** Searches for packages matching the provided query.

**Example:**

```bash
winget search vscode
```

### 2. 📥 **Install Packages**

- **Command:** `winget install <package>`
- **Description:** Installs the specified package.
- **Common Flags:**

  - `--id <package_id>`: Specifies the exact package ID.
  - `--version <version>`: Installs a specific version.
  - `--source <source>`: Specifies the source repository.
  - `--silent` or `--quiet`: Performs a silent installation.
  - `--accept-package-agreements`: Accepts package license agreements.
  - `--accept-source-agreements`: Accepts source license agreements.
  - `--force`: Forces the installation, even if the package is already installed.([Wikipedia][2])

**Example:**

```bash
winget install --id Microsoft.VisualStudioCode --version 1.60.0 --silent --accept-package-agreements
```

### 3. 🔄 **Upgrade Packages**

- **Command:** `winget upgrade`
- **Description:** Upgrades installed packages to their latest versions.
- **Common Flags:**

  - `--id <package_id>`: Upgrades a specific package.
  - `--all`: Upgrades all upgradable packages.
  - `--silent`: Performs a silent upgrade.
  - `--accept-package-agreements`: Accepts package license agreements.
  - `--accept-source-agreements`: Accepts source license agreements.

**Example:**

```bash
winget upgrade --all --silent --accept-package-agreements
```

### 4. ❌ **Uninstall Packages**

- **Command:** `winget uninstall <package>`
- **Description:** Uninstalls the specified package.
- **Common Flags:**

  - `--id <package_id>`: Specifies the exact package ID.
  - `--silent`: Performs a silent uninstallation.([Peter Girnus][3], [Wikipedia][2])

**Example:**

```bash
winget uninstall --id Microsoft.VisualStudioCode --silent
```

### 5. 📄 **List Installed Packages**

- **Command:** `winget list`
- **Description:** Displays a list of installed packages.
- **Common Flags:**

  - `--source <source>`: Filters the list by source.
  - `--name <name>`: Filters the list by package name.

**Example:**

```bash
winget list --name "Visual Studio"
```

### 6. 🔎 **Show Package Details**

- **Command:** `winget show <package>`
- **Description:** Displays detailed information about a package.
- **Common Flags:**

  - `--id <package_id>`: Specifies the exact package ID.
  - `--version <version>`: Shows details for a specific version.
  - `--source <source>`: Specifies the source repository.

**Example:**

```bash
winget show --id Microsoft.VisualStudioCode
```

### 7. 🧰 **Manage Sources**

- **Command:** `winget source <action>`
- **Description:** Manages package sources. Actions include `add`, `remove`, `list`, and `update`.
- **Common Flags:**

  - `--name <source_name>`: Specifies the source name.
  - `--arg <source_url>`: Specifies the source URL.
  - `--type <source_type>`: Specifies the source type (e.g., `msstore`, `winget`).([SS64][4])

**Example:**

```bash
winget source add --name mySource --arg https://myrepo.com --type msstore
```

### 8. ⚙️ **Configure Settings**

- **Command:** `winget settings`
- **Description:** Opens the settings file (`settings.json`) for customization.([SS64][4])

**Example:**

```bash
winget settings
```

### 9. 📤 **Export Installed Packages**

- **Command:** `winget export -o <file>`
- **Description:** Exports a list of installed packages to a JSON file.([SS64][4])

**Example:**

```bash
winget export -o packages.json
```

### 10. 📥 **Import Packages**

- **Command:** `winget import -i <file>`
- **Description:** Installs packages from a JSON file.([SS64][4])

**Example:**

```bash
winget import -i packages.json
```

---

## 🧪 **Advanced Commands**

### 🧪 **Validate Manifests**

- **Command:** `winget validate <manifest>`
- **Description:** Validates a manifest file for submission to the Windows Package Manager repository.([SS64][4])

**Example:**

```bash
winget validate manifest.yaml
```

### 🔐 **Hash Installer Files**

- **Command:** `winget hash <file>`
- **Description:** Generates a SHA256 hash for the specified installer file.([SS64][4])

**Example:**

```bash
winget hash installer.exe
```

---

## ⚙️ **Common Flags Across Commands**

| Flag                          | Description                                                       |                                                                                        |
| ----------------------------- | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `--id <package_id>`           | Specifies the exact package ID.                                   |                                                                                        |
| `--name <package_name>`       | Specifies the package name.                                       |                                                                                        |
| `--version <version>`         | Specifies the package version.                                    |                                                                                        |
| `--source <source>`           | Specifies the source repository.                                  |                                                                                        |
| `--silent` or `--quiet`       | Performs the operation silently without user interaction.         |                                                                                        |
| `--accept-package-agreements` | Accepts package license agreements.                               |                                                                                        |
| `--accept-source-agreements`  | Accepts source license agreements.                                |                                                                                        |
| `--force`                     | Forces the operation, even if the package is already installed.   |                                                                                        |
| `--exact` or `-e`             | Matches the exact string in search operations.                    |                                                                                        |
| `--all`                       | Applies the operation to all applicable packages (e.g., upgrade). | ([Wikipedia][2], [EduGeek.net][5], [Microsoft Learn][6], [Peter Girnus][3], [SS64][4]) |

---

## 📚 **Additional Resources**

- [Official WinGet Documentation](https://learn.microsoft.com/en-us/windows/package-manager/winget/)
- [WinGet GitHub Repository](https://github.com/microsoft/winget-cli)

---

> **By atsin using chatGPT**

[1]: https://learn.microsoft.com/en-us/windows/package-manager/winget/?utm_source=chatgpt.com "Use WinGet to install and manage applications | Microsoft Learn"
[2]: https://en.wikipedia.org/wiki/Windows_Package_Manager?utm_source=chatgpt.com "Windows Package Manager"
[3]: https://www.petergirnus.com/blog/how-to-use-windows-package-manager-winget?utm_source=chatgpt.com "How To Use Windows Package Manager (WinGet) Tool - Peter Girnus"
[4]: https://ss64.com/nt/winget.html?utm_source=chatgpt.com "WINGET.exe - Windows CMD - SS64"
[5]: https://www.edugeek.net/forums/topic/212344-winget-silent-install/?utm_source=chatgpt.com "Winget silent install - O/S Deployment - EduGeek.net"
[6]: https://learn.microsoft.com/en-us/windows/package-manager/winget/install?utm_source=chatgpt.com "install command (winget) - Learn Microsoft"
