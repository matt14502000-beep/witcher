param(
  [string]$ProjectPath = "C:\Users\mjat1\Documents\Codex\2026-05-29\mjat1981-boop-witcher-quest-wise-git\work\from-zip\witcher-quest-wise-main",
  [int]$Port = 4173,
  [switch]$DryRun
)

$ErrorActionPreference = "Stop"

Write-Host "== Dev Resume Mode =="
Write-Host "Project: $ProjectPath"
Write-Host "Port: $Port"

if (-not (Test-Path -LiteralPath $ProjectPath)) {
  throw "Project path does not exist: $ProjectPath"
}

if ($DryRun) {
  Write-Host "Dry run enabled. Will not start server."
  exit 0
}

Set-Location -LiteralPath $ProjectPath

# Clear problematic proxy/offline flags for this session only.
$env:HTTP_PROXY = ""
$env:HTTPS_PROXY = ""
$env:ALL_PROXY = ""
$env:GIT_HTTP_PROXY = ""
$env:GIT_HTTPS_PROXY = ""
$env:NPM_CONFIG_OFFLINE = "false"

Write-Host "Starting Vite dev server..."
Write-Host "Phone URL (same Wi-Fi): http://<YOUR-PC-LAN-IP>:$Port/"
Write-Host "If this port is busy, Vite will auto-pick the next one."
npm run dev -- --host 0.0.0.0 --port $Port
