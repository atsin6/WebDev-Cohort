# 🌐 **Networking Commands Cheat Sheet**

### 🖥️ **1. `ping`**

- **Purpose**: Test connectivity to a host.
- **Flags**:

  - `-n <count>` (Windows): Number of echo requests to send.
  - `-c <count>` (Linux/macOS): Number of packets to send.
  - `-t` (Windows): Ping the specified host until stopped.

- **Example**:

  - Windows:

    ```bash
    ping -n 4 google.com
    ```

  - Linux/macOS:

    ```bash
    ping -c 4 google.com
    ```

### 🧭 **2. `tracert` / `traceroute`**

- **Purpose**: Trace the route packets take to a destination.
- **Flags**:

  - `-h <max_hops>`: Maximum number of hops.
  - `-w <timeout>`: Wait time per reply.

- **Example**:

  - Windows:

    ```bash
    tracert -h 30 google.com
    ```

  - Linux/macOS:

    ```bash
    traceroute -m 30 google.com
    ```

### 🧾 **3. `ipconfig` / `ifconfig`**

- **Purpose**: Display network configuration.
- **Flags**:

  - Windows:

    - `/all`: Detailed information.
    - `/release`: Release IP address.
    - `/renew`: Renew IP address.

  - Linux/macOS:

    - `-a`: Display all interfaces.

- **Example**:

  - Windows:

    ```bash
    ipconfig /all
    ```

  - Linux/macOS:

    ```bash
    ifconfig -a
    ```

### 🔍 **4. `nslookup`**

- **Purpose**: Query DNS to obtain domain name or IP address mapping.
- **Example**:

  ```bash
  nslookup google.com
  ```

([Wikipedia][1], [How-To Geek][2], [Lifewire][3], [InfosecTrain][4], [Simplilearn.com][5])

### 📡 **5. `netstat`**

- **Purpose**: Display network connections, routing tables, interface statistics.
- **Flags**:

  - `-a`: All connections and listening ports.
  - `-n`: Show numerical addresses.
  - `-o` (Windows): Show owning process ID.
  - `-r`: Display routing table.

- **Example**:

  ```bash
  netstat -an
  ```

([InfosecTrain][4], [Lifewire][6])

### 🧰 **6. `arp`**

- **Purpose**: Display or modify the ARP table.
- **Flags**:

  - `-a`: Display current ARP entries.
  - `-d <IP>`: Delete an entry.
  - `-s <IP> <MAC>`: Add a static entry.

- **Example**:

  ```bash
  arp -a
  ```

([InfosecTrain][4])

### 📄 **7. `hostname`**

- **Purpose**: Display or set the system's hostname.
- **Example**:

  ```bash
  hostname
  ```

### 🧪 **8. `systeminfo`** (Windows)

- **Purpose**: Display detailed system configuration.
- **Example**:

  ```bash
  systeminfo
  ```

([Simplilearn.com][5])

### 🔗 **9. `curl`**

- **Purpose**: Transfer data from or to a server.
- **Flags**:

  - `-I`: Fetch headers only.
  - `-O`: Save to file.
  - `-L`: Follow redirects.

- **Example**:

  ```bash
  curl -I https://www.google.com
  ```

([Wikipedia][7], [Red Hat][8])

### 📥 **10. `wget`** (Linux/macOS)

- **Purpose**: Download files from the web.
- **Flags**:

  - `-O <filename>`: Save as specified filename.
  - `-c`: Continue incomplete download.

- **Example**:

  ```bash
  wget -O index.html https://www.google.com
  ```

([Wikipedia][7], [python-automation-book.readthedocs.io][9])

### 🧰 **11. `netsh`** (Windows)

- **Purpose**: Configure network settings.
- **Example**:

  ```bash
  netsh interface ip show config
  ```

### 🛡️ **12. `route`**

- **Purpose**: Display or modify the IP routing table.
- **Flags**:

  - `print`: Display the routing table.
  - `add`: Add a route.
  - `delete`: Delete a route.

- **Example**:

  ```bash
  route print
  ```

([Tetcos][10])

### 🔐 **13. `ssh`**

