# Repository Split Instructions

Your repository has been prepared to be split into two separate GitHub repositories. All necessary files have been updated to reflect this separation.

## ✅ What Has Been Done

**Updated Files:**
- ✅ `README.md` - Removed direct references to miner-dashboard, added link to separate repo
- ✅ `miner-dashboard/README.md` - Updated to be standalone with proper clone instructions
- ✅ `miner-dashboard/package.json` - Updated repository URLs and package name
- ✅ `index.html` - Updated links to point to separate dashboard repository
- ✅ `CONTRIBUTING.md` - Updated to reflect new structure
- ✅ Created `split_repos.sh` - Automated script to help with the split
- ✅ Created `SPLIT_REPOS.md` - Detailed manual instructions

## 🚀 Next Steps

### Option 1: Use the Automated Script (Recommended)

1. **Run the split script:**
   ```bash
   chmod +x split_repos.sh
   ./split_repos.sh
   ```

2. **Create the new GitHub repository:**
   - Go to https://github.com/new
   - Name it `quaiminer-dashboard` (or your preferred name)
   - **DO NOT** initialize with README, .gitignore, or license
   - Click "Create repository"

3. **Push the dashboard repository:**
   ```bash
   cd ../quaiminer-dashboard-temp
   git commit -m "Initial commit: QuaiMiner Dashboard"
   git remote add origin https://github.com/YOUR_USERNAME/quaiminer-dashboard.git
   git push -u origin main
   ```

4. **Remove miner-dashboard from main repo:**
   ```bash
   cd /workspace  # or wherever your main repo is
   git rm -r miner-dashboard/
   # Update .gitignore to remove the miner-dashboard reference
   # Remove the line: !miner-dashboard/start.sh
   git add .gitignore
   git commit -m "Split miner-dashboard into separate repository"
   git push origin main
   ```

### Option 2: Manual Split

Follow the detailed instructions in `SPLIT_REPOS.md`

## 📁 Repository Structure After Split

### QuaiMiner Core (Main Repo)
- ✅ All setup scripts (`*.sh`)
- ✅ Research documentation (`*.md`)
- ✅ Landing page (`index.html`)
- ✅ Simple dashboard (`dashboard/`)
- ✅ GitHub templates (`.github/`)
- ✅ LICENSE and CONTRIBUTING.md
- ❌ `miner-dashboard/` (removed)

### QuaiMiner Dashboard (New Repo)
- ✅ All `miner-dashboard/` contents
- ✅ LICENSE (copied)
- ✅ Standalone README.md
- ✅ Updated package.json with correct URLs

## ⚠️ Important Notes

1. **GitHub URLs**: The files reference `https://github.com/thecrackofdan/quaiminer-dashboard` - update this if your username or repo name differs

2. **History**: The split script creates a new repository without git history. If you want to preserve history, you'll need to use `git filter-branch` or `git filter-repo` (more advanced)

3. **Dependencies**: The dashboard repo is now completely independent and can be installed/updated separately

4. **Links**: All cross-references between repos use GitHub URLs, so they'll work once both repos are pushed

## ✅ Verification Checklist

After splitting:

- [ ] Dashboard repo exists on GitHub
- [ ] Dashboard repo can be cloned and `npm install` works
- [ ] Main repo no longer contains `miner-dashboard/`
- [ ] All links in README.md work correctly
- [ ] Landing page (`index.html`) links to dashboard repo correctly
- [ ] Both repos have proper LICENSE files
- [ ] Dashboard package.json has correct repository URLs

## 🆘 Need Help?

If you encounter issues:
1. Check `SPLIT_REPOS.md` for detailed manual instructions
2. Review the script output for any errors
3. Ensure both GitHub repositories exist before pushing
4. Verify all file paths are correct

Good luck with the split! 🚀
