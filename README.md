# Witcher Quest Wise - Computer Quick Launch

This guide is computer-only and uses CMD launchers for daily use.

Project path:
`C:\Users\mjat1\Documents\Codex\2026-05-29\mjat1981-boop-witcher-quest-wise-git\work\from-zip\witcher-quest-wise-main`

## Quick Start (CMD)

1. Open terminal in the project folder.
2. Start app:
`resume-dev.cmd`
3. Open in browser:
`http://localhost:4173`

If port 4173 is busy, use the fallback port shown in terminal.

## Gaming Mode (Lower CPU)

Before gaming:
`game-mode.cmd`

What it does:
- Stops local dev server processes tied to this project.
- Prints top CPU process list for a quick sanity check.

After gaming:
`resume-dev.cmd`

## CMD Entry Points

- `resume-dev.cmd` -> `scripts\resume-dev.ps1`
- `game-mode.cmd` -> `scripts\game-mode.ps1`

## PowerShell Script Roles

- `scripts\resume-dev.ps1`
  - Clears proxy/offline flags for this terminal session.
  - Starts Vite with:
  `npm run dev -- --host 0.0.0.0 --port 4173`

- `scripts\game-mode.ps1`
  - Stops project dev processes.
  - Shows top CPU process list.
  - Includes non-admin fallback process scan.

## Manual Fallback Commands

1. Go to project path:
`cd C:\Users\mjat1\Documents\Codex\2026-05-29\mjat1981-boop-witcher-quest-wise-git\work\from-zip\witcher-quest-wise-main`

2. Reset environment for this terminal:
`$env:HTTP_PROXY=''; $env:HTTPS_PROXY=''; $env:ALL_PROXY=''; $env:GIT_HTTP_PROXY=''; $env:GIT_HTTPS_PROXY=''; $env:NPM_CONFIG_OFFLINE='false'`

3. Start app manually:
`npm run dev -- --host 0.0.0.0 --port 4173`

## Windows Desktop Shortcut Setup

Shortcut A (start app):
1. Right-click desktop -> New -> Shortcut.
2. Target:
`C:\Users\mjat1\Documents\Codex\2026-05-29\mjat1981-boop-witcher-quest-wise-git\work\from-zip\witcher-quest-wise-main\resume-dev.cmd`
3. Name:
`Witcher App - Start`

Shortcut B (pause for gaming):
1. Right-click desktop -> New -> Shortcut.
2. Target:
`C:\Users\mjat1\Documents\Codex\2026-05-29\mjat1981-boop-witcher-quest-wise-git\work\from-zip\witcher-quest-wise-main\game-mode.cmd`
3. Name:
`Witcher App - Game Mode`

Optional:
- Right-click each shortcut and pin to Start/taskbar.

## Verification Checklist

1. Launch via `resume-dev.cmd` and open `http://localhost:4173`.
2. Run `game-mode.cmd` and confirm CPU list appears.
3. Relaunch using `resume-dev.cmd`.
4. Confirm manual fallback commands also work.
