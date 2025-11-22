# Splitting Repository into Two Separate Repos

This guide will help you split the current repository into two separate GitHub repositories.

## Repository Structure

### Repo 1: **QuaiMiner Core** (Main Toolkit)
Contains: Mining setup scripts, research documentation, landing page, simple dashboard

### Repo 2: **QuaiMiner Dashboard** (Node.js Application)
Contains: Full Node.js mining dashboard application

## Step-by-Step Instructions

### Step 1: Create New GitHub Repository for Dashboard

1. Go to GitHub and create a new repository named `quaiminer-dashboard` (or your preferred name)
2. **DO NOT** initialize it with a README, .gitignore, or license (we'll copy from existing)

### Step 2: Clone Current Repository (if not already cloned)

```bash
git clone https://github.com/thecrackofdan/AMD-Set-up.git quaiminer-core
cd quaiminer-core
```

### Step 3: Extract Dashboard to Separate Directory

```bash
# Create a temporary directory for the dashboard repo
mkdir ../quaiminer-dashboard-temp
cd ../quaiminer-dashboard-temp

# Initialize git
git init

# Copy miner-dashboard directory contents
cp -r ../quaiminer-core/miner-dashboard/* .

# Copy necessary root files
cp ../quaiminer-core/LICENSE .
cp ../quaiminer-core/.gitignore . 2>/dev/null || echo "# Node.js" > .gitignore

# Create a proper README for the dashboard repo
# (This will be done by the script)
```

### Step 4: Clean Up Main Repository

Remove `miner-dashboard/` directory from the main repo:

```bash
cd ../quaiminer-core
git rm -r miner-dashboard/
```

### Step 5: Update Main Repository Files

- Update `README.md` to remove references to miner-dashboard
- Update `index.html` to link to the separate dashboard repo
- Update any other files that reference miner-dashboard

### Step 6: Commit and Push Both Repositories

**Main Repository (QuaiMiner Core):**
```bash
cd quaiminer-core
git add .
git commit -m "Split miner-dashboard into separate repository"
git push origin main
```

**Dashboard Repository:**
```bash
cd ../quaiminer-dashboard-temp
git add .
git commit -m "Initial commit: QuaiMiner Dashboard"
git remote add origin https://github.com/thecrackofdan/quaiminer-dashboard.git
git push -u origin main
```

## Files to Keep in Each Repo

### QuaiMiner Core (Main Repo)
- ✅ All root-level setup scripts (`*.sh`)
- ✅ All root-level documentation (`*.md`)
- ✅ `index.html` (landing page)
- ✅ `dashboard/` (simple HTML dashboard)
- ✅ `.github/` (templates)
- ✅ `LICENSE`
- ✅ `CONTRIBUTING.md`
- ✅ `.gitignore`
- ❌ `miner-dashboard/` (move to separate repo)

### QuaiMiner Dashboard (New Repo)
- ✅ `miner-dashboard/` contents (all files)
- ✅ `LICENSE` (copy)
- ✅ `.gitignore` (copy or create new)
- ✅ `README.md` (update to be standalone)
- ❌ Everything else from main repo

## Automated Script

Run `./split_repos.sh` to automate this process.
