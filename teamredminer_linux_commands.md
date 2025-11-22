# Team Red Miner - Linux Commands
## Quai Network Solo Mining with AMD RX 590

## 🚀 Quick Start

### Basic Solo Mining (Stratum Proxy - Recommended)

```bash
./teamredminer -a progpow -o stratum+tcp://localhost:3333 -u YOUR_WALLET_ADDRESS
```

### Complete Command with Optimization (Stratum Proxy)

```bash
./teamredminer \
  -a progpow \
  -o stratum+tcp://localhost:3333 \
  -u YOUR_WALLET_ADDRESS \
  --opencl_platform 0 \
  --opencl_devices 0 \
  --intensity 20 \
  --log_file teamredminer.log \
  --api_listen 0.0.0.0:4028
```

### Direct RPC (Alternative - No Proxy)

```bash
./teamredminer -a progpow -o http://localhost:8545 -u YOUR_WALLET_ADDRESS --no_stratum
```

---

## 📥 Installation Commands

### Download and Extract

```bash
# Create directory
mkdir -p ~/mining/teamredminer
cd ~/mining/teamredminer

# Download (check GitHub for latest version)
wget https://github.com/todxx/teamredminer/releases/download/v0.11.0/teamredminer-v0.11.0-linux.tgz

# Extract
tar -xzf teamredminer-v0.11.0-linux.tgz
cd teamredminer-v0.11.0-linux

# Make executable
chmod +x teamredminer
```

### Build from Source

```bash
git clone https://github.com/todxx/teamredminer.git
cd teamredminer
make
```

---

## 🎯 Common Commands

### Single RX 590 GPU (Stratum Proxy)

```bash
./teamredminer \
  -a progpow \
  -o stratum+tcp://localhost:3333 \
  -u 0xYourWalletAddress \
  --opencl_platform 0 \
  --opencl_devices 0 \
  --intensity 20
```

### Multiple GPUs (Stratum Proxy)

```bash
./teamredminer \
  -a progpow \
  -o stratum+tcp://localhost:3333 \
  -u 0xYourWalletAddress \
  --opencl_platform 0 \
  --opencl_devices 0,1,2,3 \
  --intensity 20
```

### Remote Proxy

```bash
./teamredminer \
  -a progpow \
  -o stratum+tcp://192.168.1.100:3333 \
  -u 0xYourWalletAddress
```

### Custom Proxy Port

```bash
./teamredminer \
  -a progpow \
  -o stratum+tcp://localhost:YOUR_PROXY_PORT \
  -u 0xYourWalletAddress
```

### Using Config File (Stratum Proxy)

```bash
# Create quai_mining.conf
cat > quai_mining.conf << 'EOF'
-a progpow
-o stratum+tcp://localhost:3333
-u YOUR_WALLET_ADDRESS
--opencl_platform 0
--opencl_devices 0
--intensity 20
--log_file teamredminer.log
--api_listen 0.0.0.0:4028
EOF

# Run with config
./teamredminer -c quai_mining.conf
```

---

## 📊 Monitoring Commands

### API Status

```bash
# Summary
curl http://localhost:4028/summary

# Full status
curl http://localhost:4028/api.json

# Pools/Node info
curl http://localhost:4028/pools

# GPU threads
curl http://localhost:4028/threads
```

### View Logs

```bash
# Real-time
tail -f teamredminer.log

# Last 50 lines
tail -n 50 teamredminer.log

# Search errors
grep -i error teamredminer.log
```

### Check GPU

```bash
# List OpenCL devices
clinfo

# List available GPUs (miner)
./teamredminer --list-devices

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
./teamredminer ... --intensity 18

# Default
./teamredminer ... --intensity 20

# Higher (more hashrate)
./teamredminer ... --intensity 22
```

---

## 🔄 Background Mining

### Using nohup

```bash
# Start in background
nohup ./teamredminer -a progpow -o stratum+tcp://localhost:3333 -u YOUR_WALLET_ADDRESS > miner.log 2>&1 &

# Check if running
ps aux | grep teamredminer

# Stop
pkill teamredminer
```

### Using screen (Recommended)

```bash
# Start screen session
screen -S mining

# Run miner
./teamredminer -a progpow -o stratum+tcp://localhost:3333 -u YOUR_WALLET_ADDRESS

# Detach: Ctrl+A, then D
# Reattach: screen -r mining
# List sessions: screen -ls
```

### Using tmux

```bash
# Start tmux session
tmux new -s mining

# Run miner
./teamredminer -a progpow -o stratum+tcp://localhost:3333 -u YOUR_WALLET_ADDRESS

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

./teamredminer \
  -a progpow \
  -o $PROXY_URL \
  -u $WALLET_ADDRESS \
  --opencl_platform 0 \
  --opencl_devices 0 \
  --intensity $INTENSITY \
  --log_file teamredminer.log \
  --api_listen 0.0.0.0:4028
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
| `-a progpow` | Algorithm | `-a progpow` |
| `-o URL` | Stratum proxy URL | `-o stratum+tcp://localhost:3333` |
| `-u ADDRESS` | Wallet address | `-u 0xYourAddress` |
| `--no_stratum` | Direct RPC (no proxy) | `--no_stratum` |
| `--opencl_platform N` | OpenCL platform | `--opencl_platform 0` |
| `--opencl_devices N` | GPU device(s) | `--opencl_devices 0` |
| `--intensity N` | Intensity (18-22) | `--intensity 20` |
| `--log_file FILE` | Log file | `--log_file miner.log` |
| `--api_listen IP:PORT` | API listener | `--api_listen 0.0.0.0:4028` |
| `-c FILE` | Config file | `-c config.conf` |
| `--list-devices` | List GPUs | `--list-devices` |

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

# 4. List GPUs
./teamredminer --list-devices
```

---

## 🔄 Complete Workflow

```bash
# 1. Download
cd ~/mining
wget https://github.com/todxx/teamredminer/releases/download/v0.11.0/teamredminer-v0.11.0-linux.tgz
tar -xzf teamredminer-v0.11.0-linux.tgz
cd teamredminer-v0.11.0-linux
chmod +x teamredminer

# 2. Verify setup
./teamredminer --list-devices
clinfo

# 3. Verify proxy is running (check your proxy port)
netstat -tuln | grep 3333

# 4. Start mining
screen -S mining
./teamredminer -a progpow -o stratum+tcp://localhost:3333 -u YOUR_WALLET_ADDRESS --intensity 20

# 5. Monitor (in another terminal)
curl http://localhost:4028/summary
tail -f teamredminer.log
```

---

*Linux commands for Team Red Miner v0.11.0*

