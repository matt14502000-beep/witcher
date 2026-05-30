# Low-CPU Gaming Workflow

Project path:
`C:\Users\mjat1\Documents\Codex\2026-05-29\mjat1981-boop-witcher-quest-wise-git\work\from-zip\witcher-quest-wise-main`

## One-command mode

### Enter Game Mode (before you launch your game)
Run:
`game-mode.cmd`

What it does:
- Stops local Vite/dev server processes tied to this project.
- Shows top CPU processes so you can verify load is lower.

### Resume Dev Mode (after gaming)
Run:
`resume-dev.cmd`

What it does:
- Restores known-good npm/proxy flags for this session.
- Starts Vite on `0.0.0.0:4173` (or next free port).
- Lets phone connect on same Wi-Fi using your PC LAN IP.

## Manual beginner checklist

1. Open terminal.
2. Go to project folder:
`cd C:\Users\mjat1\Documents\Codex\2026-05-29\mjat1981-boop-witcher-quest-wise-git\work\from-zip\witcher-quest-wise-main`
3. Stop dev server:
Press `Ctrl + C` in the terminal where it is running.
4. Optional CPU check:
`Get-Process | Sort-Object CPU -Descending | Select-Object -First 10 ProcessName,Id,CPU`
5. Launch your game.
6. After gaming, open a fresh terminal in the same folder.
7. Clear proxy/offline session flags:
`$env:HTTP_PROXY=''; $env:HTTPS_PROXY=''; $env:ALL_PROXY=''; $env:GIT_HTTP_PROXY=''; $env:GIT_HTTPS_PROXY=''; $env:NPM_CONFIG_OFFLINE='false'`
8. Start app:
`npm run dev -- --host 0.0.0.0 --port 4173`
9. On phone (same Wi-Fi), open:
`http://<YOUR-PC-LAN-IP>:4173/`

## Quick verification step

Before gaming, run Game Mode and confirm:
- No `vite`/`npm run dev` process is left for this project.
- CPU top list no longer shows local dev processes from this app.

## Notes

- This workflow does **not** change app code, types, or data.
- If port `4173` is busy, Vite auto-selects another port; use the URL shown in terminal.
