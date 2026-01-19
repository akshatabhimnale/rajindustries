@echo off
echo ========================================
echo Raj Industries Website Deployment
echo ========================================
echo.

cd /d "%~dp0"

echo Step 1: Removing old remote (if exists)...
git remote remove origin 2>nul

echo Step 2: Adding GitHub remote...
git remote add origin https://github.com/akshatabhimnale/rajindustries.git

echo Step 3: Verifying remote...
git remote -v
echo.

echo Step 4: Switching to main branch...
git branch -M main

echo Step 5: Pushing to GitHub...
echo (You may need to enter your GitHub credentials)
echo Username: akshatabhimnale
echo Password: Use your Personal Access Token
echo.
git push -u origin main

echo.
echo ========================================
echo If successful, enable GitHub Pages at:
echo https://github.com/akshatabhimnale/rajindustries/settings/pages
echo.
echo Your live site will be:
echo https://akshatabhimnale.github.io/rajindustries/
echo ========================================
pause
