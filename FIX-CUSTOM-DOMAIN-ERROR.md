# Fix Custom Domain Error

You're seeing this error because "rajindustries" was entered in the Custom domain field.

## How to Fix:

### Step 1: Go to Settings → Pages
**Click here:** https://github.com/akshatabhimnale/rajindustries/settings/pages

### Step 2: Remove Custom Domain

You'll see a section called **"Custom domain"**

- There's a text box that probably has "rajindustries" in it
- **DELETE** everything in that box (leave it empty)
- Click **"Save"** if there's a save button

### Step 3: Set the Source to GitHub Actions

In the **"Build and deployment"** section:

- **Source:** Select **"GitHub Actions"** from the dropdown
- (NOT "Deploy from a branch")

### Step 4: Wait for Deployment

After selecting GitHub Actions:

1. Go to: https://github.com/akshatabhimnale/rajindustries/actions
2. You'll see a workflow running
3. Wait for green checkmark ✓ (1-2 minutes)

### Step 5: Your Site is Live!

Visit: **https://akshatabhimnale.github.io/rajindustries/**

---

## What Happened:

The **Custom domain** field is ONLY for if you own a domain like "www.rajindustries.com"

You DON'T need a custom domain! GitHub Pages gives you:
**https://akshatabhimnale.github.io/rajindustries/**

This is FREE and works perfectly for showing your client!

---

## Visual Guide:

```
┌─────────────────────────────────────────┐
│ Custom domain                           │
│ ┌─────────────────────────────────────┐ │
│ │ [LEAVE THIS EMPTY]              ❌  │ │  ← DELETE any text here
│ └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ Build and deployment                    │
│ Source:                                 │
│ ┌─────────────────────────────────────┐ │
│ │ GitHub Actions              ◄─────  │ │  ← SELECT THIS
│ └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

---

## Summary:

1. ✅ Go to Settings → Pages
2. ✅ **Delete** anything in "Custom domain" field
3. ✅ Set Source to "GitHub Actions"
4. ✅ Wait 2 minutes
5. ✅ Visit: https://akshatabhimnale.github.io/rajindustries/

**Do these steps now!**
