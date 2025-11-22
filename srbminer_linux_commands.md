# SRBMiner-Multi - Linux Commands
## Quai Network Solo Mining with AMD RX 590

## 🚀 Quick Start

### Basic Solo Mining (Stratum Proxy - Recommended)

```bash
./SRBMiner-MULTI --algorithm progpow --pool stratum+tcp://localhost:3333 --wallet YOUR_WALLET_ADDRESS
```

### Complete Command with Optimization (Stratum Proxy)

```bash
./SRBMiner-MULTI \
  --algorithm progpow \
  --pool stratum+tcp://localhost:3333 \
  --wallet YOUR_WALLET_ADDRESS \
  --disable-gpu-device-checking \
  --gpu-intensity 20 \
  --log-file srbminer.log \
  --api-port 4028
```

### Direct RPC (Alternative - No Proxy)

```bash
./SRBMiner-MULTI --algorithm progpow --pool http://localhost:8545 --wallet YOUR_WALLET_ADDRESS --disable-gpu-device-checking
```

---

## 📥 Installation Commands

### Download and Extract

```bash
# Create directory
mkdir -p ~/mining/srbminer
cd ~/mining/srbminer

# Download (check GitHub for latest version)
wget https://github.com/doktor83/SRBMiner-Multi/releases/download/2.4.9/SRBMiner-Multi-2.4.9-Linux.tar.xz

# Extract
tar -xf SRBMiner-Multi-2.4.9-Linux.tar.xz
cd SRBMiner-Multi-2.4.9

# Make executable
chmod +x SRBMiner-MULTI
```

### Build from Source

```bash
git clone https://github.com/doktor83/SRBMiner-Multi.git
cd SRBMiner-Multi
make
```

---

## 🎯 Common Commands

### Single RX 590 GPU (Stratum Proxy)

```bash
./SRBMiner-MULTI \
  --algorithm progpow \
  --pool stratum+tcp://localhost:3333 \
  --wallet 0xYourWalletAddress \
  --disable-gpu-device-checking \
  --gpu-intensity 20
```

### Multiple GPUs (Stratum Proxy)

```bash
./SRBMiner-MULTI \
  --algorithm progpow \
  --pool stratum+tcp://localhost:3333 \
  --wallet 0xYourWalletAddress \
  --disable-gpu-device-checking \
  --gpu-intensity 20 \
  --gpu-devices 0,1,2,3
```

### Remote Proxy

```bash
./SRBMiner-MULTI \
  --algorithm progpow \
  --pool stratum+tcp://192.168.1.100:3333 \
  --wallet 0xYourWalletAddress \
  --disable-gpu-device-checking
```

### Custom Proxy Port

```bash
./SRBMiner-MULTI \
  --algorithm progpow \
  --pool stratum+tcp://localhost:YOUR_PROXY_PORT \
  --wallet 0xYourWalletAddress \
  --disable-gpu-device-checking
```

### Using Config File (Stratum Proxy)

```bash
# Create srbminer.conf
cat > srbminer.conf << 'EOF'
{
  "pools": [
    {
      "url": "stratum+tcp://localhost:3333",
      "user": "YOUR_WALLET_ADDRESS",
      "pass": "x"
    }
  ],
  "algo": "progpow",
  "intensity": 20,
  "log-file": "srbminer.log",
  "api-port": 4028,
  "disable-gpu-device-checking": true
}
EOF

# Run with config
./SRBMiner-MULTI --config-file srbminer.conf
```

---

## 📊 Monitoring Commands

### API Status

```bash
# Summary
curl http://localhost:4028/api

# Statistics
curl http://localhost:4028/statistics

# Pools
curl http://localhost:4028/pools
```

### View Logs

```bash
# Real-time
tail -f srbminer.log

# Last 50 lines
tail -n 50 srbminer.log

# Search errors
grep -i error srbminer.log
```

### Check GPU

```bash
# List OpenCL devices
clinfo

# Check GPU detection
lspci | grep -i amd

# Check drivers
lsmod | grep amdgpu
```

---

## 🔧 Testing Commands

### Test Node Connection

```bash
curl -X POST http://localhost:8545 \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'
```

### Test Different Intensities

```bash
# Lower (more stable)
./SRBMiner-MULTI ... --gpu-intensity 18

# Default
./SRBMiner-MULTI ... --gpu-intensity 20

# Higher (more hashrate)
./SRBMiner-MULTI ... --gpu-intensity 22
```

### List Available Algorithms

```bash
./SRBMiner-MULTI --help | grep -i algorithm
```

---

## 🔄 Background Mining

### Using nohup

```bash
# Start in background
nohup ./SRBMiner-MULTI --algorithm progpow --pool stratum+tcp://localhost:3333 --wallet YOUR_WALLET_ADDRESS --disable-gpu-device-checking > miner.log 2>&1 &

# Check if running
ps aux | grep SRBMiner

# Stop
pkill SRBMiner
```

### Using screen (Recommended)

