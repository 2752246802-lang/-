@echo off
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js was not found.
  echo Install Node.js LTS first: https://nodejs.org/
  pause
  exit /b 1
)

if not exist node_modules (
  echo Installing dependencies...
  call npm install --registry=https://registry.npmmirror.com
  if errorlevel 1 (
    echo npm install failed. Check your network or npm setup.
    pause
    exit /b 1
  )
)

start "Portfolio Dev Server" /D "%~dp0" cmd /k "npm run dev"
timeout /t 3 >nul
start "" "http://localhost:5173/"
