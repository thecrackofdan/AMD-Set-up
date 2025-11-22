# Environment Variables Setup

## Quick Setup

1. Create a `.env` file in the `miner-dashboard` directory
2. Copy the configuration below and update with your values

## Configuration Template

```env
# Server Configuration
PORT=3000
NODE_ENV=production

# Quai Node RPC Configuration
# Default: http://localhost:8545
# If your node is on a different machine, update accordingly
NODE_RPC_URL=http://localhost:8545

# Miner API Configuration (Optional)
# For Team Red Miner: http://localhost:4028/api
# For other miners, check their API documentation
MINER_API_URL=
```

## Examples

### Local Development
```env
PORT=3000
NODE_ENV=development
NODE_RPC_URL=http://localhost:8545
MINER_API_URL=
```

### Remote Node
```env
PORT=3000
NODE_ENV=production
NODE_RPC_URL=http://192.168.1.100:8545
MINER_API_URL=http://192.168.1.100:4028/api
```

### Windows PowerShell
```powershell
$env:PORT=3000
$env:NODE_ENV="development"
$env:NODE_RPC_URL="http://localhost:8545"
npm start
```

### Linux/macOS
```bash
export PORT=3000
export NODE_ENV=development
export NODE_RPC_URL=http://localhost:8545
npm start
```

## Notes

- The `.env` file is automatically ignored by git (see `.gitignore`)
- Never commit your `.env` file with sensitive information
- Default values are used if environment variables are not set
- Port 3000 is the default, but you can change it if needed

