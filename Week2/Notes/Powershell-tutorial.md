# 🚀 PowerShell In-Depth Tutorial

---

## 1. **What is PowerShell?** 🤔

PowerShell is like a magical toolbox 🧰 for Windows (and more!). It’s a command shell + scripting language that lets you automate tasks, control your computer, and even summon dragons 🐉 (well, almost).

---

## 2. **PowerShell Basics** ⚡️

### Opening PowerShell

- On Windows: Search for **PowerShell** or use **Windows Terminal**
- On Linux/macOS: Run `pwsh` (PowerShell Core)

---

### Navigation Commands 🚶‍♂️

| Command                 | What it does          | Fun example                                                                   |
| ----------------------- | --------------------- | ----------------------------------------------------------------------------- |
| `Get-ChildItem` or `ls` | Lists files/folders   | `ls` — “Show me what’s in my treasure chest!” 🏴‍☠️                              |
| `Set-Location` or `cd`  | Change directory      | `cd C:\Users\Atul\Documents` — “Teleport me to my documents!” 🌀              |
| `New-Item`              | Create file or folder | `New-Item -Name "magic.txt" -ItemType File` — “Create a magic spell book!” ✨ |
| `Remove-Item`           | Delete files/folders  | `Remove-Item magic.txt` — “Zap! Spell book vanished!” ⚡️                     |

---

### Help Command 🆘

```powershell
Get-Help Get-Process -Full
Get-Help Get-Process -Examples
```

Think of `Get-Help` as your PowerShell wizard mentor 🧙‍♂️ — always ready to assist!

---

## 3. **Variables & Data Types** 🏷️

```powershell
$wizardName = "Gandalf"
$age = 2019
$hasStaff = $true
$spells = @("Fireball", "Invisibility", "Teleport")
```

Use variables to store your magical ingredients 🧪 for spells or tasks.

---

## 4. **Objects & Pipelines** 🌊

PowerShell commands output **objects**, so you can pipe them through filters like a magic sieve:

```powershell
Get-Process | Where-Object { $_.CPU -gt 50 }
```

Translation: "Show me all processes working hard (using CPU > 50)." 💪

---

## 5. **Control Flow** 🛤️

### If-Else

```powershell
if ($age -ge 18) {
    Write-Host "You are a wise wizard! 🧙‍♂️"
} else {
    Write-Host "You’re a wizard apprentice! 🧙‍♀️"
}
```

---

### Switch — Spellbook Edition 🧙‍♀️

```powershell
$spell = "Fireball"

switch ($spell) {
    "Fireball" { Write-Host "🔥 Casting blazing fireball!" }
    "Invisibility" { Write-Host "👻 Now you’re invisible!" }
    default { Write-Host "🤔 Unknown spell. Try again!" }
}
```

---

## 6. **Loops** 🔄

### For loop — Counting your magic potions:

```powershell
for ($i=1; $i -le 5; $i++) {
    Write-Host "Potion $i brewed! 🧪"
}
```

### Foreach loop — Casting spells:

```powershell
$spells = @("Fireball", "Invisibility", "Teleport")
foreach ($spell in $spells) {
    Write-Host "Casting $spell spell! ✨"
}
```

---

## 7. **Functions** 🧩

Create your own magical functions:

```powershell
function Cast-Spell {
    param([string]$spellName)
    Write-Host "Casting the $spellName spell! 🔮"
}

Cast-Spell -spellName "Lightning Bolt"
```

---

## 8. **Error Handling** 🚧

Don’t get caught in a cursed spell! Use try/catch to handle errors:

```powershell
try {
    Get-Item "C:\nonexistentfile.txt"
} catch {
    Write-Host "Oops! Spell failed, file not found! ❌"
} finally {
    Write-Host "Spell attempt complete. 🪄"
}
```

---

## 9. **Working with Files** 📂

### Reading your magic scroll (file):

```powershell
Get-Content -Path "magic_scroll.txt"
```

### Writing new spells:

```powershell
Set-Content -Path "magic_scroll.txt" -Value "Wingardium Leviosa"
Add-Content -Path "magic_scroll.txt" -Value "Expelliarmus"
```

---

## 10. **Modules & Importing Magic** 🧙‍♂️✨

Load new powers into your shell:

```powershell
Import-Module Microsoft.PowerShell.Management
```

---

## 11. **PowerShell Remoting** 🌍

Command your distant wizard towers:

```powershell
Invoke-Command -ComputerName "WizardTower01" -ScriptBlock { Get-Process }
```

---

## 12. **Task Automation** ⏰

Schedule your daily spellcasting:

```powershell
$action = New-ScheduledTaskAction -Execute "PowerShell.exe" -Argument "-File C:\Scripts\cast_spells.ps1"
$trigger = New-ScheduledTaskTrigger -Daily -At 9am
Register-ScheduledTask -Action $action -Trigger $trigger -TaskName "DailySpellcasting"
```

---

## 13. **CSV & JSON — Magical Data Formats** 📊📜

### Export spells to CSV:

```powershell
$spells = @(
    [PSCustomObject]@{Name="Fireball"; Power=50},
    [PSCustomObject]@{Name="Invisibility"; Power=20}
)
$spells | Export-Csv -Path "spells.csv" -NoTypeInformation
```

### Read spellbook from JSON:

```powershell
$json = Get-Content "spellbook.json" | ConvertFrom-Json
$json | ForEach-Object { Write-Host "Spell: $($_.Name)" }
```

---

## 14. **Bonus Tips** 🦄

- Use **Tab** key for magic autocomplete ✨
- Use aliases like `ls`, `rm`, `cat` for quick spells
- Get command details with `Get-Help` — your spell manual 📚

---

# 🎉 Fun Example: Dragon Tamer Script 🐉

```powershell
function Tame-Dragon {
    param([string]$dragonName)
    Write-Host "Approaching the fierce dragon $dragonName... 🐲"
    Start-Sleep -Seconds 2
    Write-Host "$dragonName is now calm and tamed! 🦄"
}

Tame-Dragon -dragonName "Smaug"
```

---

### Summary

- PowerShell is your magical wand for automation 🪄
- Commands produce rich objects to manipulate easily 🔮
- Control flow lets you build smart spell scripts 🧙‍♂️
- Handle errors to avoid curses ⚔️
- Automate repetitive tasks like a true wizard 🕰️
