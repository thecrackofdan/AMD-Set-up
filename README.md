# ⚡ QuaiMiner Core

**Complete toolkit for Quai Network mining with AMD GPUs**

QuaiMiner Core is a comprehensive suite of tools, scripts, and resources for successful Quai Network mining. It includes a real-time mining dashboard, automated AMD GPU setup scripts, mining software research, and diagnostic tools—everything you need to mine Quai efficiently.

🌐 **Website:** [View Landing Page](index.html) | 🔗 **GitHub:** https://github.com/thecrackofdan/AMD-Set-up

## 🚀 Quick Start

1. **View the Website:** Open `index.html` in your browser for the full QuaiMiner Core experience
2. **Launch Dashboard:** Navigate to `miner-dashboard/` and run `npm start` for real-time mining monitoring
3. **Setup AMD GPU:** Run `./quick_amd_setup.sh` to automatically configure your AMD GPU for mining
4. **Compare Miners:** Run `./mining_software_comparison.sh` to get personalized miner recommendations

## 📋 Contents

### 🌐 Website & Dashboard
- **`index.html`** - Landing page and main website for QuaiMiner Core
- **`miner-dashboard/`** - Real-time mining dashboard with Node.js backend

### 🔬 Core Research Documents
- **`quai_mining_software_research.md`** - Comprehensive research and comparison of all Quai mining software options
- **`mining_software_comparison.sh`** - Interactive tool to get personalized miner recommendations

### ⚙️ Prerequisites (AMD OpenCL Setup)
- **`quick_amd_setup.sh`** - Automated installation script for AMDGPU Pro drivers and OpenCL setup
- **`amd_opencl_setup.sh`** - Diagnostic script for system status checks
- **`ubuntu_20_04_amd_rx590_setup.md`** - Step-by-step AMD OpenCL setup guide
- **`amd_opencl_troubleshooting.md`** - Troubleshooting guide for OpenCL issues

## 🔬 Mining Software Research

### Quick Start

1. **Read the Research**: See [Quai Mining Software Research](quai_mining_software_research.md) for detailed comparison
2. **Get Your Recommendation**: Run `./mining_software_comparison.sh` for personalized suggestion

### Key Findings

**Best Options for Solo Mining:**

1. **Quai GPU Miner (Built from Source)**
   - ✅ 0% fees (100% of rewards)
   - ✅ Quai-specific optimizations
   - ✅ Merged mining support
   - ⚠️ Requires building from source

2. **Team Red Miner**
   - ✅ Easy setup (pre-built binaries)
   - ✅ Excellent AMD optimization
   - ⚠️ 0.5-1% developer fee

3. **SRBMiner-Multi**
   - ✅ Multi-algorithm support
   - ✅ Good AMD performance
   - ⚠️ 0.5-1% developer fee

### Performance Comparison (AMD RX 590)

| Miner | Hashrate | Fees | Setup Difficulty |
|-------|----------|------|-----------------|
| Quai GPU Miner | 10-12 MH/s | 0% | Medium |
| Team Red Miner | 10-12 MH/s | 0.5-1% | Easy |
| SRBMiner-Multi | 9-11 MH/s | 0.5-1% | Easy |

## 🚀 Prerequisites Setup

Before choosing and using mining software, you need AMD OpenCL support:

### Automated Setup

```bash
chmod +x quick_amd_setup.sh
./quick_amd_setup.sh
```

This will:
1. Install AMDGPU Pro drivers
2. Configure OpenCL support
3. Set up environment variables
4. Configure user permissions

**Note:** Reboot required after installation.

### Manual Setup

For detailed manual installation or troubleshooting:
- [Ubuntu 20.04 Setup Guide](ubuntu_20_04_amd_rx590_setup.md)
- [Troubleshooting Guide](amd_opencl_troubleshooting.md)

## ✅ Verification

After AMD setup, verify OpenCL is working:

```bash
clinfo
```

You should see your RX 590 detected with OpenCL support.

## ⚙️ Environment Variables

For Quai mining, these environment variables are automatically configured:

```bash
export ROC_ENABLE_PRE_VEGA=1
export HSA_OVERRIDE_GFX_VERSION=8.0.0
export GPU_FORCE_64BIT_PTR=1
export GPU_MAX_HEAP_SIZE=100
export GPU_USE_SYNC_OBJECTS=1
```

## 📝 Requirements

- Ubuntu 20.04 (Focal Fossa)
- AMD RX 590 GPU
- Internet connection
- sudo/root access

## 🔧 Troubleshooting

If you encounter issues:

1. Check [Troubleshooting Guide](amd_opencl_troubleshooting.md)
2. Run diagnostic: `./amd_opencl_setup.sh`
3. Verify GPU: `lspci | grep -i amd`
4. Check drivers: `lsmod | grep amdgpu`

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

- 🐛 [Report Bugs](https://github.com/thecrackofdan/AMD-Set-up/issues/new?template=bug_report.md)
- 💡 [Suggest Features](https://github.com/thecrackofdan/AMD-Set-up/issues/new?template=feature_request.md)
- 📝 [View Issues](https://github.com/thecrackofdan/AMD-Set-up/issues)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

These scripts modify system drivers and configurations. Use at your own risk. Always backup your system before running installation scripts.

## 🙏 Acknowledgments

- Quai Network community
- AMD GPU mining community
- All contributors to this project