```bash
# Start screen session
screen -S mining

# Run miner
./SRBMiner-MULTI --algorithm progpow --pool stratum+tcp://localhost:3333 --wallet YOUR_WALLET_ADDRESS --disable-gpu-device-checking

# Detach: Ctrl+A, then D
# Reattach: screen -r mining
# List sessions: screen -ls
```

### Using tmux

```bash
# Start tmux session
tmux new -s mining

# Run miner
./SRBMiner-MULTI --algorithm progpow --pool stratum+tcp://localhost:3333 --wallet YOUR_WALLET_ADDRESS --disable-gpu-device-checking

# Detach: Ctrl+B, then D
# Reattach: tmux attach -t mining
```

---

## ⚡ Quick Start Script

```bash
#!/bin/bash
# Save as start_mining.sh

WALLET_ADDRESS="YOUR_WALLET_ADDRESS"
PROXY_URL="stratum+tcp://localhost:3333"
INTENSITY=20

./SRBMiner-MULTI \
  --algorithm progpow \
  --pool $PROXY_URL \
  --wallet $WALLET_ADDRESS \
  --disable-gpu-device-checking \
  --gpu-intensity $INTENSITY \
  --log-file srbminer.log \
  --api-port 4028
```

Make executable and run:
```bash
chmod +x start_mining.sh
./start_mining.sh
```

---

## 📋 Parameter Quick Reference

| Parameter | Description | Example |
|-----------|-------------|---------|
| `--algorithm progpow` | Algorithm | `--algorithm progpow` |
| `--pool URL` | Stratum proxy URL | `--pool stratum+tcp://localhost:3333` |
| `--wallet ADDRESS` | Wallet address | `--wallet 0xYourAddress` |
| `--disable-gpu-device-checking` | Skip GPU check | `--disable-gpu-device-checking` |
| `--gpu-intensity N` | Intensity (18-22) | `--gpu-intensity 20` |
| `--gpu-devices N` | GPU device(s) | `--gpu-devices 0` |
| `--log-file FILE` | Log file | `--log-file miner.log` |
| `--api-port PORT` | API port | `--api-port 4028` |
| `--config-file FILE` | Config file | `--config-file config.conf` |
| `--help` | Show help | `--help` |

---

## ✅ Pre-Mining Checklist

```bash
# 1. Check node is synced
curl -X POST http://localhost:8545 \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}'

# 2. Check proxy is running (adjust port if different)
netstat -tuln | grep 3333
# or
ss -tuln | grep 3333

# 3. Check OpenCL
clinfo | grep "Device Name"
```

---

## 🔄 Complete Workflow

```bash
# 1. Download
cd ~/mining
wget https://github.com/doktor83/SRBMiner-Multi/releases/download/2.4.9/SRBMiner-Multi-2.4.9-Linux.tar.xz
tar -xf SRBMiner-Multi-2.4.9-Linux.tar.xz
cd SRBMiner-Multi-2.4.9
chmod +x SRBMiner-MULTI

# 2. Verify setup
clinfo

# 3. Verify proxy is running (check your proxy port)
netstat -tuln | grep 3333

# 4. Start mining
screen -S mining
./SRBMiner-MULTI --algorithm progpow --pool stratum+tcp://localhost:3333 --wallet YOUR_WALLET_ADDRESS --disable-gpu-device-checking --gpu-intensity 20

# 5. Monitor (in another terminal)
curl http://localhost:4028/api
tail -f srbminer.log
```

---

## 🔍 Advanced Options

### Custom Work Size

```bash
./SRBMiner-MULTI \
  --algorithm progpow \
  --pool stratum+tcp://localhost:3333 \
  --wallet YOUR_WALLET_ADDRESS \
  --disable-gpu-device-checking \
  --gpu-intensity 20 \
  --gpu-worksize 256
```

### Multiple Pools (Failover)

```bash
./SRBMiner-MULTI \
  --algorithm progpow \
  --pool stratum+tcp://localhost:3333 \
  --pool stratum+tcp://192.168.1.100:3333 \
  --wallet YOUR_WALLET_ADDRESS \
  --disable-gpu-device-checking
```

### Temperature Control

```bash
./SRBMiner-MULTI \
  --algorithm progpow \
  --pool stratum+tcp://localhost:3333 \
  --wallet YOUR_WALLET_ADDRESS \
  --disable-gpu-device-checking \
  --gpu-temperature-limit 75
```

---

## 📝 JSON Config Example

```json
{
  "pools": [
    {
      "url": "stratum+tcp://localhost:3333",
      "user": "0xYourWalletAddress",
      "pass": "x"
    }
  ],
  "algo": "progpow",
  "intensity": 20,
  "log-file": "srbminer.log",
  "api-port": 4028,
  "disable-gpu-device-checking": true,
  "gpu-devices": [0],
  "gpu-temperature-limit": 75
}
```

Save as `srbminer.conf` and run:
```bash
./SRBMiner-MULTI --config-file srbminer.conf
```

---

*Linux commands for SRBMiner-Multi v2.4.9*

