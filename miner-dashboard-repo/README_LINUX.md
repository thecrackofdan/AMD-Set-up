# Quai Mining Dashboard - Linux Quick Start

## Prerequisites

- Node.js 14+ and npm
- Linux terminal

## Installation

1. **Install Node.js** (if not already installed):
   ```bash
   # Ubuntu/Debian
   sudo apt update
   sudo apt install nodejs npm
   
   # Or download from https://nodejs.org/
   ```

2. **Navigate to the dashboard directory**:
   ```bash
   cd miner-dashboard
   ```

3. **Make the startup script executable**:
   ```bash
   chmod +x start.sh
   ```

## Running the Dashboard

Simply run:
```bash
./start.sh
```

The dashboard will:
- Check for Node.js and npm
- Install dependencies automatically (first time only)
- Start the server on http://localhost:3000
- Open your browser automatically

## Manual Start

If you prefer to start manually:

```bash
# Install dependencies (first time only)
npm install

# Start server
node server.js
```

Then open http://localhost:3000 in your browser.

## Stopping the Server

Press `Ctrl+C` in the terminal where the server is running.

## Configuration

Edit `public/js/config.js` to configure:
- Node RPC URL (default: http://localhost:8545)
- Mining API settings
- GPU configuration
- Network settings

## Troubleshooting

**Port 3000 already in use:**
```bash
# Find and kill the process
lsof -ti:3000 | xargs kill -9
```

**Node.js not found:**
```bash
# Install Node.js
sudo apt install nodejs npm
```

**Permission denied:**
```bash
# Make script executable
chmod +x start.sh
```

## Server Endpoints

- Dashboard: http://localhost:3000
- Health check: http://localhost:3000/api/health
- RPC proxy: http://localhost:3000/api/rpc

