# Quai GPU Miner - Command Line Instructions for RX 590

## Installation Commands

### Option 1: Build from Source (Ubuntu/Linux)

```bash
# Clone the repository
git clone https://github.com/dominant-strategies/quai-gpu-miner.git
cd quai-gpu-miner

# Build the miner
make

# Navigate to build directory
cd build
```

### Option 2: HiveOS Installation

```bash
sudo selfupgrade
curl -fsSL https://raw.githubusercontent.com/dominant-strategies/quai-gpu-miner/main/miner_deploy_script.sh | bash
cd /home/user/quai-gpu-miner/build
```

## Basic Mining Command

### Simple Command (Recommended for RX 590)

```bash
./ethcoreminer -G -P stratum://YOUR_PROXY_IP:STRATUM_PORT
```

**Parameters:**
- `-G` = Use OpenCL (required for AMD GPUs like RX 590)
- `-P` = Stratum proxy connection URL
- Replace `YOUR_PROXY_IP` with your Stratum proxy IP (use `localhost` or `127.0.0.1` if on same machine)
- Replace `STRATUM_PORT` with your proxy port (default is usually `3333`)

### Example (Local Proxy)

```bash
./ethcoreminer -G -P stratum://localhost:3333
```

### Example (Remote Proxy)

```bash
./ethcoreminer -G -P stratum://192.168.1.100:3333
```

## Advanced Command with Options

```bash
./ethcoreminer \
  -G \
  -P stratum://YOUR_PROXY_IP:STRATUM_PORT \
  --opencl-platform 0 \
  --opencl-devices 0 \
  --work-size 256 \
  --global-work-size 8192
```

**Additional Parameters:**
- `--opencl-platform 0` = Select first OpenCL platform
- `--opencl-devices 0` = Use first GPU device
- `--work-size 256` = Work group size (adjust for optimization)
- `--global-work-size 8192` = Global work size (adjust for optimization)

## RX 590 Optimization Settings

Before running the miner, optimize your GPU with these settings:

```bash
# Using AMD GPU tools (if available)
# Core Clock: 1215 MHz
# Memory Clock: 1900 MHz  
# Core Voltage: 875 mV
# Power Limit: Adjust based on your PSU
```

## Complete Setup Workflow

```bash
# 1. Ensure your Quai node is synced
# 2. Start your Stratum proxy
# 3. Navigate to miner directory
cd /path/to/quai-gpu-miner/build

# 4. Start mining
./ethcoreminer -G -P stratum://localhost:3333
```

## Important Notes

⚠️ **CRITICAL:** Do NOT start mining until your Quai node is fully synced. Mining on an unsynced node will result in invalid blocks.

✅ **Check before mining:**
- Node is fully synced
- Stratum proxy is running
- GPU drivers are installed
- OpenCL is working (test with `clinfo` if available)

## Troubleshooting Commands

```bash
# Check if OpenCL is available
clinfo

# Check GPU status
nvidia-smi  # For NVIDIA (if mixed setup)
# or use AMD tools for RX 590

# Monitor miner output
./ethcoreminer -G -P stratum://localhost:3333 2>&1 | tee mining.log
```

## Resources

- GitHub: https://github.com/dominant-strategies/quai-gpu-miner
- Documentation: https://docs.v2.qu.ai/docs/participate/mining/gpu-miner/gpu-miner-faq/
- Mining Guide: https://qu.ai/blog/mining-quai-network-iron-age





