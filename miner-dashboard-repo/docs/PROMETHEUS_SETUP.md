# Prometheus Integration Setup

## Overview

The dashboard now integrates with Prometheus to fetch real-time metrics from your Quai node. Prometheus is the data source that Grafana uses, so you can get the same metrics directly in the dashboard.

## Configuration

### Current Settings (`config.js`)

```javascript
prometheus: {
    enabled: true, // Prometheus is running for Grafana
    url: 'http://localhost:9090', // Prometheus default port
    queryEndpoint: '/api/v1/query',
    queryRangeEndpoint: '/api/v1/query_range',
    metrics: {
        blockHeight: 'quai_block_height',
        difficulty: 'quai_difficulty',
        blockTime: 'quai_block_time',
        networkHashRate: 'quai_network_hashrate',
        peerCount: 'quai_peer_count',
        syncStatus: 'quai_sync_status'
    },
    updateInterval: 10000 // 10 seconds
}
```

## Important: Metric Names

⚠️ **You need to adjust the metric names** in `config.js` to match your actual Prometheus metric names.

### Finding Your Metric Names

1. **Access Prometheus UI:**
   - Open: `http://localhost:9090`
   - Go to "Graph" tab

2. **Query Available Metrics:**
   - Type: `{__name__=~".*quai.*"}` to see all Quai-related metrics
   - Or: `{__name__=~".*"}` to see all metrics

3. **Common Quai Metric Patterns:**
   - Block height: `quai_block_height`, `quai_blocknumber`, `block_height`
   - Difficulty: `quai_difficulty`, `difficulty`
   - Block time: `quai_block_time`, `block_time`
   - Hash rate: `quai_hashrate`, `network_hashrate`
   - Peers: `quai_peers`, `peer_count`
   - Sync: `quai_syncing`, `sync_status`

4. **Update Config:**
   - Edit `config.js`
   - Update the `metrics` object with your actual metric names

## Example Prometheus Queries

You can test queries directly in Prometheus UI:

```
# Block height
quai_block_height

# Difficulty
quai_difficulty

# Block time (if available)
rate(quai_block_height[5m])

# Network hash rate
quai_network_hashrate

# Peer count
quai_peer_count

# Sync status (1 = synced, 0 = syncing)
quai_sync_status
```

## How It Works

1. **Dashboard queries Prometheus API:**
   - Uses `/api/v1/query` endpoint
   - Queries each metric individually
   - Updates every 10 seconds (configurable)

2. **Metrics are integrated:**
   - Prometheus data updates `miningData.network`
   - Also updates QuaiScan data if available
   - UI automatically refreshes

3. **Fallback to RPC:**
   - If Prometheus fails, falls back to RPC calls
   - Both can work simultaneously

## Troubleshooting

### Prometheus Not Accessible

**Problem:** "Prometheus error: Failed to fetch"

**Solutions:**
1. Check Prometheus is running:
   ```bash
   # Check if Prometheus is running
   curl http://localhost:9090/api/v1/query?query=up
   ```

2. Check Prometheus URL in config:
   - Default: `http://localhost:9090`
   - If on different machine: `http://192.168.2.XXX:9090`

3. Check firewall:
   - Prometheus port 9090 should be accessible
   - If CORS errors, use Express server (`npm start`)

### Wrong Metric Names

**Problem:** Metrics show as 0 or null

**Solutions:**
1. Check Prometheus UI for actual metric names
2. Update `config.js` with correct names
3. Test queries in Prometheus UI first

### CORS Errors

**Problem:** "CORS error" in browser console

**Solutions:**
1. Use Express server instead of opening HTML directly:
   ```bash
   npm start
   ```

2. Or add CORS headers to Prometheus (if you control it)

## Benefits

✅ **Real-time metrics** from Prometheus
✅ **Same data** that Grafana uses
✅ **No RPC dependency** for metrics
✅ **Historical data** available via query_range
✅ **Multiple metrics** in one place

## Next Steps

1. **Find your metric names** in Prometheus UI
2. **Update `config.js`** with correct metric names
3. **Test queries** in Prometheus UI
4. **Verify dashboard** shows correct data

---

**Status:** ✅ Prometheus integration enabled
**Default URL:** `http://localhost:9090`
**Action Required:** Update metric names in `config.js` to match your Prometheus setup

