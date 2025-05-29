## 🔢 Types of Commands/Operations in Shell/Bash

### 🔹 1. **Built-in Commands**

- These are **internal** to the shell itself.
- No external file is executed — the shell interprets and runs them.

✅ Examples:

```bash
cd     # change directory
echo   # print to output
pwd    # print working directory
exit   # close the shell
alias  # define shortcuts
```

---

### 🔹 2. **External Commands (Programs)**

- These are **standalone programs** or **executables** found in directories like `/bin`, `/usr/bin`, etc.
- Invoked by the shell but run as separate processes.

✅ Examples:

```bash
ls       # list files
cat      # view file contents
grep     # pattern matching
nano     # text editor
curl     # fetch URLs
```

---

### 🔹 3. **Shell Control Structures**

Used for **flow control** in scripts or interactive commands.

✅ Types:

- **Conditional statements**: `if`, `else`, `elif`
- **Loops**: `for`, `while`, `until`
- **Case matching**: `case ... esac`
- **Exit statuses**: `exit`, `$?`

---

### 🔹 4. **Variable & Arithmetic Operations**

The shell supports simple **variables** and **arithmetic**.

✅ Examples:

```bash
x=5
echo $x
((x++))
let "y = x * 2"
```

---

### 🔹 5. **Redirection Operators**

Control **input/output** of commands.

✅ Types:

```bash
>    # output redirection (overwrite)
>>   # output redirection (append)
<    # input redirection
2>   # redirect stderr
&>   # redirect stdout and stderr
```

---

### 🔹 6. **Pipes**

Used to **connect** the output of one command to the input of another.

✅ Example:

```bash
ls -l | grep "txt"
```

---

### 🔹 7. **Job Control Commands**

Control **background/foreground** jobs and processes.

✅ Examples:

```bash
&     # run in background
jobs  # list background jobs
fg    # bring to foreground
bg    # resume in background
kill  # send signal to process
```

---

### 🔹 8. **File and Directory Commands**

Common file operations.

✅ Examples:

```bash
mkdir   # create directory
touch   # create file
cp      # copy
mv      # move or rename
rm      # delete
```

---

### 🔹 9. **Package/Process/Network Management**

System-level operations (depends on OS/tools installed).

✅ Examples:

```bash
ps       # list processes
top      # live process view
apt      # package manager (Debian/Ubuntu)
ping     # check network
ifconfig # network info
```

---

### 🔹 10. **Custom Commands (Functions, Scripts, Aliases)**

You can define your own commands.

✅ Examples:

```bash
alias ll='ls -l'
myfunc() { echo "Hello $1"; }
./myscript.sh
```

---

## 🧠 Summary in Bullet Points

- **Built-in Commands** (e.g., `cd`, `exit`)
- **External Commands** (e.g., `ls`, `grep`)
- **Control Structures** (`if`, `for`, `case`)
- **Variable & Arithmetic** (`x=5`, `let`, `$(( ))`)
- **Redirections** (`>`, `2>`, `>>`)
- **Pipes** (`|`)
- **Job Control** (`jobs`, `fg`, `bg`, `kill`)
- **File/Dir Commands** (`cp`, `mv`, `rm`)
- **System/Network Commands** (`ps`, `apt`, `ping`)
- **User-Defined Commands** (`alias`, functions, scripts)

---

> **<u>Note</u> :** In the context of **shells** (especially Bash), operations or commands can be categorized based on **what they do**, rather than where they're run (shell/terminal/command line).
