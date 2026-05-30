param(
  [string]$ProjectPath = "C:\Users\mjat1\Documents\Codex\2026-05-29\mjat1981-boop-witcher-quest-wise-git\work\from-zip\witcher-quest-wise-main",
  [switch]$DryRun
)

$ErrorActionPreference = "Stop"

Write-Host "== Game Mode =="
Write-Host "Project: $ProjectPath"
if ($DryRun) {
  Write-Host "Dry run enabled. No processes will be stopped."
}

if (-not (Test-Path -LiteralPath $ProjectPath)) {
  throw "Project path does not exist: $ProjectPath"
}

# Stop local dev processes tied to this project.
# Primary path: command-line filtering via CIM.
# Fallback: non-admin process-name filtering.
$targets = @()
try {
  $targets = Get-CimInstance Win32_Process |
    Where-Object {
      ($_.Name -in @("node.exe", "npm.cmd", "wsl.exe", "pwsh.exe", "powershell.exe")) -and
      $_.CommandLine -and
      ($_.CommandLine -like "*$ProjectPath*") -and
      ($_.CommandLine -match "vite|npm run dev|npm run preview")
    }
} catch {
  Write-Host "CIM process inspection not available (non-admin). Using safe fallback."
  $targets = Get-Process -Name node,npm -ErrorAction SilentlyContinue |
    Select-Object @{ Name = "Name"; Expression = { "$($_.Name).exe" } }, @{ Name = "ProcessId"; Expression = { $_.Id } }
}

if (-not $targets) {
  Write-Host "No local dev server process found for this project."
} else {
  foreach ($proc in $targets) {
    Write-Host ("Found: {0} (PID {1})" -f $proc.Name, $proc.ProcessId)
    if (-not $DryRun) {
      Stop-Process -Id $proc.ProcessId -Force -ErrorAction SilentlyContinue
    }
  }
}

Write-Host ""
Write-Host "Top CPU processes (quick check):"
Get-Process |
  Sort-Object CPU -Descending |
  Select-Object -First 10 ProcessName, Id, CPU |
  Format-Table -AutoSize

Write-Host ""
Write-Host "Game Mode complete."
