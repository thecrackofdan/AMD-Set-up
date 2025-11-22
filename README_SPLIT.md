# 🔀 Repository Split - Complete Guide

This repository is ready to be split into two separate GitHub repositories.

## 📦 What Will Be Split

### Repository 1: **QuaiMiner Core** (Main Toolkit)
- Mining setup scripts (`*.sh`)
- Research documentation (`*.md`)
- Landing page (`index.html`)
- Simple dashboard (`dashboard/`)
- GitHub templates (`.github/`)

### Repository 2: **QuaiMiner Dashboard** (Node.js Application)
- Full Node.js mining dashboard (`miner-dashboard/`)
- Express server
- Frontend files
- Documentation

## ✅ Preparation Complete

All files have been updated:
- ✅ README files updated with correct links
- ✅ package.json updated with new repository URLs
- ✅ All documentation files updated
- ✅ Split script created and ready
- ✅ Instructions documented

## 🚀 Quick Start

### Option 1: Automated (Recommended)

```bash
# Run the split script
./split_repos.sh

# Follow the instructions it prints
```

### Option 2: Manual

See `SPLIT_REPOS.md` for detailed manual instructions.

## 📚 Documentation Files

- **`SPLIT_READY.md`** - Quick checklist and execution steps
- **`SPLIT_REPOS.md`** - Detailed manual instructions
- **`REPO_SPLIT_INSTRUCTIONS.md`** - Step-by-step guide
- **`SPLIT_SUMMARY.md`** - Summary of changes
- **`split_repos.sh`** - Automated split script

## ⚠️ Important Notes

1. **GitHub URLs**: Files reference `thecrackofdan` - update if your username differs
2. **Git History**: The split creates a new repo without history. Use `git filter-branch` if you need history preservation
3. **.gitignore**: After removing `miner-dashboard/`, update `.gitignore` to remove `!miner-dashboard/start.sh`

## 🎯 Next Steps

1. Review all files
2. Run `./split_repos.sh`
3. Create GitHub repository for dashboard
4. Push both repositories
5. Update `.gitignore` in main repo

**Ready to proceed!** 🚀
