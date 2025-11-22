#!/bin/bash
# Quai Mining Dashboard - Linux Startup Script

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
RED='\033[0;31m'
NC='\033[0m'

echo ""
echo -e "${CYAN}========================================"
echo "  Quai Mining Dashboard"
echo "========================================${NC}"
echo ""

# Get script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo -e "${RED}[ERROR]${NC} Node.js not found!"
    echo "Install Node.js: sudo apt install nodejs npm"
    echo "Or download from: https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node --version)
echo -e "${GREEN}[OK]${NC} Node.js: $NODE_VERSION"

# Check for npm
if ! command -v npm &> /dev/null; then
    echo -e "${RED}[ERROR]${NC} npm not found!"
    exit 1
fi

echo -e "${GREEN}[OK]${NC} npm found"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo ""
    echo -e "${YELLOW}Installing dependencies...${NC}"
    npm install
fi

# Check if port 3000 is available
if command -v lsof &> /dev/null; then
    if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null 2>&1 ; then
        echo -e "${YELLOW}[WARNING]${NC} Port 3000 is already in use"
        echo "Killing existing process..."
        lsof -ti:3000 | xargs kill -9 2>/dev/null || true
        sleep 1
    fi
fi

echo ""
echo -e "${CYAN}Starting server on http://localhost:3000${NC}"
echo -e "${YELLOW}Press Ctrl+C to stop${NC}"
echo ""

# Open browser if xdg-open is available
if command -v xdg-open &> /dev/null; then
    (sleep 2 && xdg-open http://localhost:3000 2>/dev/null) &
fi

# Start server
node server.js
