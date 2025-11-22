# ✅ Repository Split - Ready to Execute

All files have been updated and prepared for splitting into two separate repositories.

## 📋 Pre-Split Checklist

### ✅ Main Repository (QuaiMiner Core)
- [x] `README.md` - Updated with dashboard repo link
- [x] `index.html` - Updated links to dashboard repo
- [x] `CONTRIBUTING.md` - Updated project structure
- [x] All references to miner-dashboard updated

### ✅ Dashboard Repository (miner-dashboard/)
- [x] `README.md` - Standalone with clone instructions
- [x] `package.json` - Updated name and repository URLs
- [x] `README_LINUX.md` - Updated clone instructions
- [x] `INSTALL.md` - Updated clone instructions
- [x] `ENV_SETUP.md` - Updated path references
- [x] `CONTRIBUTING.md` - Updated clone instructions
- [x] `.gitignore` - Already properly configured

### ✅ Split Tools
- [x] `split_repos.sh` - Automated split script (executable)
- [x] `SPLIT_REPOS.md` - Detailed manual instructions
- [x] `REPO_SPLIT_INSTRUCTIONS.md` - Quick start guide

## 🚀 Execute the Split

### Step 1: Run the Split Script

```bash
./split_repos.sh
```

This will:
- Create a temporary directory `../quaiminer-dashboard-temp`
- Copy all miner-dashboard files
- Copy LICENSE
- Initialize git repository
- Stage all files (ready to commit)

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `quaiminer-dashboard`
3. Description: "Production-ready real-time dashboard for monitoring Quai Network mining operations"
4. **DO NOT** initialize with README, .gitignore, or license
5. Click "Create repository"

### Step 3: Push Dashboard Repository

```bash
cd ../quaiminer-dashboard-temp
git commit -m "Initial commit: QuaiMiner Dashboard"
git remote add origin https://github.com/thecrackofdan/quaiminer-dashboard.git
git push -u origin main
```

**Note:** Update the URL if your GitHub username differs from `thecrackofdan`

### Step 4: Clean Up Main Repository

```bash
cd /workspace  # or your main repo directory
git rm -r miner-dashboard/
```

Edit `.gitignore` and remove line 47:
```
!miner-dashboard/start.sh
```

Then commit:
```bash
git add .gitignore
git commit -m "Split miner-dashboard into separate repository"
git push origin main
```

## 📁 Final Structure

### QuaiMiner Core Repository
```
.
├── dashboard/              # Simple HTML dashboard
├── index.html            # Landing page
├── *.sh                  # Setup scripts
├── *.md                  # Documentation
├── .github/              # GitHub templates
├── LICENSE
└── CONTRIBUTING.md
```

### QuaiMiner Dashboard Repository
```
.
├── public/               # Frontend files
├── docs/                 # Documentation
├── server.js            # Express server
├── package.json         # Dependencies
├── start.sh            # Startup script
├── README.md           # Standalone README
├── LICENSE             # MIT License
└── .gitignore         # Node.js ignores
```

## ✨ Status

**Everything is ready!** Run `./split_repos.sh` to begin the split process.

## 🔗 Repository URLs

- Main Repo: `https://github.com/thecrackofdan/AMD-Set-up`
- Dashboard Repo: `https://github.com/thecrackofdan/quaiminer-dashboard`

**Remember:** Update URLs in files if your GitHub username differs!
