# Quai Mining Dashboard API Documentation

## Overview

The Quai Mining Dashboard provides a RESTful API for accessing mining statistics and node information. This document describes all available endpoints, request/response formats, and usage examples.

## Base URL

- **Development**: `http://localhost:3000`
- **Production**: Configure via `NODE_RPC_URL` and `MINER_API_URL` environment variables

## Endpoints

### Health Check

**GET** `/api/health`

Check if the server is running and get basic status information.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "uptime": 3600.5
}
```

---

### Mining Statistics

**GET** `/api/stats`

Get current mining statistics including hash rate, shares, earnings, and GPU information.

**Response:**
```json
{
  "hashRate": 10.5,
  "shares": {
    "accepted": 123,
    "rejected": 5
  },
  "earnings": 0.001234,
  "powerUsage": 150,
  "isMining": true,
  "gpus": [
    {
      "id": 0,
      "name": "AMD RX 590",
      "hashRate": 10.5,
      "temperature": 72,
      "fanSpeed": 65,
      "powerUsage": 150,
      "memoryTemp": 78
    }
  ],
  "network": {
    "nodeSynced": true,
    "currentChain": "Prime",
    "blockHeight": 1234567,
    "difficulty": 1234567890
  }
}
```

**Notes:**
- If `MINER_API_URL` environment variable is set, the server will attempt to fetch real data from your miner's API
- Falls back to mock data if miner API is unavailable
- For Team Red Miner, set `MINER_API_URL=http://localhost:4028/api`

---

### Node RPC Proxy

**POST** `/api/node/rpc`

Proxy RPC calls to your Quai node. This allows the dashboard to check node status, sync state, and other blockchain data.

**Request Body:**
```json
{
  "method": "eth_blockNumber",
  "params": []
}
```

**Response:**
```json
{
  "jsonrpc": "2.0",
  "result": "0x12d687",
  "id": 1
}
```

**Common Methods:**
- `eth_blockNumber` - Get current block number
- `eth_syncing` - Check if node is syncing (returns `false` if synced)
- `eth_getBalance` - Get account balance
- `eth_getTransactionCount` - Get transaction count for address
- `net_peerCount` - Get number of connected peers

**Error Response:**
```json
{
  "error": {
    "code": -32000,
    "message": "Node RPC unavailable"
  }
}
```

**Configuration:**
- Set `NODE_RPC_URL` environment variable (default: `http://localhost:8545`)
- In development mode, returns mock responses if node is unavailable

---

### Data Export

**GET** `/api/export?format=json`

Export mining data in various formats.

**Query Parameters:**
- `format` (optional): Export format - `json` or `csv` (default: `json`)

**Response:**
```json
{
  "message": "Export functionality to be implemented",
  "data": { ... }
}
```

**Note:** Currently returns a placeholder. Full export functionality is available via the dashboard UI.

---

## Error Handling

All endpoints follow standard HTTP status codes:

- `200 OK` - Request successful
- `400 Bad Request` - Invalid request parameters
- `500 Internal Server Error` - Server error
- `503 Service Unavailable` - Node RPC or miner API unavailable

Error responses include:
```json
{
  "error": "Error type",
  "message": "Detailed error message"
}
```

---

## Environment Variables

Configure the server using environment variables:

```bash
# Node RPC URL (required for node operations)
NODE_RPC_URL=http://localhost:8545

# Miner API URL (optional, for real miner data)
MINER_API_URL=http://localhost:4028/api

# Server port (default: 3000)
PORT=3000

# Node environment
NODE_ENV=development  # or 'production'
```

---

## CORS Configuration

The server includes CORS middleware to allow cross-origin requests. In production, you may want to restrict this to specific origins:

```javascript
app.use(cors({
  origin: 'https://yourdomain.com',
  credentials: true
}));
```

---

## Rate Limiting

Currently, there is no rate limiting implemented. For production use, consider adding rate limiting middleware:

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

---

## Security Considerations

1. **RPC Endpoint Security**: The RPC proxy forwards requests directly to your node. Ensure your node RPC is properly secured:
   - Use `--http.addr` to bind to specific IP (not 0.0.0.0 in production)
   - Consider using authentication if your node supports it
   - Use firewall rules to restrict access

2. **Environment Variables**: Never commit `.env` files with sensitive data to version control.

3. **HTTPS**: In production, use HTTPS to encrypt API communications.

---

## Integration Examples

### JavaScript/Fetch

```javascript
// Get mining stats
const response = await fetch('http://localhost:3000/api/stats');
const data = await response.json();
console.log('Hash Rate:', data.hashRate);

// Call node RPC
const rpcResponse = await fetch('http://localhost:3000/api/node/rpc', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    method: 'eth_blockNumber',
    params: []
  })
});
const rpcData = await rpcResponse.json();
console.log('Block Number:', parseInt(rpcData.result, 16));
```

### cURL

```bash
# Health check
curl http://localhost:3000/api/health

# Get mining stats
curl http://localhost:3000/api/stats

# Node RPC call
curl -X POST http://localhost:3000/api/node/rpc \
  -H "Content-Type: application/json" \
  -d '{"method":"eth_blockNumber","params":[]}'
```

---

## Troubleshooting

### Node RPC Not Responding

1. Check if your Quai node is running
2. Verify RPC is enabled: `--http` flag should be set
3. Check RPC port (default: 8545)
4. Verify firewall settings
5. Test direct connection: `curl -X POST http://localhost:8545 -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'`

### Miner API Not Responding

1. Verify miner is running with API enabled
2. Check API port (Team Red Miner default: 4028)
3. Verify `MINER_API_URL` environment variable
4. Check miner logs for API errors

### CORS Errors

If you see CORS errors in the browser:
1. Ensure you're accessing the dashboard through the Express server (not file://)
2. Check CORS configuration in `server.js`
3. Verify request headers include `Content-Type: application/json`

---

## Future Enhancements

Planned API improvements:
- WebSocket support for real-time updates
- Authentication/authorization
- Rate limiting
- Request logging
- Metrics endpoint for Prometheus
- Historical data queries
- Multi-miner support

---

## Support

For issues or questions:
- Check the main [README.md](./README.md)
- Review [docs/TROUBLESHOOTING.md](./docs/TROUBLESHOOTING.md)
- Open an issue on GitHub

