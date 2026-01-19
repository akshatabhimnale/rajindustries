# Fix and Deploy - Step by Step

The error means the GitHub repository wasn't created yet. Let's fix this!

## Step 1: Create the Repository on GitHub

1. **Open this link:** https://github.com/new

2. **Fill in the form:**
   - **Repository name:** Type exactly: `rajindustries`
   - **Description:** Wire Harness Manufacturing Website with Three.js
   - **Visibility:** Select **Public** (must be public for free GitHub Pages)
   - **IMPORTANT:** Do NOT check any boxes:
     - ❌ Do NOT check "Add a README file"
     - ❌ Do NOT check "Add .gitignore"
     - ❌ Do NOT check "Choose a license"

3. **Click the green "Create repository" button**

4. **You'll see a page with setup instructions - IGNORE them, come back here!**

## Step 2: Remove Old Remote and Add New One

Copy and paste these commands in PowerShell:

```powershell
cd "c:\Users\Akshu_1299\Desktop\exam study\python\rajindustries"

# Remove the old remote
git remote remove origin

# Add the correct remote
git remote add origin https://github.com/akshu12345-crypto/rajindustries.git

# Verify it's added
git remote -v
```

## Step 3: Push to GitHub

```powershell
# Make sure we're on main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

**When prompted:**
- Username: `akshu12345-crypto`
- Password: Use a **Personal Access Token** (NOT your GitHub password!)

### Don't have a token? Create one:

1. Go to: https://github.com/settings/tokens/new
2. Note: "RajIndustries Deployment"
3. Expiration: 30 days
4. Check: ✓ **repo** (Full control of private repositories)
5. Click "Generate token"
6. **COPY THE TOKEN** (you won't see it again!)
7. Use this token as your password when pushing

## Step 4: Enable GitHub Pages

After successful push:

1. Go to: https://github.com/akshu12345-crypto/rajindustries/settings/pages
2. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
3. Click **Save**

## Step 5: Get Your Live Link

Wait 2-3 minutes, then visit:

**https://akshu12345-crypto.github.io/rajindustries/**

Share this link with your client! 🎉

---

## Alternative: Use GitHub Desktop (No Token Needed!)

If the command line is giving you trouble:

1. Download: https://desktop.github.com/
2. Install and sign in to your GitHub account
3. Create the repository on GitHub.com first (Step 1 above)
4. In GitHub Desktop:
   - File → Add Local Repository
   - Choose: `c:\Users\Akshu_1299\Desktop\exam study\python\rajindustries`
   - Click "Publish repository"
   - Uncheck "Keep this code private"
   - Click "Publish Repository"

Much easier! No tokens needed.

---

## Quick Checklist:

- [ ] Created repository on github.com (Step 1)
- [ ] Removed old remote (Step 2)
- [ ] Added new remote (Step 2)
- [ ] Pushed code successfully (Step 3)
- [ ] Enabled GitHub Pages (Step 4)
- [ ] Verified site is live (Step 5)

**Current Issue:** Repository doesn't exist on GitHub yet
**Solution:** Follow Step 1 above to create it!
