# GitHub Push Instructions

The repository is ready, but we need to authenticate to push. Here are your options:

## Option 1: Using GitHub Desktop (EASIEST)

1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Open GitHub Desktop
3. Sign in to your GitHub account
4. Click: **File** → **Add Local Repository**
5. Browse to: `c:\Users\Akshu_1299\Desktop\exam study\python\rajindustries`
6. Click **Add Repository**
7. Click **Publish repository** button at the top
8. Uncheck "Keep this code private"
9. Repository name: **rajindustries**
10. Click **Publish Repository**

✅ Done! Your code is now on GitHub.

## Option 2: Using Command Line with Personal Access Token

1. **Create a Personal Access Token:**
   - Go to: https://github.com/settings/tokens
   - Click **"Generate new token (classic)"**
   - Name: "RajIndustries Deploy"
   - Expiration: 30 days
   - Check: ✓ **repo** (all repo permissions)
   - Click **"Generate token"**
   - **Copy the token** (you won't see it again!)

2. **Push with Token:**
   ```bash
   cd "c:\Users\Akshu_1299\Desktop\exam study\python\rajindustries"

   # When prompted for password, paste your token
   git push -u origin main
   ```

## Option 3: Using Visual Studio Code

1. Open the folder in VS Code
2. Click the Source Control icon (left sidebar)
3. Click the three dots (...) → **Push**
4. Sign in to GitHub when prompted
5. Allow VS Code to access GitHub

## After Successful Push

Go to: https://github.com/akshu12345-crypto/rajindustries

You should see all your files!

## Next Step: Enable GitHub Pages

Once the code is pushed:

1. Go to: https://github.com/akshu12345-crypto/rajindustries/settings/pages
2. Under **"Build and deployment"**:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
3. Click **Save**
4. Wait 2-5 minutes

## Your Live Website URL:

**https://akshu12345-crypto.github.io/rajindustries/**

---

## Current Status:

✅ Repository created: https://github.com/akshu12345-crypto/rajindustries
✅ Code committed locally
⏳ Needs: Push to GitHub (use one of the options above)
⏳ Needs: Enable GitHub Pages

Choose the easiest option for you (I recommend GitHub Desktop)!