- **Purpose**: Securely connect to a remote machine.
- **Flags**:

  - `-p <port>`: Specify port.
  - `-i <identity_file>`: Specify identity file.

- **Example**:

  ```bash
  ssh user@192.168.1.10
  ```

### 📤 **14. `scp`**

- **Purpose**: Securely copy files between hosts.
- **Flags**:

  - `-r`: Recursive copy.
  - `-P <port>`: Specify port.

- **Example**:

  ```bash
  scp file.txt user@192.168.1.10:/home/user/
  ```

([python-automation-book.readthedocs.io][9], [Wikipedia][11])

### 📡 **15. `ftp`**

- **Purpose**: Transfer files to/from a remote host.
- **Example**:

  ```bash
  ftp ftp.example.com
  ```

### 🛠️ **16. `netcat` / `nc`**

- **Purpose**: Read and write data across networks.
- **Flags**:

  - `-l`: Listen mode.
  - `-p <port>`: Specify port.
  - `-v`: Verbose output.

- **Example**:

  ```bash
  nc -l -p 1234
  ```

([ComputerNetworkingNotes][12])

### 🔍 **17. `dig`** (Linux/macOS)

- **Purpose**: DNS lookup.
- **Flags**:

  - `+short`: Short answer.
  - `@<server>`: Specify DNS server.

- **Example**:

  ```bash
  dig google.com +short
  ```

([GeeksforGeeks][13], [Simplilearn.com][5])

### 📞 **18. `telnet`**

- **Purpose**: Connect to remote hosts.
- **Example**:

  ```bash
  telnet towel.blinkenlights.nl
  ```

### 🕵️ **19. `whois`** (Linux/macOS)

- **Purpose**: Retrieve domain registration information.
- **Example**:

  ```bash
  whois example.com
  ```

([Simplilearn.com][5])

### 📊 **20. `mtr`** (Linux/macOS)

- **Purpose**: Network diagnostic tool combining ping and traceroute.
- **Example**:

  ```bash
  mtr google.com
  ```

---

These commands are fundamental for network diagnostics, configuration, and troubleshooting across different operating systems. Some commands may require administrative privileges.

[1]: https://en.wikipedia.org/wiki/Ping_%28networking_utility%29?utm_source=chatgpt.com "Ping (networking utility)"
[2]: https://www.howtogeek.com/basic-networking-commands-every-linux-user-should-know/?utm_source=chatgpt.com "12 Basic Networking Commands Every Linux User Should Know"
[3]: https://www.lifewire.com/ping-command-2618099?utm_source=chatgpt.com "How to Use the Ping Command for Testing in Windows"
[4]: https://www.infosectrain.com/blog/top-20-networking-commands/?utm_source=chatgpt.com "Top 20+ Networking Commands - Infosec Train"
[5]: https://www.simplilearn.com/tutorials/cyber-security-tutorial/understanding-the-networking-commands?utm_source=chatgpt.com "Best Walkthrough for Understanding the Networking Commands"
[6]: https://www.lifewire.com/netstat-command-2618098?utm_source=chatgpt.com "How to Use the Netstat Command"
[7]: https://en.wikipedia.org/wiki/Ifconfig?utm_source=chatgpt.com "Ifconfig"
[8]: https://www.redhat.com/en/blog/7-great-network-commands?utm_source=chatgpt.com "7 Linux networking commands that every sysadmin should know"
[9]: https://python-automation-book.readthedocs.io/en/1.0/appendix/04_windows.html?utm_source=chatgpt.com "Essential Windows 10 Networking Commands"
[10]: https://www.tetcos.com/pdf/v13/Experiments/Understand-the-working-of-basic-networking-commands.pdf?utm_source=chatgpt.com "[PDF] 26 Understand the working of basic networking commands (Ping ..."
[11]: https://en.wikipedia.org/wiki/Traceroute?utm_source=chatgpt.com "Traceroute"
[12]: https://www.computernetworkingnotes.com/networking-tutorials/basic-networking-commands-explained-with-examples.html?utm_source=chatgpt.com "Basic Networking Commands Explained with Examples"
[13]: https://www.geeksforgeeks.org/networking-commands-for-troubleshooting-windows/?utm_source=chatgpt.com "Networking Commands For Troubleshooting Windows"
