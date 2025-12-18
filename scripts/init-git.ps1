# Helper script to initialize a git repo and make the initial commit on Windows.
# Run this script AFTER you install Git (https://git-scm.com/download/win)

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  Write-Error "Git is not available. Please install Git first: https://git-scm.com/download/win"
  exit 1
}

Set-Location -Path (Split-Path -Path $PSScriptRoot -Parent)  # go to project root

if (-not (Test-Path -Path .git)) {
  git init
} else {
  Write-Output "Git repository already initialized."
}

git add .

$hasCommit = git rev-parse --verify HEAD 2>$null
if ($LASTEXITCODE -ne 0) {
  git commit -m "chore: initial Next.js setup for Apptrondev home"
  Write-Output "Initial commit created."
} else {
  Write-Output "Repository already has commits. Skipping initial commit."
}
